import { Box, Center, Text, Flex, Container, Image, useBreakpointValue, Wrap } from "@chakra-ui/react";
import { useContext } from "react";
import { Header } from "../components/Header";
import { ApiContext } from "../context/useSelectCountry";

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

   const {apiContinentSelect} = useContext(ApiContext)

   return (
      <Flex bg={'#F5F8FA'} flex={1} flexDirection={'column'} alignItems={'center'} textColor={'#47585B'}>
            <Header/>

            <Flex flex={1} bg={'#312f2f'} w={'full'} justify={'center'}>
               <Flex bgImage={apiContinentSelect.image} bgPosition={"center"} bgSize={"cover"} 
                  bgRepeat={'no-repeat'} h={['200px','250px', '300px']} maxW={'700px'}  w={'full'} p={10} px={'10%'} 
                  justify={['center', 'flex-start']} alignItems={['center', 'end']}>
                  <Text fontSize={['3xl',"5xl"]} textColor={'white'} fontWeight={'semibold'}>{apiContinentSelect.continente}</Text>
               </Flex>
            </Flex>
         

            <Flex flexDirection={'column'} maxW={'1330px'} px={['6%', "10%"]} pt={12} gap={['4', '10']} >
               <Wrap justify={'space-between'} spacing={'4'}>
                  <Text w={['full', '80%', '50%']} fontSize={['', 'lg']}>
                     {apiContinentSelect.description}
                  </Text>
                  <Flex color={'yellow.400'} mt={'4'} fontSize={'4xl'} gap={['4','10']} fontWeight={'semibold'}>
                     <Text className=''>{apiContinentSelect.países}<br/><Text color={'#47585B'} fontWeight={'normal'} fontSize={'xl'}>países</Text></Text>
                     <Text className=''>{apiContinentSelect.línguas}<br/><Text color={'#47585B'} fontWeight={'normal'} fontSize={'xl'}>línguas</Text></Text>
                     <Text className=''>{apiContinentSelect.qtdCidades}<br/><Text color={'#47585B'} fontWeight={'normal'} fontSize={'xl'}>população</Text></Text>
                  </Flex>
               </Wrap>

               <Text fontSize={"4xl"} fontWeight={'semibold'}>Cidades +100</Text>

               <Wrap pb={8} spacing={16} justify={'center'} flexDirection={"column"}>
                  
                  {
                     apiContinentSelect.cidades.map( (data: ApiCidadesProps) => (
                        <Flex key={data.id} flexDirection={"column"} fontSize={'xl'} rounded={"xl"} shadow={"xl"}>
                           
                           <Image h={'200px'} w={'300px'} src={data.image} alt="imagem city"/>
                           <Flex p={5} borderStyle={"solid"} bg={'#fff'} border={'1px'} alignItems={'center'} justify={"space-between"} borderColor={'rgba(255, 186, 8, 0.5)'}>
                              <Text textColor={'#999999'}>
                                 <Text fontSize={"2xl"} textColor={'#47585B'} mb={'2'} fontWeight={'semibold'}>{data.city}</Text>
                                 {data.country}
                              </Text>
                              <Image h={'14'} w={'14'} borderColor={'#a3a1a1'} src={data.imageCountry}/>
                           </Flex>
                        </Flex>
                     ))
                  }
               </Wrap>
            </Flex>

      </Flex>
   )
}