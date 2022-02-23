import React from "react";
import { Container, FlexBox } from "../styles/container.style";
import { SkeletonLoader } from "./skeleton.style";

function CartLoader() {
  return (
    <SkeletonLoader w="250px" h="auto" bgc="white" pd="12px" mb="2vh">
      <Container w="100%" bgc="whitesmoke" h="150px"></Container>
      <Container w="100%" bgc="whitesmoke" h="40px" mt="10px"></Container>
      <FlexBox mt="10px" fd="column" fai="center">
        <Container w="140px" h="15px" bgc="whitesmoke" mt="10px"></Container>
        <Container w="90px" h="15px" bgc="whitesmoke" mt="10px"></Container>
        <Container w="160px" h="20px" bgc="whitesmoke" mt="10px"></Container>
        <Container w="120px" h="35px" bgc="whitesmoke" mt="10px"></Container>
      </FlexBox>
    </SkeletonLoader>
  );
}

export default CartLoader;
