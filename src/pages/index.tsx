import { Box, ButtonGroup, Center, Container, Flex, IconButton, Image, Stack, Text, Wrap } from "@chakra-ui/react";
import React, { useState } from "react";
import { Header } from "../components/Header";
import { SwiperContnents } from "../components/SwiperContnents";
import { MdLens } from 'react-icons/md'

export default function Home() {

  const [words, setWords] = useState(['vida noturna', 'praia', 'moderno', 'clássico', 'e mais...'])

  return (
    <Box bgImage={"url('bg.jpg')"} bgSize={"cover"} h={'full'}>
      <Header/>

      <Stack p={5} py={8} spacing='10px' >
        <Text fontSize={"2xl"}>6 Continentes,<br/> infinitas possibilidades.</Text>
        <Text fontWeight={"medium"} color={'gray.200'}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
      </Stack>

      <Box flexDirection={"column"} alignItems={'center'} color={'gray.600'} bg={'#e7e7e7'} fontSize={'18px'} textColor={'#47585B'} fontWeight={"medium"} pb={'10'}>
          
        <Wrap px={8} py={10} spacingX={'24'} spacingY={'4'}>
          { words.map( data => (
            <Flex key={data} alignItems={'center'} gap='10px' pl={(data === 'e mais...') && '25%'}>
              <MdLens color="#FFBA08" size={14}/>
              <Text>{data}</Text>
            </Flex>
          ))}
        </Wrap>

        <Box h={'5px'} bg={'#b1b1b1'} w={'40%'} ml={'30%'} mb={'6'} rounded={'full'}></Box>

        <Text pb={'4'} align={"center"} fontWeight={'semibold'}>Vamos nessa?<br/>Então escolha seu constinente</Text>

        <SwiperContnents/>

      </Box>
    </Box>
  )
}
