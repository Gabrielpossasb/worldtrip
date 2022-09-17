import { Button, Center, Flex, Icon, Image, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiChevronLeft } from "react-icons/fi";


export function Header() {
   const { asPath, push } = useRouter()


   return (
      <Center bg={'whiteAlpha.900'} h='10' >
         { (asPath === '/country') && (
            <Button w={10} h={10} position={'absolute'} bg={'#fafafa'} left={'4%'} onClick={() => push('/')}>
               <Icon as={FiChevronLeft} fontSize={26}/>
            </Button>
         )}

         <Image boxSize='125px' src="Logo.svg" alt='Logo'/>
      </Center>
   )
}