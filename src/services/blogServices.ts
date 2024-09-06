import axios from "axios";
import endpoints from "../constants/endpoints";
import { IBlogSchema } from "../interface/userInterface";
import ApiResponse from "../resources/entity/IApiResponse";
import { CommentSchema } from "../interface/blog";
// import { useSelector } from 'react-redux'
// import { RootState } from "../State Management/Store/Store";




export const CreateBlog = async (
  BlogData: IBlogSchema,
  token:string
): Promise<ApiResponse> => {   
  const { data } = await axios.post(endpoints.Blog.CREATE_BLOG, BlogData, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token ? token : ""}`
    },
  });
  console.log(data);
  return data;
};

export const UploadToImagekit = async (
    formData: FormData
) => {
  const uploadResponse = await axios.post(
    "https://upload.imagekit.io/api/v1/files/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return uploadResponse
};


export const GetBlog = async (
    BlogId: number
  ): Promise<ApiResponse> => {
    const { data } = await axios.get(`${endpoints.Blog.GET_BLOG}?BlogId=${BlogId}`);
    console.log(data);
    return data;
  };


  export const GetAllBlogs = async (
  ): Promise<ApiResponse> => {
    const { data } = await axios.get(`${endpoints.Blog.GET_ALL_BLOGS}`);
    console.log(data);
    return data;
  };

  export const Reacted = async (
  )=> {
    const { data } = await axios.get(`${endpoints.Blog.HANDLE_REACTION}`);
    console.log(data);
  };


  export const SubmitComment = async (
    commentData : CommentSchema,
    token : string
  ): Promise<ApiResponse> => {
    const { data } = await axios.post(`${endpoints.Blog.ADD_COMMENT}`, commentData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token ? token : ""}`
      },
    });
    console.log(data);
    return data;
  }
