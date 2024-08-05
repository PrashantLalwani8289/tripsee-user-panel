// BlogEditor.tsx
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { UploadImage } from '../services/userServices';

interface url {
  url: string;
}

interface FileInfo {
  data: url
}


const BlogEditor: React.FC = () => {

  // const baseUrl = "https://ik.imagekit.io/j6qm4drsf";
  // let imageURLs:string[] = []
  const [content, setContent] = useState<string>('');
  const PublicKey = "public_E9EI0xKylhWQ6Zg8IuojaJTrvQw="


  const handleEditorChange = (content: string) => {
    setContent(content);
  };



  const handleSubmit = () => {
    // imageURLs= extractBase64Images(content)
    extractBase64Images(content)
    // console.log(imageURLs)
  };



  const extractBase64Images = (htmlContent: string): string => {
    // const base64Images: string[] = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const imgTags = doc.querySelectorAll('img');
    imgTags.forEach(async (img) => {
      const src = img.getAttribute('src');
      if (src && src.startsWith('data:image/')) {
        const authResponse = await UploadImage()  // Adjust the endpoint as necessary
          
      const {signature,expire, token} = authResponse.data;
        // console.log(authResponse)
        const base64 = src
        const date = new Date();
        const formData = new FormData();
        formData.append('file', base64);
        formData.append('publicKey', PublicKey as string); // Set your ImageKit public key in .env file
        formData.append('signature', signature);
        formData.append('expire', expire);
        formData.append('token', token);
        formData.append('fileName', date.toISOString());

        // Send the request to ImageKit

        try {
          const uploadResponse: FileInfo = await axios.post('https://upload.imagekit.io/api/v1/files/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(uploadResponse)
          const url = uploadResponse?.data?.url
          console.log(url)
        }
        catch (e) {
          console.log("Error uploading image", e);
        }
      }
    });

    return htmlContent;
  };


  return (
    <div>
      <h1>Blog Editor</h1>
      <Editor
        apiKey="fuvt6x8c9zz8wo4qccvikz3h89rzpk1koxnyznlzak4ymmcz"
        value={content}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | removeformat | image | help',
          // images_upload_handler: example_image_upload_handler,
          automatic_uploads: false,
          file_picker_types: 'image',
        }}
        onEditorChange={handleEditorChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default BlogEditor;
