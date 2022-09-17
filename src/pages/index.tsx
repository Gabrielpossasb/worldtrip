import { Box, ButtonGroup, Center, Container, Flex, IconButton, Image, Stack, Text, useBreakpointValue, VStack, Wrap } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Header } from "../components/Header";
import { SwiperContnents } from "../components/SwiperContnents";
import { MdLens } from 'react-icons/md'

interface CarrocelProps {
  name: string,
  icon: string,
}

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
 })

  const [words, setWords] = useState([
      {name:'vida noturna', icon:'./assets/vidanoturna.svg'},
      {name:'praia', icon:'./assets/praia.svg'},
      {name:'moderno', icon:'./assets/moderno.svg'},
      {name:'clássico', icon:'./assets/classico.svg'},
      {name:'e mais...', icon:'./assets/mais.svg'},
    ])

  return (
    <Box bgRepeat={'no-repeat'} h={'80vh'} > 
      <Header/>

      <Stack p={[5, 14]} py={8} spacing='10px' bgImage={["url('./assets/banner/mobile.png')", "url('./assets/banner/descktop.png')"]} bgSize={"cover"}>
          <Text fontSize={"2xl"}>5 Continentes, <br/> infinitas possibilidades.</Text>
          <Text fontWeight={"medium"} color={'gray.200'}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        { isWideVersion && <Image position={'absolute'} top={12} right={'36'} src={'./assets/banner/Airplane.svg'} h={'260px'}/>}
      </Stack>

      <Flex pt={['', '10']} gap={'4'} flexDirection={"column"} alignItems={'center'} bg={'#e7e7e7'} fontSize={'18px'} textColor={'#47585B'} fontWeight={"medium"} pb={'10'}>
          
        <Wrap px={8} py={10} justify={'center'} spacingX={'24'} spacingY={'4'}>
          { words.map( (data: CarrocelProps) => (
            <Flex key={data.name} flexDirection={['row', 'column']} alignItems={'center'} gap='10px'>
              {(isWideVersion === false)? <MdLens color="#FFBA08" size={14}/>: <Image h={'16'} src={data.icon} alt={'icons'}/>}
              
              <Text>{data.name}</Text>
            </Flex>
          ))}
        </Wrap>

        <Box h={'5px'} bg={'#b1b1b1'} w={'75px'} mb={'6'} rounded={'full'}/>

        <Text pb={'4'} align={"center"} fontSize={['18px', '26px']} fontWeight={'semibold'}>Vamos nessa?<br/>Então escolha seu constinente</Text>

        <Center w={'full'} bg={'#18202e'}>
          <SwiperContnents />
        </Center>
      </Flex>
    </Box>
  )
}
