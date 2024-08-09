import axios from "axios";
import endpoints from "../constants/endpoints";
import { IBlogSchema } from "../interface/userInterface";
import ApiResponse from "../resources/entity/IApiResponse";
// import { useSelector } from 'react-redux'
// import { RootState } from "../State Management/Store/Store";




export const CreateBlog = async (
  BlogData: IBlogSchema,
  token:string
): Promise<ApiResponse> => {
    // const useUser = useSelector((state:RootState) => state.root.user?.token)
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
