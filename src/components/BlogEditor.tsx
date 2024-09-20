// BlogEditor.tsx
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { ROUTES } from '../constants/routes';
import { IBlogSchema } from '../interface/userInterface';
import { CreateBlog, UploadToImagekit } from '../services/blogServices';
import { UploadImage } from '../services/userServices';
import { RootState } from '../State Management/Store/Store';
import { BlogSchema } from '../validation/userValidation';
import { toastMessageError, toastMessageSuccess } from './utilities/commonToast/CommonToastMessage';
const BlogEditor: React.FC = () => {
  const token = useSelector((state: RootState) => state.root.user?.token)
  const navigate = useNavigate()
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


  const handleImagesChange = async (files: FileList) => {
    console.log(files);
    
    const demoFileList: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file) {
        const reader = new FileReader(); // Create a new FileReader instance for each file

        reader.onloadend = async () => {
          if (typeof reader.result === 'string') {
            try {
              const authResponse = await UploadImage();
              const { signature, expire, token } = authResponse.data as { signature: string; expire: string; token: string };
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
              const uploadResponse = await UploadToImagekit(formData);
              const url = uploadResponse.data.url;

              demoFileList.push(url);

              setValue("photos", demoFileList);
              // Update the value after each upload
            } catch (error) {
              console.error('Error uploading image:', error);
            }
          }
        };

        reader.readAsDataURL(file); // Start reading the file
      }

    }
  };
  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      if (typeof reader.result === 'string') {
        const authResponse = await UploadImage();
        const { signature, expire, token } = authResponse.data as { signature: string; expire: string; token: string };
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
        const uploadResponse = await UploadToImagekit(formData)

        const url = uploadResponse.data.url;
        setValue('mainImage', url);
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = async (formData: IBlogSchema) => {
    console.log(formData)
    const response = await CreateBlog(formData, token as string);
    if (response.success) {
      navigate(ROUTES.BLOGS)
      toastMessageSuccess(response.message)
    } else {
      toastMessageError(response.message)
    }
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

                    <div className="form-group">
                      <label htmlFor="category">Category</label>
                      <Controller
                        name="category"
                        control={control}
                        defaultValue="Beach"
                        render={({ field }) => (
                          // "Beach", "Camping", "Hiking", "Desert", "Forest", "LongDrives", "FamilyTrips"
                          <select {...field} className="form-control">
                            <option value="">Select Category</option>
                            <option value="Camping">Camping</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Desert">Desert</option>
                            <option value="Forest">Forest</option>
                            <option value="LongDrives">LongDrives</option>
                            <option value="FamilyTrips">FamilyTrips</option>
                          </select>
                        )}
                      />
                      {errors.category && <p className="error">{errors.category.message}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="mainImage">Main Image</label>
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

                    <div className="form-group">
                      <label htmlFor="introduction">Introduction</label>
                      <Controller
                        name="introduction"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="form-control"
                            placeholder="Enter the introduction"
                          />
                        )}
                      />
                      {errors.introduction && <p className="error">{errors.introduction.message}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="photos">Photos</label>
                      <Controller
                        name="photos"
                        control={control}
                        defaultValue={[]}
                        render={({ field: { onBlur, ref } }) => (
                          <input
                            type="file"
                            className="form-control"
                            multiple
                            
                            accept="image/*"
                            placeholder="Upload your trip photos"
                            onChange={(e) => {
                              if (e && e.target && e.target.files) {
                                if(e.target.files.length > 5){
                                  toastMessageError("Cannot select more than 5 Images")
                                }
                                else{
                                  handleImagesChange(e.target.files);
                                }
                                  
                              }
                            }}
                            onBlur={onBlur}
                            ref={ref}
                          />
                        )}
                      />
                      {errors.photos && <p className="error">{errors.photos.message}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="tips">Travel Tips and Hacks</label>
                      <Controller
                        name="tips"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="form-control"
                            placeholder="Enter travel tips"
                          />
                        )}
                      />
                      {errors.tips && <p className="error">{errors.tips.message}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="adventure">Adventure</label>
                      <Controller
                        name="adventure"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="form-control"
                            placeholder="Enter adventure details"
                          />
                        )}
                      />
                      {errors.adventure && <p className="error">{errors.adventure.message}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="accomodationReview">Accommodation Review</label>
                      <Controller
                        name="accomodationReview"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="form-control"
                            placeholder="Enter accommodation review"
                          />
                        )}
                      />
                      {errors.accomodationReview && <p className="error">{errors.accomodationReview.message}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="destinationGuides">Destination Guides</label>
                      <Controller
                        name="destinationGuides"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="form-control"
                            placeholder="Enter destination guides"
                          />
                        )}
                      />
                      {errors.destinationGuides && <p className="error">{errors.destinationGuides.message}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="customerReview">Customer Review</label>
                      <Controller
                        name="customerReview"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="form-control"
                            placeholder="Enter customer review"
                          />
                        )}
                      />
                      {errors.customerReview && <p className="error">{errors.customerReview.message}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="travelChallenges">Travel Challenges</label>
                      <Controller
                        name="travelChallenges"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="form-control"
                            placeholder="Enter travel challenges"
                          />
                        )}
                      />
                      {errors.travelChallenges && <p className="error">{errors.travelChallenges.message}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="conclusion">Conclusion</label>
                      <Controller
                        name="conclusion"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="form-control"
                            placeholder="Enter conclusion"
                          />
                        )}
                      />
                      {errors.conclusion && <p className="error">{errors.conclusion.message}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="latitude">Latitude</label>
                      <Controller
                        name="latitude"
                        control={control}
                        defaultValue={0}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="number"
                            className="form-control"
                            placeholder="Enter latitude"
                          />
                        )}
                      />
                      {errors.latitude && <p className="error">{errors.latitude.message}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="longitude">Longitude</label>
                      <Controller
                        name="longitude"
                        control={control}
                        defaultValue={0}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="number"
                            className="form-control"
                            placeholder="Enter longitude"
                          />
                        )}
                      />
                      {errors.longitude && <p className="error">{errors.longitude.message}</p>}
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