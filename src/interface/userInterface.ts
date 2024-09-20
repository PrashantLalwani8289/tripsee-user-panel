export interface IUserSignUpSchema  {
    full_name: string,
    email: string,
    password:string,
    confirm_password:string,
}
export interface IUserSignInSchema{
    email: string,
    password:string,
}

export interface IUserSignInSchema  {
    email: string,
    password:string,
}
export interface initialState {
    isAuthenticated: boolean;
    user:userData|null;
}

export interface userData{
    id: string;
    name: string;
    email: string;
    token: string;
}

export interface IBlogSchema{
    title: string;
    category: "Beach"| "Camping"| "Hiking"| "Desert"| "Forest"| "LongDrives"| "FamilyTrips";
    mainImage: string;
    introduction: string;
    photos: string[];
    tips?: string;
    adventure: string;
    accomodationReview?: string;
    destinationGuides?: string;
    customerReview?: string;
    travelChallenges?: string;
    conclusion: string;
    latitude: number;
    longitude: number;
}





// overallRating: yup.number().min(1).max(5),
// priceRange: yup.number().min(1).max(5),
// guestRating: yup.number().min(1).max(5),


