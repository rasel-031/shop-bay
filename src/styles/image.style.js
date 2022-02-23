import styled from "styled-components";

//image
export const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  max-height: ${(props) => props.maxh};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  min-width: ${(props) => props.minw};
  display: inline;
`;
