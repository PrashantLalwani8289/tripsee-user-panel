

const URL = "http://localhost:3002/api/v1"


export default {
    User:{
        SIGNUP:`${URL}/user/signup`,
        LOGIN:`${URL}/user/login`,
        GOOGLE_SIGN_IN:`${URL}/user/google-signin`,
        UPLOAD_BLOG_IMAGE:`${URL}/user/upload-blog-image`,
        GET_USER:`${URL}/user/get-user`,
        GET_USER_BLOGS:`${URL}/user/get-user-blogs`,
    },
    Blog:{
        CREATE_BLOG:`${URL}/blog/create-blog`,
        GET_BLOG:`${URL}/blog/get-blog`,
        GET_ALL_BLOGS:`${URL}/blog/get-all-blogs`,
        
    },
    Subscribe:{
        SUBSCRIBE:`${URL}/subscribe/subscribe-new-user`,
        CONTACT_FORM:`${URL}/subscribe/contact-form`
    }
} as const;