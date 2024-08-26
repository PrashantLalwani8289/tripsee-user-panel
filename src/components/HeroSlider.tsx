import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const HeroSlider: React.FC = () => {
  
 

    return (
        <section className="section-hero hero-5">
            <div className="hero-wrapper-5">
                <Swiper
                    className="swiper hero-5-slider-wrapper"
                    modules={[Navigation, Pagination, Thumbs]}
                    navigation={{
                        nextEl: '.hero-slider-next-btn',
                        prevEl: '.hero-slider-prev-btn',
                    }}
                    loop={true}
                    thumbs={{ swiper: '.hero-thumbs-slider' }}
                    spaceBetween={0}
                    slidesPerView={1}
                >
                    <SwiperSlide
                        className="swiper-slide hero-5-slide"
                        style={{ backgroundImage: "url(assets/images/heroes/lake.jpg)" }}
                    >
                        <h1 className="display-10 text-uppercase rv-text-anime">Never Stop Exploring The World</h1>
                    </SwiperSlide>

                    <SwiperSlide
                        className="swiper-slide hero-5-slide"
                        style={{ backgroundImage: "url(assets/images/heroes/camping.jpg)" }}
                    >
                        <h1 className="display-10 text-uppercase rv-text-anime">Continue exploring the vast world</h1>
                    </SwiperSlide>

                    <SwiperSlide
                        className="swiper-slide hero-5-slide"
                        style={{ backgroundImage: "url(assets/images/heroes/hiking.jpg)" }}
                    >
                        <h1 className="display-10 text-uppercase rv-text-anime">Keep discovering the endless world</h1>
                    </SwiperSlide>

                    <SwiperSlide
                        className="swiper-slide hero-5-slide"
                        style={{ backgroundImage: "url(assets/images/heroes/beach.jpg)" }}
                    >
                        <h1 className="display-10 text-uppercase rv-text-anime">Persist in exploring our globe.</h1>
                    </SwiperSlide>

                    <SwiperSlide
                        className="swiper-slide hero-5-slide"
                        style={{ backgroundImage: "url(assets/images/heroes/desert.jpg)" }}
                    >
                        <h1 className="display-10 text-uppercase rv-text-anime">Never Stop Exploring The World</h1>
                    </SwiperSlide>
                </Swiper>

                <div className="hero-5-slider-bottom-area">
                    <div className="buttons">
                        <div className="hero-slider-prev-btn">
                            <i className="fa-solid fa-angle-left"></i>
                        </div>
                        <div className="hero-slider-next-btn">
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                    <span className="devider"></span>
                    <div className="swiper-pagination"></div>
                </div>

                <div className="hero-thumbs-slider-wrapper">
                    <Swiper
                        className="hero-thumbs-slider"
                        spaceBetween={10}
                        slidesPerView={3}
                        loop={true}
                        watchSlidesProgress
                        modules={[Thumbs]}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className="swiper-slide hero-5-thumbs">
                            <img src="assets/images/heroes/lake.jpg" alt="lake" />
                            <div className="catagory-item">
                                <Link to="category-1.html" className="catagory">LAKE</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide hero-5-thumbs">
                            <img src="assets/images/heroes/camping.jpg" alt="camping" />
                            <div className="catagory-item">
                                <Link to="category-1.html" className="catagory">CAMPING</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide hero-5-thumbs">
                            <img src="assets/images/heroes/hiking.jpg" alt="hiking" />
                            <div className="catagory-item">
                                <Link to="category-1.html" className="catagory">HIKING</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide hero-5-thumbs">
                            <img src="assets/images/heroes/beach.jpg" alt="beach" />
                            <div className="catagory-item">
                                <Link to="category-1.html" className="catagory">BEACH</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide hero-5-thumbs">
                            <img src="assets/images/heroes/desert.jpg" alt="desert" />
                            <div className="catagory-item">
                                <Link to="category-1.html" className="catagory">DESERT</Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
