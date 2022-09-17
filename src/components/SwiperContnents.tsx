import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import React, { useContext } from "react";
import { ApiContext } from "../context/useSelectCountry";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function SwiperContnents() {
   const {apiContinent, setContinentSelect} = useContext(ApiContext)
   const { push } = useRouter()

   function handleSelectContinent(id: number) {
      setContinentSelect(
         id,
   )

      push('/country');
   }

   return (
      <Flex w={'full'} maxW={[ 'full', '60%']} h={['250px', '400px']} maxH={'400px'} bg={'#222'} >
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
         >
            { apiContinent.map( data => (
            <SwiperSlide key={data.id} onClick={() => handleSelectContinent(data.id)}>
               <Center bgSize={'cover'} bgRepeat={'no-repeat'} w={"full"} h={'full'}
                  bgImage={data.image}>
                  
                  <Text bg={'blackAlpha.500'} p={'2'} rounded={'xl'} textAlign={'center'} color={'white'} fontWeight={"bold"} fontSize={'4xl'}>
                     {data.continente}<br/>
                     <span style={{fontWeight: 'normal', fontSize: '22px'}}>
                     {data.subDescription}
                     </span>
                  </Text>
               </Center>
            </SwiperSlide>
            ))}
         </Swiper>
      </Flex>
   )
}