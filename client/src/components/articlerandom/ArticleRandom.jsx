/* eslint-disable import/no-unresolved */
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ArticleRandom.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ArticleRandom() {
  const [articleRandom, setArticleRandom] = useState();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch("http://localhost:3310/api/articles");
      const data = await response.json();
      setArticleRandom(data);
    };
    fetchArticle();
  }, []);


  return (

    <Swiper 
      slidesPerView={1}
      spaceBetween={66}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      pagination={{
        clickable: true,
      }}
      style={{
        "--swiper-navigation-color": "rgb(0)",
        "--swiper-pagination-color": "rgb(255,250,250)",
      }}
      navigation
      modules={[Pagination, Navigation]}
      className="heroSwiper"
      id="swipper-co"
    >
      {articleRandom?.map((r) => (
        <SwiperSlide key={r}  >
          <NavLink to={`/articles/${r.id}`}>
            <img  src={r.image} alt={r.reference} id="random-image"/>
          </NavLink>
        </SwiperSlide>
      ))}
    </Swiper>
  );

}
