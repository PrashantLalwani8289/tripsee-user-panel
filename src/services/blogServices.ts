import axios from "axios";
import endpoints from "../constants/endpoints";
import { IBlogSchema } from "../interface/userInterface";
import ApiResponse from '../resources/entity/IApiResponse';


// export const CreateBlog  = async(data : IBlogSchema): Promise<ApiResponse> => {
//     const {response} = await axios.post(endpoints.Blog.CREATE_BLOG,data,{
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//     console.log(response)
//     return response;
// }

export const CreateBlog = async (BlogData:IBlogSchema):Promise<ApiResponse> =>{
    const {data} = await axios.post(endpoints.Blog.CREATE_BLOG,
        BlogData,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    console.log(data)
    return data;
}