import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, FlexBox } from "../styles/container.style";
import { Heading, P } from "../styles/text.style";
import { Image } from "../styles/image.style";
import { Button } from "../styles/button.style";
import NavigationBar from "../elements/NavigationBar";
import { fetchIndividualProductRequest } from "../redux/individual-product/individualProductActions";
import { Rating } from "@mui/material";
import { FaCoins } from "react-icons/fa";

function TabletProduct() {
  var { state } = useLocation();
  const productId = state;

  //redux write here
  const dispatch = useDispatch();
  const product = useSelector((state) => state.individualProduct.payload);

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

  return (
    <Box>
      <NavigationBar />
      <Container ml="8vw" mr="8vw" mt="8vh" mb="8vh" h="auto">
        <FlexBox bgc="white" pd="4vw" fd="column">
          <FlexBox w="100%" h="300px" fjc="center" fai="center" pr="6vw">
            <Image src={product.image} maxh="250px" w="300px"></Image>
          </FlexBox>
          <FlexBox fd="column" fjc="space-between" h="70vh">
            <Heading fs="18px">{product.title}</Heading>
            <FlexBox>
              <Rating
                name="half-rating-read"
                defaultValue={product.rating?.rate}
                precision={0.5}
                readOnly
              />
              &nbsp;&nbsp;
              <P>{product.rating?.count}&nbsp;reviews</P>
            </FlexBox>
            <P tt="capitalize">{product.category}</P>
            <P ta="justify">{product.description}</P>
            <P fs="24px" c="#f45923">
              <FaCoins />
              &nbsp;{product.price}$
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
      </Container>
    </Box>
  );
}

export default TabletProduct;
