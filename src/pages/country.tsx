import { Box, Center, Text, Flex, Container, Image } from "@chakra-ui/react";
import { Header } from "../components/Header";

interface ApiCidadesProps {
   
   image: string,
   city: string,
   country: string, 
   id: number,
   imageCountry: string
}

export default function Country() {
   const {asia} = require('../../cidades.json')

   console.log(asia.cidades.map((data: ApiCidadesProps) => (data.city === 'Jacarta')))

   return (
      <Flex bg={'#F5F8FA'} flex={1} flexDirection={'column'} textColor={'#47585B'}>
         <Header/>

            <Center bgImage={"url('Europe.jpg')"} bgSize={"cover"} h={'36'}>
               <Text fontSize={"3xl"} textColor={'white'} fontWeight={'semibold'}>{asia.continente}</Text>
            </Center>

            <Container mt={'6'}>
               <Text>
                  A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da 
                  Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais,
                  o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
               </Text>
               <Flex color={'yellow.400'} mt={'4'} fontSize={'4xl'} gap={'10'} fontWeight={'semibold'}>
                  <Text className=''>50<br/><Text color={'#47585B'} fontWeight={'normal'} fontSize={'xl'}>países</Text></Text>
                  <Text className=''>60<br/><Text color={'#47585B'} fontWeight={'normal'} fontSize={'xl'}>línguas</Text></Text>
                  <Text className=''>24<br/><Text color={'#47585B'} fontWeight={'normal'} fontSize={'xl'}>cidades +100</Text></Text>
               </Flex>
               <Text fontSize={"4xl"} fontWeight={'semibold'} mt={'8'}>Cidades +100</Text>

               <Flex p={'10'} gap={'10'}  flexDirection={"column"}>
                  
                  {
                     asia.cidades.map( (data: ApiCidadesProps) => (
                        <Flex key={data.id} flexDirection={"column"} fontSize={'xl'} rounded={"xl"} shadow={"dark-lg"}>
                           
                           <Image h={'200px'} src={data.image} alt="imagem city"/>
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
               </Flex>
            </Container>

      </Flex>
   )
}