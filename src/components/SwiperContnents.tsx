import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import React from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function SwiperContnents() {
   const { push } = useRouter()

   return (
      <Flex w={'full'} maxW={[ 'full', '600px']} h={['250px', '400px']} maxH={'400px'} bg={'#222'} >
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         slidesPerView={1}
         navigation
         pagination={{clickable: true}}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
      >
         <SwiperSlide onClick={() => push('/country')}>
            <Center bgSize={'cover'} bgRepeat={'no-repeat'} w={"full"} h={'full'}
               bgImage={'https://cache.quantocustaviajar.com/blog/wp-content/uploads/2018/12/pontos-turisticos-mais-visitados-do-mundo-6.jpg'}>
               
               <Text bg={'blackAlpha.500'} p={'2'} rounded={'xl'} textAlign={'center'} color={'white'} fontWeight={"bold"} fontSize={'4xl'}>
                  Ásia<br/>
                  <span style={{fontWeight: 'normal', fontSize: '22px'}}>
                  O continente mais antigo
                  </span>
               </Text>
            </Center>
         </SwiperSlide>
         <SwiperSlide  onClick={() => push('/country')}>
            <Center bgSize={'cover'} bgRepeat={'no-repeat'} w={"full"} h={'full'}
               bgImage={'https://naplaca.com.br/wp-content/uploads/2017/10/touristic-louvre-back.jpg'}>
               
               <Text bg={'blackAlpha.500'} p={'2'} rounded={'xl'} textAlign={'center'} color={'white'} fontWeight={"bold"} fontSize={'4xl'}>
                  Europa<br/>
                  <span style={{fontWeight: 'normal', fontSize: '22px'}}>
                  O continente mais antigo
                  </span>
               </Text>
            </Center>
         </SwiperSlide>
         <SwiperSlide  onClick={() => push('/country')}>
            <Center bgSize={'cover'} bgRepeat={'no-repeat'} w={"full"} h={'full'}
               bgImage={'https://s204818.gridserver.com/wp-content/uploads/2018/06/Africa-do-sul-viaj-1.jpg'}>
               
               <Text bg={'blackAlpha.500'} p={'2'} rounded={'xl'} textAlign={'center'} color={'white'} fontWeight={"bold"} fontSize={'4xl'}>
                  África<br/>
                  <span style={{fontWeight: 'normal', fontSize: '22px'}}>
                  O continente mais antigo
                  </span>
               </Text>
            </Center>
         </SwiperSlide>
      </Swiper>
      </Flex>
   )
}