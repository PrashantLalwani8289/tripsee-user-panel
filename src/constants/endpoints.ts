

const URL = "http://localhost:3002/api/v1"


export default {
    User:{
        SIGNUP:`${URL}/user/signup`,
        LOGIN:`${URL}/user/login`,
        GOOGLE_SIGN_IN:`${URL}/user/google-signin`
    }
} as const;