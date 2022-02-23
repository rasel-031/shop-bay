import React from "react";
import { Box, Container, FlexBox } from "../styles/container.style";
import { Heading } from "../styles/text.style";
import { Image } from "../styles/image.style";
import noCartImg from "../images/nocart.png";

function NoCartFound() {
  return (
    <Box>
      <Container
        ml="8vw"
        mr="8vw"
        mt="8vh"
        mb="8vh"
        h="60vh"
        bgc="white"
        op="0.6"
      >
        <FlexBox fai="center" fjc="center" fd="column" h="100%">
          <Heading pd="16px" fs="24px">
            No Card Found!!
          </Heading>
          <Image src={noCartImg} maxh="120px" w="auto"></Image>
        </FlexBox>
      </Container>
    </Box>
  );
}

export default NoCartFound;
