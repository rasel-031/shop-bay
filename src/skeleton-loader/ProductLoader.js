import React from "react";
import { Container, FlexBox } from "../styles/container.style";
import { SkeletonLoader } from "./skeleton.style";

function ProductLoader() {
  return (
    <SkeletonLoader w="75vw" h="50vh" bgc="white" pd="12px" mb="2vh">
      {/* <Container w="100%" bgc="whitesmoke" h="40px" mt="10px"></Container> */}
      <FlexBox mt="10px" fd="row">
        <FlexBox w="30vw" bgc="whitesmoke" minh="350px" h="45vh"></FlexBox>
        <FlexBox ml="24px" fd="column" h="100%">
          <Container w="30vw" h="5vh" bgc="whitesmoke" mb="12px"></Container>
          <Container w="20vw" h="3vh" bgc="whitesmoke" mb="12px"></Container>
          <Container w="10vw" h="3vh" bgc="whitesmoke" mb="12px"></Container>
          <Container w="50vw" h="12vh" bgc="whitesmoke" mb="12px"></Container>
          <Container w="170px" h="5vh" bgc="whitesmoke" mb="12px"></Container>
          <Container w="220px" h="5vh" bgc="whitesmoke" mb="12px"></Container>
          <Container w="260px" h="40px" bgc="whitesmoke"></Container>
        </FlexBox>
      </FlexBox>
    </SkeletonLoader>
  );
}

export default ProductLoader;
