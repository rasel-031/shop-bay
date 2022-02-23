import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, FlexBox } from "../styles/container.style";
import { Heading, P } from "../styles/text.style";
import { Image } from "../styles/image.style";
import { Button } from "../styles/button.style";
import NavigationBar from "../elements/NavigationBar";
import NoCartFound from "../elements/NoCartFound";
import { useLocation } from "react-router-dom";
import { fetchIndividualProductRequest } from "../redux/individual-product/individualProductActions";

function MobileAddToCart() {
  var { state } = useLocation();
  //redux here
  const dispatch = useDispatch();
  const product = useSelector((state) => state.individualProduct.payload);

  //hooks write here
  var [cancleCart, setCancleCart] = useState([]);
  var cards = JSON.parse(localStorage.getItem("add_cart")) || [];

  useEffect(() => {
    //check the state
    if (state !== null) {
      dispatch(fetchIndividualProductRequest(state.id));

      if (Object.keys(product).length !== 0) {
        cards.push({ ...product, quantity: state.quantity });
        //use local storage
        localStorage.setItem(
          "add_cart",
          JSON.stringify([
            ...new Map(cards.map((item) => [item.id, item])).values(),
          ])
        );
      }
    }
  }, []);

  //cancle cart item
  const handleCancleCart = (cart_data) => {
    setCancleCart(cart_data);
    const removeCartIndex = cards.indexOf(cart_data);
    var getItems = JSON.parse(localStorage.getItem("add_cart"));
    getItems.splice(removeCartIndex, 1);
    localStorage.setItem("add_cart", JSON.stringify(getItems));
  };
  //handle remove all carts
  const handleRemovedAll = () => {
    localStorage.removeItem("add_cart");
    setCancleCart([]);
  };

  return (
    <>
      <Box>
        <NavigationBar />
        <Container ml="8vw" mr="8vw" mt="8vh" mb="8vh" h="auto">
          <FlexBox fd="column">
            {Object.keys(cards).length === 0 ? (
              <NoCartFound />
            ) : (
              cards.map((data, key) => {
                return (
                  <FlexBox
                    key={key}
                    bgc="white"
                    fd="column"
                    fjc="space-between"
                    h="auto"
                    fai="center"
                    pd="15px"
                    mb="12px"
                  >
                    <Image src={data.image} maxh="120px" w="120px"></Image>
                    <FlexBox fd="column" mt="8px">
                      <Heading fs="18px">{data.title.slice(0, 30)}...</Heading>
                      <P fs="16px" tt="capitalize" mt="12px">
                        {data.category}
                      </P>
                    </FlexBox>
                    <FlexBox w="120px" mt="12px">
                      <P>Quantity:&nbsp;{data.quantity}</P>
                    </FlexBox>
                    <FlexBox fd="column" c="#f45923" mt="12px">
                      <P fs="18px">Unit Price: {data.price}$</P>
                      <P fs="18px" mt="12px">
                        Total: {data.price * data.quantity}$
                      </P>
                    </FlexBox>
                    <FlexBox mt="12px">
                      <Button
                        h="35px"
                        w="100%"
                        pl="16px"
                        pr="16px"
                        onClick={() => handleCancleCart(data)}
                      >
                        Remove
                      </Button>
                    </FlexBox>
                  </FlexBox>
                );
              })
            )}
            {/* For Button */}
            <Box dp={Object.keys(cards).length === 0 ? "none" : ""}>
              <FlexBox>
                <Button w="150px" bgc="#f45923" c="white" h="40px" mr="12px">
                  Purchase All
                </Button>
                <Button
                  w="150px"
                  bgc="#f45923"
                  c="white"
                  h="40px"
                  onClick={handleRemovedAll}
                >
                  Remove All
                </Button>
              </FlexBox>
            </Box>
          </FlexBox>
        </Container>
      </Box>
    </>
  );
}

export default MobileAddToCart;
