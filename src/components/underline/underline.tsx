import { Box, useColorModeValue } from "@chakra-ui/react";

const Underline = () => {
  const underline = useColorModeValue("#F05454", "#2563eb");
  return (
    <>
      <Box bg={underline} className="p-0.5 w-28 mb-2 rounded-sm"></Box>
    </>
  );
};

export default Underline;
