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
            </Container>
      </Flex>
   )
}