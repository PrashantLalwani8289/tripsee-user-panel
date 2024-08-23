import * as yup from "yup";

export const signUpSchema = () =>
  yup.object().shape({
    full_name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    confirm_password: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

export const signInSchema = () =>
  yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
  });

  export const BlogSchema = () =>
    yup.object().shape({
      title: yup.string().required(),
      category: yup
        .string()
        .oneOf(
          ["Technology", "Health", "Travel", "Education", "Finance", "other"],
          "Invalid category"
        )
        .required("Category is required"),
      mainImage: yup.string().required(),
      introduction: yup.string().required(),
      photos: yup.array(yup.string().required()).min(1).required(),
      tips: yup.string(),
      adventure: yup.string().required(),
      accomodationReview: yup.string(),
      destinationGuides: yup.string(),
      customerReview: yup.string(),
      travelChallenges: yup.string(),
      conclusion: yup.string().required(),
      latitude: yup
        .number()
        .typeError("Latitude must be a number")
        .required("Latitude is required")
        .min(-90, "Latitude must be greater than or equal to -90")
        .max(90, "Latitude must be less than or equal to 90"),
      longitude: yup
        .number()
        .typeError("Longitude must be a number")
        .required("Longitude is required")
        .min(-180, "Longitude must be greater than or equal to -180")
        .max(180, "Longitude must be less than or equal to 180"),
    });


  export const ctaValidation = () => 
    yup.object().shape({
      email: yup.string().required()
    })