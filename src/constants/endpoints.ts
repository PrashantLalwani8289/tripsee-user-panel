

const URL = "http://localhost:3002/api/v1"


export default {
    User:{
        SIGNUP:`${URL}/user/signup`,
        LOGIN:`${URL}/user/login`,
        GOOGLE_SIGN_IN:`${URL}/user/google-signin`,
        UPLOAD_BLOG_IMAGE:`${URL}/user/upload-blog-image`
    },
    Blog:{
        CREATE_BLOG:`${URL}/blog/create-blog`,
        GET_BLOG:`${URL}/blog/get-blog`,
    }
} as const;