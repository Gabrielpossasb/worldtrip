import { Box, ButtonGroup, Center, Container, Flex, Image, Stack, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Box bgImage={"url('bg.jpg')"}>
      <Header/>

      <Stack p={5} py={8} spacing='10px' >
        <Text fontSize={"2xl"}>5 Continentes,<br/> infinitas possibilidades.</Text>
        <Text fontWeight={"medium"} color={'gray.200'}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
      </Stack>

      <Box flexDirection={"column"} color={'gray.600'} bg={'whiteAlpha.900'} fontSize={'xl'}>
        <Wrap px={12} py={10} spacingX={'24'} spacingY={'4'} alignItems={'Box'}>
          <Text>vida nooturna</Text>
          <Text>pria</Text>
          <Text>moderno</Text>
          <Text>clássico</Text>
          <Text>e mais...</Text>
        </Wrap>
        <Text align={"center"} fontWeight={'bold'}>Vamos nessa?<br/>Então escolha seu constinente</Text>
      </Box>
    </Box>
  )
}
