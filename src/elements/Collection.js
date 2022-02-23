import React from "react";
import { Box, Container } from "../styles/container.style";
import NavigationBar from "./NavigationBar";
import Jewelery from "./carts/Jewelery";
import Electronic from "./carts/Electronic";

function Collection() {
  return (
    <Box>
      <NavigationBar />
      <Container ml="8vw" mr="8vw" mt="8vh" mb="8vh" h="auto">
        <Jewelery />
        <br />
        <Electronic />
      </Container>
    </Box>
  );
}

export default Collection;
