import axios from "axios";
import endpoints from "../constants/endpoints";
import { IBlogSchema } from "../interface/userInterface";
import ApiResponse from "../resources/entity/IApiResponse";
import { CommentSchema, LikeSchema } from "../interface/blog";
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

  export const GetAllBlogsByCategory = async (
    category:string
  ): Promise<ApiResponse> => {
    const { data } = await axios.get(`${endpoints.Blog.GET_ALL_BLOG_BY_CATEGORY}?category=${category}`);
    console.log(data);
    return data;
  };
  export const Reacted = async (
    likeData : LikeSchema,
    token : string
  )=> {
    const { data } = await axios.post(`${endpoints.Blog.HANDLE_REACTION}`,likeData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token ? token : ""}`
      },
    });
    console.log(data);
    return data;
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

  export const GetAllComments = async(
    blogId : number,
    commentId?: number,
  ): Promise<ApiResponse> => {
    const { data } = await axios.get(`${endpoints.Blog.GET_ALL_COMMENTS}?blog_id=${blogId}&comment_id=${commentId ? commentId : -1}`);
    console.log(data);
    return data;
  }
