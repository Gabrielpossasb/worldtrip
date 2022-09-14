import { Box, Center, Text, Flex, Container } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Country() {
   return (
      <Flex flex={1} flexDirection={'column'} textColor={'#47585B'}>
         <Header/>

            <Center bgImage={"url('Europe.jpg')"} bgSize={"cover"} h={'36'}>
               <Text fontSize={"3xl"} textColor={'white'} fontWeight={'semibold'}>Europa</Text>
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

               <Box>
               </Box>
            </Container>

      </Flex>
   )
}