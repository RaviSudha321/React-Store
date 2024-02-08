import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { NavLink } from "react-router-dom";
import './Home.css'

import HeroSlider from "../../../public/data/HeroSlider";
import ImageText from "../../Components/ImageText/ImageText";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";

function Home(){

    return(
        <>
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                >
                    {HeroSlider.map((slide, index)=>{
                        return(
                            <SwiperSlide key={index} style={{backgroundImage: 'url('+slide.imageUrl+')'}}>
                                <div className="hero_slide">
                                    <div className="hero_slide_content">
                                        <h2 className="slide_title">{slide.title}</h2>
                                        <p className="slide_desc">{slide.description}</p>
                                        <div className="slide_btn">
                                            <NavLink to={slide.buttonLink}>{slide.buttonText}</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
            <ImageText
                imageUrl="/images/about.jpg"
                title="About Us"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                buttonText="Learn More"
                buttonLink="/about"
            />
            <PopularProducts />
        </>
    )
}

export default Home;