

// const URL = "http://13.127.131.122/api/v1"
const URL = "http://127.0.0.1:3002/api/v1"


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
        GET_ALL_BLOG_BY_CATEGORY:`${URL}/blog/get-blog-by-category`,
        GET_ALL_BLOGS:`${URL}/blog/get-all-blogs`,
        GET_TOP_3_BLOGS:`${URL}/blog/get-top-3-blogs`,
        HANDLE_REACTION:`${URL}/blog/reaction`,
        ADD_COMMENT:`${URL}/blog/add-comment`,
        GET_ALL_COMMENTS:`${URL}/blog/get-comments`
        
    },
    Subscribe:{
        SUBSCRIBE:`${URL}/subscribe/subscribe-new-user`,
        CONTACT_FORM:`${URL}/subscribe/contact-form`
    }
} as const;