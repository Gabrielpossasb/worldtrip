import { Box, Center, Text, Flex, Container, Image, useBreakpointValue, Wrap } from "@chakra-ui/react";
import { Header } from "../components/Header";

interface ApiCidadesProps {
   
   image: string,
   city: string,
   country: string, 
   id: number,
   imageCountry: string
}

export default function Country() {
   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
   })

   const {asia} = require('../../cidades.json')

   console.log(asia.cidades.map((data: ApiCidadesProps) => (data.city === 'Jacarta')))

   return (
      <Flex bg={'#F5F8FA'} flex={1} flexDirection={'column'} textColor={'#47585B'}>
         <Header/>

            <Flex bgImage={"url('Europe.jpg')"} bgSize={"cover"} h={['200px', '350px']} p={10} px={'10%'} justify={['center', 'flex-start']} alignItems={['center', 'end']}>
               <Text fontSize={['3xl',"5xl"]} textColor={'white'} fontWeight={'semibold'}>{asia.continente}</Text>
            </Flex>

            <Flex flexDirection={'column'} px={"6%"} pt={12} gap={['4', '10']} justify={'center'}>
               <Wrap flexDirection={['column', 'row']} justify={'space-between'}>
                  <Text w={['full', '80%', '40%']} fontSize={['', 'xl']}>
                     A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da 
                     Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais,
                     o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                  </Text>
                  <Flex color={'yellow.400'} mt={'4'} fontSize={'4xl'} gap={'10'} fontWeight={'semibold'}>
                     <Text className=''>50<br/><Text color={'#47585B'} fontWeight={'normal'} fontSize={'xl'}>países</Text></Text>
                     <Text className=''>60<br/><Text color={'#47585B'} fontWeight={'normal'} fontSize={'xl'}>línguas</Text></Text>
                     <Text className=''>24<br/><Text color={'#47585B'} fontWeight={'normal'} fontSize={'xl'}>cidades +100</Text></Text>
                  </Flex>
               </Wrap>

               <Text fontSize={"4xl"} fontWeight={'semibold'}>Cidades +100</Text>

               <Wrap p={4} pb={8} spacing={16} flexDirection={"column"}>
                  
                  {
                     asia.cidades.map( (data: ApiCidadesProps) => (
                        <Flex key={data.id} flexDirection={"column"} fontSize={'xl'} rounded={"xl"} shadow={"xl"}>
                           
                           <Image h={'200px'} w={'300px'} src={data.image} alt="imagem city"/>
                           <Flex p={5} borderStyle={"solid"} bg={'#fff'} border={'1px'} alignItems={'center'} justify={"space-between"} borderColor={'rgba(255, 186, 8, 0.5)'}>
                              <Text textColor={'#999999'}>
                                 <Text fontSize={"2xl"} textColor={'#47585B'} mb={'2'} fontWeight={'semibold'}>{data.city}</Text>
                                 {data.country}
                              </Text>
                              <Image h={'14'} borderColor={'#a3a1a1'} borderRadius={"full"}  src={data.imageCountry}/>
                           </Flex>
                        </Flex>
                     ))
                  }
               </Wrap>
            </Flex>

      </Flex>
   )
}