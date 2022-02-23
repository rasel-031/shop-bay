import styled, { keyframes } from "styled-components";

//create the keyframes
const skeletonAnimate = keyframes`
 from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
`;

//skeleton container
export const SkeletonLoader = styled.div`
  background-color: ${(props) => props.bgc};
  opacity: ${(props) => props.op};
  //padding
  padding: ${(props) => props.pd};
  padding-top: ${(props) => props.pt};
  padding-right: ${(props) => props.pr};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  //margin
  margin: ${(props) => props.mar};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  //height, width
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  max-height: ${(props) => props.maxh};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  min-width: ${(props) => props.minw};
  //others
  display: ${(props) => props.dp};
  position: ${(props) => props.p};
  z-index: ${(props) => props.z};
  top: ${(props) => props.t};
  left: ${(props) => props.l};
  right: ${(props) => props.r};
  bottom: ${(props) => props.b};
  border-radius: ${(props) => props.br};
  //animation
  animation: ${skeletonAnimate} 1s linear infinite;
`;
