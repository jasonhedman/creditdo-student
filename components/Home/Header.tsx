import React from "react";

import { HStack, Image, Text, VStack } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <HStack w="100%" justifyContent="space-between" >
      <VStack align="flex-start">
        <Text fontSize="2xl" fontWeight="bold" color="blue.300">
          Welcome Erica!
        </Text>
        <Text fontSize="lg" fontWeight="semibold" color="gray.400">
          Do good. Earn greatness
        </Text>
      </VStack>
      <Image
        src={`https://api.multiavatar.com/jasonhedman.png`}
        h="60px"
        w="60px"
        alt={"avatar"}
      />
    </HStack>
  );
};

export default Header;
