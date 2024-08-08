import axios from "axios";
import endpoints from "../constants/endpoints";
import { IBlogSchema } from "../interface/userInterface";
import ApiResponse from "../resources/entity/IApiResponse";


export const CreateBlog = async (
  BlogData: IBlogSchema
): Promise<ApiResponse> => {
  const { data } = await axios.post(endpoints.Blog.CREATE_BLOG, BlogData, {
    headers: {
      "Content-Type": "application/json",
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
