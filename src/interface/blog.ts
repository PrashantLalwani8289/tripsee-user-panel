export interface Blog {
    id: number;
    user_id: number;
    title: string;
    introduction: string;
    category: 'Technology' | 'Health' | 'Travel' | 'Education' | 'Finance' | 'other';
    mainImage?: string ;
    photos: string[];
    tips?: string | null;
    adventure: string;
    accomodationReview?: string | null;
    destinationGuides?: string | null;
    customerReview?: string | null;
    travelChallenges?: string | null;
    conclusion: string;
    latitude: number;
    longitude: number;
    approved: boolean;
    created_ts: string | null;  // ISO format date string
    updated_ts: string | null;  // ISO format date string
}


export interface LikeSchema {
    blog_id : number;
    user_id : number;
}

export interface CommentSchema {
    blog_id : number;
    text : string
    parent_id?: number; 
}

export interface IComment {
    id: number;
    user_id: number;
    blog_id: number;
    user_name: string;
    text: string;
    created_ts: string; 
    updated_ts: string;  
    parent_id: number | null;
}