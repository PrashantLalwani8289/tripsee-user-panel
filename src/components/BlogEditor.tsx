// BlogEditor.tsx
import { yupResolver } from '@hookform/resolvers/yup';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IBlogSchema } from '../interface/userInterface';
import { UploadImage } from '../services/userServices';
import { BlogSchema } from '../validation/userValidation';
import { CreateBlog } from '../services/blogServices';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { toastMessageError, toastMessageSuccess } from './utilities/commonToast/CommonToastMessage';
const BlogEditor: React.FC = () => {
  const navigate = useNavigate()
  // const [content, setContent] = useState<string>('');
  const PublicKey = "public_E9EI0xKylhWQ6Zg8IuojaJTrvQw="


  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<IBlogSchema>({
    mode: "onChange",
    resolver: yupResolver(BlogSchema())
  });


  // const handleEditorChange = (content: string) => {
  //   setContent(content);
  //   console.log(content)
  // };

  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      if (typeof reader.result === 'string') {
        const authResponse = await UploadImage();

        const { signature, expire, token } = authResponse.data;
        const base64 = reader.result;
        const date = new Date();
        const formData = new FormData();
        formData.append('file', base64);
        formData.append('publicKey', PublicKey as string);
        formData.append('signature', signature);
        formData.append('expire', expire);
        formData.append('token', token);
        formData.append('fileName', date.toISOString());

        // Send the request to ImageKit
        const uploadResponse = await axios.post('https://upload.imagekit.io/api/v1/files/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const url = uploadResponse.data.url;
        setValue('mainImage', url);
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = async (formData: IBlogSchema) => {
    // imageURLs= extractBase64Images(content)
    const newHtml = await extractBase64Images(formData.descryption)
    const data = newHtml
    console.log(data)
    formData.descryption = data
    console.log(formData)
    const response = await CreateBlog(formData);
    if (response.success) {
      navigate(ROUTES.BLOGS)
      toastMessageSuccess(response.message)
    } else {
      toastMessageError(response.message)
    }
    console.log(formData.mainImage)
  };

  const extractBase64Images = async (htmlContent: string): Promise<string> => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const imgTags = doc.querySelectorAll('img');

    for (const img of imgTags) {
      const src = img.getAttribute('src');
      if (src && src.startsWith('data:image/')) {
        try {
          const authResponse = await UploadImage();

          const { signature, expire, token } = authResponse.data;
          const base64 = src;
          const date = new Date();
          const formData = new FormData();
          formData.append('file', base64);
          formData.append('publicKey', PublicKey as string);
          formData.append('signature', signature);
          formData.append('expire', expire);
          formData.append('token', token);
          formData.append('fileName', date.toISOString());

          // Send the request to ImageKit
          const uploadResponse = await axios.post('https://upload.imagekit.io/api/v1/files/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          const url = uploadResponse.data.url;
          img.setAttribute('src', url);  // Replace src attribute with the new URL
        } catch (e) {
          console.log("Error uploading image", e);
        }
      }
    }

    return doc.documentElement.outerHTML;  // Return the updated HTML content
  };



  return (
    <>

      <section className="section-blog pb-30 pb-md-60 pb-lg-90">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-18  col-lg-12">
              <div className="contact-page-content">
                <h5 className="mb-20 fix-width-post-content title-style-2">
                  Hey buddy,
                </h5>
                <p className="mb-30 fix-width-post-content">
                  Welcome to our blog community! We're thrilled to have you here and can't wait to see the stories, insights, and experiences you'll share. Whether you’re passionate about travel, technology, health, or any other topic, this is the perfect place to express your ideas and connect with like-minded individuals.
                </p>
                <p className="mb-60 fix-width-post-content">
                  Feel free to submit your own blog posts and become part of our vibrant community. Share your adventures, expertise, and thoughts with our readers, and engage in discussions that spark curiosity and inspire.

                  Start creating and uploading your blogs below, and join us in building a space filled with valuable content and inspiring stories
                </p>
                <div className="contact-from-area fix-width-post-content">
                  <h5 className="mb-20 title-style-2">Let's start</h5>
                  <form className="contact-from" onSubmit={handleSubmit(handleClick)}>
                    <div className="form-group">
                      <Controller
                        name="title"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="form-control"
                            placeholder="Title"
                          />
                        )}
                      />
                      {errors.title && <p className="error">{errors.title.message}</p>}
                    </div>

                    <Controller
                      name="category"
                      control={control}
                      defaultValue="Technology"
                      render={({ field }) => (
                        <select {...field} className="form-control">
                          <option value="">Select Category</option>
                          <option value="Technology">Technology</option>
                          <option value="Health">Health</option>
                          <option value="Travel">Travel</option>
                          <option value="Education">Education</option>
                          <option value="Finance">Finance</option>
                        </select>
                      )}
                    />

                    <div className="form-group">
                      <Controller
                        name="mainImage"
                        control={control}
                        defaultValue={undefined}
                        render={() => (
                          <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            onChange={(e) => {
                              if (e && e.target && e.target.files) {
                                handleImageChange(e.target.files[0]);
                              }
                            }}
                          />
                        )}
                      />
                      {errors.mainImage && <p className="error">{errors.mainImage.message}</p>}
                    </div>

                    <div>
                      <Controller
                        name="descryption"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Editor
                            apiKey="fuvt6x8c9zz8wo4qccvikz3h89rzpk1koxnyznlzak4ymmcz"
                            value={field.value}
                            init={{
                              height: 500,
                              menubar: false,
                              plugins: [
                                'advlist autolink lists link charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount',
                                'image', 'code'
                              ],
                              toolbar:
                                'undo redo | formatselect | bold italic backcolor | ' +
                                'alignleft aligncenter alignright alignjustify | ' +
                                'bullist numlist outdent indent | removeformat | link| image | help | code',
                              automatic_uploads: true,
                              file_picker_types: 'image'
                            }}
                            onEditorChange={field.onChange}
                          />
                        )}
                      />
                      {errors.descryption && <p className="error">{errors.descryption.message}</p>}
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-submit btn btn-primary mb-lg-0 mb-20 mt-lg-40 mt-10"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* container */}
      </section>

    </>
  );
};

export default BlogEditor;
