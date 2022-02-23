import styled from "styled-components";

//input tag
export const Input = styled.input.attrs((props) => ({
  type: props.type,
  placeholder: props.ph,
  name: props.name,
  value: props.value,
}))`
  background-color: ${(props) => props.bgc};
  padding: ${(props) => props.pd};
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  max-height: ${(props) => props.maxh};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  min-width: ${(props) => props.minw};
  border-radius: ${(props) => props.br};
`;
