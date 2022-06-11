import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard";
import products from "../../constants/products";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.primary.light};
  width: 100%;
`;

const SliderContainer = styled.div`
  width: 1000px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    opacity: 0.3;
    transition: all 0.3s ease-in;
    &-prev,
    &-next,
    &-active {
      opacity: 1;
    }
  }

  .swiper-button-prev {
    left: 30px;
    color: black;
  }
  .swiper-button-next {
    right: 30px;
    color: black;
  }
`;

const Slider = () => {
  const ref = useRef();

  return (
    <Container>
      <SliderContainer>
        <Swiper
          ref={ref}
          spaceBetween={0}
          slidesPerView={4}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          centeredSlides={true}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </Container>
  );
};

export default Slider;
