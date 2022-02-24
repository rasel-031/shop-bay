import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, FlexBox } from "../styles/container.style";
import { Heading, P } from "../styles/text.style";
import { Image } from "../styles/image.style";
import { Button } from "../styles/button.style";
import NavigationBar from "./NavigationBar";
import { fetchIndividualProductRequest } from "../redux/individual-product/individualProductActions";
import { Rating } from "@mui/material";
import { FaCoins } from "react-icons/fa";
import { Default, Desktop, Tablet, Mobile } from "../responsive/responsive";
import TabletProduct from "../responsive/TabletProduct";
import MobileProduct from "../responsive/MobileProduct";
import ProductLoader from "../skeleton-loader/ProductLoader";
import { CgLaptop } from "react-icons/cg";

function Product() {
  var { state } = useLocation();
  const productId = state;

  //redux write here
  const dispatch = useDispatch();
  const product = useSelector((state) => state.individualProduct);

  //hooks write here
  const navigate = useNavigate();
  var [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchIndividualProductRequest(productId));
  }, [dispatch, productId]);

  //user-define function write here
  const handleAddToCartSubmit = () => {
    navigate("/carts", { state: { id: productId, quantity: quantity } });
  };
  //user-define function write here
  const quantityIncrement = () => {
    setQuantity((quantity = quantity + 1));
  };
  const quantityDecrement = () => {
    if (quantity > 1) {
      setQuantity((quantity = quantity - 1));
    } else {
      quantity = 1;
    }
  };

  console.log(product.loading);

  return (
    <>
      <Default>
        <Box>
          <NavigationBar />
          <Container ml="8vw" mr="8vw" mt="8vh" mb="8vh" h="auto">
            {product.loading ? (
              <ProductLoader />
            ) : (
              <FlexBox bgc="white" pd="4vw">
                <FlexBox w="400px" h="400px" fjc="center" fai="center" pr="6vw">
                  <Image
                    src={product.payload.image}
                    maxh="300px"
                    w="350px"
                  ></Image>
                </FlexBox>
                <FlexBox fd="column" fjc="space-between">
                  <Heading fs="18px">{product.payload.title}</Heading>
                  <FlexBox>
                    <Rating
                      name="half-rating-read"
                      defaultValue={product.payload.rating?.rate}
                      precision={0.5}
                      readOnly
                    />
                    &nbsp;&nbsp;
                    <P>{product.payload.rating?.count}&nbsp;reviews</P>
                  </FlexBox>
                  <P tt="capitalize">{product.payload.category}</P>
                  <P ta="justify">{product.payload.description}</P>
                  <P fs="24px" c="#f45923">
                    <FaCoins />
                    &nbsp;{product.payload.price}$
                  </P>
                  <FlexBox w="250px" fai="center">
                    <P>Quantity</P>
                    <FlexBox ml="25px" fai="center">
                      <Button
                        pl="16px"
                        pr="16px"
                        pt="8px"
                        pb="8px"
                        mr="12px"
                        onClick={quantityDecrement}
                      >
                        -
                      </Button>
                      <P>{quantity}</P>
                      <Button
                        pl="16px"
                        pr="16px"
                        pt="8px"
                        pb="8px"
                        ml="12px"
                        onClick={quantityIncrement}
                      >
                        +
                      </Button>
                    </FlexBox>
                  </FlexBox>
                  <Button
                    w="250px"
                    pd="12px"
                    bgc="#f45923"
                    c="white"
                    fs="16px"
                    onClick={handleAddToCartSubmit}
                  >
                    Add to Cart
                  </Button>
                </FlexBox>
              </FlexBox>
            )}
          </Container>
        </Box>
      </Default>
      {/* For Desktop */}
      <Desktop>
        <Box>
          <NavigationBar />
          <Container ml="8vw" mr="8vw" mt="8vh" mb="8vh" h="auto">
            {product.loading ? (
              <ProductLoader />
            ) : (
              <FlexBox bgc="white" pd="4vw">
                <FlexBox w="400px" h="400px" fjc="center" fai="center" pr="6vw">
                  <Image
                    src={product.payload.image}
                    maxh="300px"
                    w="350px"
                  ></Image>
                </FlexBox>
                <FlexBox fd="column" fjc="space-between">
                  <Heading fs="18px">{product.payload.title}</Heading>
                  <FlexBox>
                    <Rating
                      name="half-rating-read"
                      defaultValue={product.payload.rating?.rate}
                      precision={0.5}
                      readOnly
                    />
                    &nbsp;&nbsp;
                    <P>{product.payload.rating?.count}&nbsp;reviews</P>
                  </FlexBox>
                  <P tt="capitalize">{product.payload.category}</P>
                  <P ta="justify">{product.payload.description}</P>
                  <P fs="24px" c="#f45923">
                    <FaCoins />
                    &nbsp;{product.payload.price}$
                  </P>
                  <FlexBox w="250px" fai="center">
                    <P>Quantity</P>
                    <FlexBox ml="25px" fai="center">
                      <Button
                        pl="16px"
                        pr="16px"
                        pt="8px"
                        pb="8px"
                        mr="12px"
                        onClick={quantityDecrement}
                      >
                        -
                      </Button>
                      <P>{quantity}</P>
                      <Button
                        pl="16px"
                        pr="16px"
                        pt="8px"
                        pb="8px"
                        ml="12px"
                        onClick={quantityIncrement}
                      >
                        +
                      </Button>
                    </FlexBox>
                  </FlexBox>
                  <Button
                    w="250px"
                    pd="12px"
                    bgc="#f45923"
                    c="white"
                    fs="16px"
                    onClick={handleAddToCartSubmit}
                  >
                    Add to Cart
                  </Button>
                </FlexBox>
              </FlexBox>
            )}
          </Container>
        </Box>
      </Desktop>
      {/* For tablet */}
      <Tablet>
        <TabletProduct />
      </Tablet>
      {/* For Mobile */}
      <Mobile>
        <MobileProduct />
      </Mobile>
    </>
  );
}

export default Product;
