import React from "react";
import { Box, Container, FlexBox } from "../styles/container.style";
import { Heading } from "../styles/text.style";
import { Image } from "../styles/image.style";
import NavigationBar from "./NavigationBar";
import NewArrivalImg from "../images/new-arrival.jpg";

function NewArrival() {
  return (
    <Box>
      <NavigationBar />
      <Box>
        <Container ml="8vw" mr="8vw" mt="8vh" mb="8vh" h="60vh" bgc="white">
          <FlexBox fai="center" fjc="center" fd="column" h="100%">
            <Heading pd="16px" fs="24px">
              Upcoming..!!
            </Heading>
            <Image src={NewArrivalImg} maxh="220px" w="auto"></Image>
          </FlexBox>
        </Container>
      </Box>
    </Box>
  );
}

export default NewArrival;
