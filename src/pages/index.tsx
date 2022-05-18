import Home from '@/src/pages/home';
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import Head from "next/head";

const Index = () => {
  const bg = useColorModeValue('#f1f5f9', '#191724');
  const color = useColorModeValue('black', 'white');
  return (
    <Box bg={bg} color={color}>
      <Head>
        <title>Home</title>
      </Head>
      <Home />
    </Box>
  )
}

export default Index; 
