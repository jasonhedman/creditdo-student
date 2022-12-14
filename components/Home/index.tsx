import React from "react";

import { Flex } from "@chakra-ui/react";

import Header from "./Header";
import Widgets from "./Widgets";

const Home = () => {
  return (
    <Flex direction="column" w="100%" gap={12} flex={1} justifyContent="center" p="">
      <Header />
      <Widgets />
    </Flex>
  );
};

export default Home;
