import React, { useEffect } from "react";
import { Box, Container, FlexBox } from "../styles/container.style";
import { Heading, P } from "../styles/text.style";
import { Image } from "../styles/image.style";
import { Button } from "../styles/button.style";
import NavigationBar from "./NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductRequest } from "../redux/products/productActions";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
import CartLoader from "../skeleton-loader/CartLoader";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  //router dom
  const navigate = useNavigate();
  //hooks write here
  useEffect(() => {
    dispatch(fetchProductRequest());
  }, [dispatch]);
  //user define function write here
  const handleCartItem = (productId) => {
    navigate("/product", { state: productId });
  };

  return (
    <Box>
      <NavigationBar />
      <Container ml="8vw" mr="8vw" mt="8vh" mb="8vh" h="auto">
        <Heading fs="24px" c="#808080">
          Most Popular
        </Heading>
        <br />
        <FlexBox fw="wrap" fd="row" fjc="space-between">
          {products.loading
            ? Array(20).fill(<CartLoader />)
            : products.data.map((data, key) => {
                return (
                  <FlexBox
                    key={key}
                    fd="column"
                    w="250px"
                    fai="center"
                    bgc="white"
                    pd="12px"
                    mb="2vh"
                    cursor="pointer"
                    onClick={() => handleCartItem(data.id)}
                  >
                    <Image src={data.image} maxh="150px" w="150px"></Image>
                    <FlexBox fd="column" fai="center" w="100%">
                      <Heading fs="16px">{data.title.slice(0, 50)}...</Heading>
                      <P tt="capitalize" mt="6px">
                        {data.category}
                      </P>
                      <P mt="6px" c="#f45923">
                        <FaCoins />
                        &nbsp;{data.price}$
                      </P>
                    </FlexBox>
                    <Box mt="6px">
                      <Rating
                        name="half-rating-read"
                        defaultValue={data.rating.rate}
                        precision={0.5}
                        readOnly
                      />
                    </Box>
                    <Button
                      mt="8px"
                      pl="20px"
                      pr="20px"
                      pt="6px"
                      pb="6px"
                      bgc="#f45923"
                      c="white"
                    >
                      See Details
                    </Button>
                  </FlexBox>
                );
              })}
        </FlexBox>
      </Container>
    </Box>
  );
}

export default Home;
