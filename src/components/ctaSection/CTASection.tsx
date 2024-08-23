import { Controller, useForm } from "react-hook-form"
import { ctaSection } from "../../interface/extra";
import { ctaValidation } from "../../validation/userValidation";
import { yupResolver } from "@hookform/resolvers/yup";
const CTASection = () => {
    const { control, handleSubmit, formState: { errors }, } = useForm<ctaSection>({mode: "onChange",
        resolver: yupResolver(ctaValidation())});

    const handleClick = ( data  : ctaSection) =>{
        console.log(data);
    }
    return (
        <section className="section-cta wow fadeInUp" data-bs-theme="light" data-wow-delay="0.4s">
            <div className="container">
                <div className="cta-area pt-lg-60 pb-lg-90 pt-30 pb-30">
                    <div className="col-xl-6">
                        <div className="cta-content pl-lg-100">
                            <p className="fs-6 text-white mb-10">Keep in Touch</p>
                            <h3 className=" fs-3 text-white  mb-30 ">Explore the world</h3>
                            <form onSubmit={handleSubmit(handleClick)}>
                                <div className="form-group d-flex gap-30">
                                    <Controller
                                    control={control}
                                    name="email"
                                    rules={{ required: "Email is required" }}
                                    render={({ field }) => <input {...field} type="email" className="form-control" />}
                                    defaultValue=""
                                    />
                                    <button type="submit" className="btn">Subscribe</button>
                                </div>
                                    {errors && errors.email && <div style={{marginTop:"5px"}}>Enter a valid email</div>}    
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection