import { Center, Image, Img } from "@chakra-ui/react";

export function Header() {
   return (
      <Center bg={'whiteAlpha.900'} h='16'>
         <Image boxSize='125px' src="Logo.svg" alt='Logo'/>
      </Center>
   )
}