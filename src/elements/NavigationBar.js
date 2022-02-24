import React, { useState, useRef } from "react";
import { Box, FlexBox, Container } from "../styles/container.style";
import { Input } from "../styles/input.style";
import { Image } from "../styles/image.style.js";
import { Button, ButtonWithHover } from "../styles/button.style";
import { Heading, Text } from "../styles/text.style";
import logo from "../images/logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Default, Desktop, Tablet, Mobile } from "../responsive/responsive";
import DesktopNavigationBar from "../responsive/DesktopNavigationBar";
import TabletNavigationBar from "../responsive/TabletNavigationBar";
import MobileNavigationBar from "../responsive/MobileNavigationBar";
import "../App.css";

function NavigationBar() {
  //hooks write here
  const refid = useRef(null);
  const [profileToggle, setProfileToggle] = useState(false);
  const navigate = useNavigate();

  //use local storage
  var cart_item = JSON.parse(localStorage.getItem("add_cart"));

  //user-define function write here
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(refid.current);
    console.log(formData);
  };
  const handleAddToCart = () => {
    navigate("/carts");
  };

  return (
    <>
      <Default>
        <Box bgc="white" h="75px" w="100%" p="sticky" t="0" z="500" dp="block">
          <Container mr="8vw" ml="8vw" h="100%" mt="0px">
            <FlexBox fd="row" fai="center" fjc="space-between" h="100%">
              <FlexBox fd="row" fai="center" w="15vw">
                <Image src={logo} h="50px" w="50px"></Image>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <Heading fs="26px" c="#f45923">
                    ShopBay
                  </Heading>
                </NavLink>
              </FlexBox>
              <FlexBox w="20vw" fjc="center">
                <form onSubmit={handleSubmit} ref={refid}>
                  <Input
                    type="text"
                    pd="10px"
                    h="15px"
                    w="18vw"
                    bgc="whitesmoke"
                    br="20px"
                    name="query"
                  ></Input>
                  <Button
                    pd="7px"
                    br="20px"
                    w="32px"
                    ml="-36px"
                    bgc="#f45923"
                    c="white"
                  >
                    <FaSearch />
                  </Button>
                </form>
              </FlexBox>
              <FlexBox w="20vw" fjc="space-around">
                <Link
                  to="/collection"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Collection
                </Link>
                <Link
                  to="/new-arrival"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  New Arrival
                </Link>
              </FlexBox>
              <FlexBox w="10vw" fjc="space-between">
                <FlexBox>
                  <ButtonWithHover
                    w="40px"
                    h="37px"
                    fs="20px"
                    br="20px"
                    ta="center"
                    pd="8px"
                    onClick={handleAddToCart}
                  >
                    <FaCartPlus />
                  </ButtonWithHover>
                  <Text
                    bgc="#f45923"
                    w="20px"
                    h="20px"
                    br="20px"
                    c="white"
                    pd="2px"
                    ta="center"
                    fs="14px"
                    ml="-6px"
                    mt="-6px"
                  >
                    {cart_item === null ? 0 : cart_item.length}
                  </Text>
                </FlexBox>
                <ButtonWithHover
                  w="40px"
                  h="37px"
                  fs="20px"
                  br="20px"
                  ta="center"
                  pd="8px"
                  onClick={() => setProfileToggle(!profileToggle)}
                >
                  <CgProfile />
                </ButtonWithHover>
              </FlexBox>
            </FlexBox>
          </Container>
        </Box>
        {/* cart button action */}
        <Container
          bgc="white"
          h="auto"
          w="180px"
          pd="10px"
          mt="2px"
          z="400"
          p="fixed"
          r="8vw"
          br="10px"
          dp={profileToggle ? "block" : "none"}
        >
          <Button fs="15px" pd="6px" dp="block" w="100%" mb="8px">
            Log In
          </Button>
          <Button fs="15px" pd="6px" w="100%">
            Sign Up
          </Button>
        </Container>
      </Default>
      <Desktop>
        <DesktopNavigationBar />
      </Desktop>
      <Tablet>
        <TabletNavigationBar />
      </Tablet>
      <Mobile>
        <MobileNavigationBar />
      </Mobile>
    </>
  );
}

export default NavigationBar;
