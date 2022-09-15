import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Image, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import React from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function SwiperContnents() {
   const { push } = useRouter()

   return (
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         slidesPerView={1}
         navigation
         pagination={{clickable: true}}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
      >
         <SwiperSlide onClick={() => push('/country')}>
            <Image src={'Europe.jpg'} alt={'europa'} w={"full"} position={'relative'}/>
               <Text textAlign={'center'} position={'absolute'} left={'15%'} top={'30%'} color={'white'} fontWeight={"bold"} fontSize={'4xl'}>
                  Ásia<br/>
                  <span style={{fontWeight: 'normal', fontSize: '22px'}}>
                  O continente mais antigo
                  </span>
               </Text>
         </SwiperSlide>
         <SwiperSlide  onClick={() => push('/country')}>
            <Image src={'Europe.jpg'} alt={'europa'} w={"full"} position={'relative'}/>
               <Text textAlign={'center'} position={'absolute'} left={'15%'} top={'30%'} color={'white'} fontWeight={"bold"} fontSize={'4xl'}>
                  Ásia<br/>
                  <span style={{fontWeight: 'normal', fontSize: '22px'}}>
                  O continente mais antigo
                  </span>
               </Text>
         </SwiperSlide>
         <SwiperSlide  onClick={() => push('/country')}>
            <Image src={'Europe.jpg'} alt={'europa'} w={"full"} position={'relative'}/>
               <Text textAlign={'center'} position={'absolute'} left={'15%'} top={'30%'} color={'white'} fontWeight={"bold"} fontSize={'4xl'}>
                  África<br/>
                  <span style={{fontWeight: 'normal', fontSize: '22px'}}>
                  O continente mais antigo
                  </span>
               </Text>
         </SwiperSlide>
      </Swiper>
   )
}