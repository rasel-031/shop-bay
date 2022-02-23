import React, { useEffect } from "react";
import { Box, FlexBox } from "../../styles/container.style";
import { Heading, P } from "../../styles/text.style";
import { Image } from "../../styles/image.style";
import { Button } from "../../styles/button.style";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesElectronicRequest } from "../../redux/categories/categoriesActions";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
import CartLoader from "../../skeleton-loader/CartLoader";

function Electronic() {
  //react redux used here
  const dispatch = useDispatch();
  const electronicProducts = useSelector((state) => state.categoriesElectronic);

  const navigate = useNavigate();
  //all hooks used here
  useEffect(() => {
    dispatch(fetchCategoriesElectronicRequest("electronics"));
  }, [dispatch]);

  //user define function write here
  const handleCartItem = (productId) => {
    navigate("/product", { state: productId });
  };

  return (
    <Box>
      <Heading fs="24px" c="#808080">
        Electronic Products
      </Heading>
      <br />
      <FlexBox fw="wrap" fd="row" fjc="space-between">
        {electronicProducts.loading
          ? Array(6).fill(<CartLoader />)
          : electronicProducts.data.map((data, key) => {
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
    </Box>
  );
}

export default Electronic;
