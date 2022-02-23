import styled from "styled-components";

//button
export const Button = styled.button`
  text-align: ${(props) => props.ta};
  display: ${(props) => props.dp};
  border: none;
  cursor: pointer;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  max-height: ${(props) => props.maxh};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  min-width: ${(props) => props.minw};
  //padding
  padding: ${(props) => props.pd};
  padding-top: ${(props) => props.pt};
  padding-right: ${(props) => props.pr};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  background-color: ${(props) => props.bgc};
  color: ${(props) => props.c};
  font-size: ${(props) => props.fs};
  border-radius: ${(props) => props.br};
  //margin
  margin: ${(props) => props.mar};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
`;

//button with hover

export const ButtonWithHover = styled.button`
  text-align: ${(props) => props.ta};
  border: none;
  cursor: pointer;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  max-height: ${(props) => props.maxh};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  min-width: ${(props) => props.minw};
  //padding
  padding: ${(props) => props.pd};
  padding-top: ${(props) => props.pt};
  padding-right: ${(props) => props.pr};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  background-color: ${(props) => props.bgc};
  color: ${(props) => props.c};
  font-size: ${(props) => props.fs};
  border-radius: ${(props) => props.br};
  //margin
  margin: ${(props) => props.mar};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  //hover
  &:hover {
    background-color: #f45923;
    color: white;
  }
`;
