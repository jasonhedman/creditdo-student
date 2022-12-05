import React from "react";

import { Flex, Text, Box } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  title: string;
  href: string;
  bg: string;
}

const Widget: React.FC<Props> = ({ children, title, href, bg }) => {
  return (
    <Box w='100%'>
    <Link href={href}>
      <Flex direction="column" w="100%" gap={4} bg={bg} p={2} rounded="md">
        <Text fontSize="lg" fontWeight="bold" color="whiteAlpha.800">
          {title}
        </Text>
        <Box py={2} px={4}>
          {children}
        </Box>
      </Flex>
    </Link>
    </Box>
  );
};

export default Widget;
