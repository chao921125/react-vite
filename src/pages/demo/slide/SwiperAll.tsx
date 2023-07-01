import { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
export default function SwiperAll() {
	return (
		<div>
			<Swiper loop modules={[EffectFade]} effect="fade">
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
			</Swiper>
		</div>
	);
}
