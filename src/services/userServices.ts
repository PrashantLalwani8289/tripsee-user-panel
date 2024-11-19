import axios from "axios";
import endpoints from "../constants/endpoints";
import {
  IUserSignInSchema,
  IUserSignUpSchema,
} from "../interface/userInterface";
import ApiResponse from "../resources/entity/IApiResponse";
import { ContactFormValues, ctaSection } from "../interface/extra";

export const SignUpUser = async (
  signupData: IUserSignUpSchema
): Promise<ApiResponse> => {
  const { data } = await axios.post(endpoints.User.SIGNUP, signupData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const LoginUser = async (
  loginData: IUserSignInSchema
): Promise<ApiResponse> => {
  const { data } = await axios.post(endpoints.User.LOGIN, loginData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const UploadImage = async (): Promise<ApiResponse> => {
  const { data } = await axios.get(endpoints.User.UPLOAD_BLOG_IMAGE, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const Subscribe = async (subData: ctaSection): Promise<ApiResponse> => {
  const { data } = await axios.post(endpoints.Subscribe.SUBSCRIBE, subData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const ContactUs = async (
  contactData: ContactFormValues
): Promise<ApiResponse> => {
  const { data } = await axios.post(
    endpoints.Subscribe.CONTACT_FORM,
    contactData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(data);
  return data;
};

export const GetUser = async (UserId: number): Promise<ApiResponse> => {
  const { data } = await axios.get(
    `${endpoints.User.GET_USER}?userId=${UserId}`
  );
  console.log(data);
  return data;
};

export const GetUserBlogs = async (UserId: number): Promise<ApiResponse> => {
  const { data } = await axios.get(
    `${endpoints.User.GET_USER_BLOGS}?userId=${UserId}`
  );
  console.log(data);
  return data;
};
