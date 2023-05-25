import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import img from '../../../../assets/icon/Group.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-24">
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></SectionTitle>

      <div >
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div>
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className=" flex flex-col items-center">
                  <Rating className="py-5"  style={{ maxWidth: 180 }} value={review.rating} readOnly />
                  <img src={img} alt="" />

                  <p className="px-20 mt-3 text-center">{review.details}</p>
                  <h2 className="text-4xl text-yellow-500 font-bold mt-2">
                    {review.name}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
