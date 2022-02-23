import styled from "styled-components";

//h1 heading
export const Heading = styled.h1`
  margin: 0px;
  padding: 0px;
  font-size: ${(props) => props.fs};
  display: block;
  color: ${(props) => props.c};
  text-align: ${(props) => props.ta};
  text-transform: ${(props) => props.tt};
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
`;
//P tag
export const P = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: ${(props) => props.fs};
  display: block;
  color: ${(props) => props.c};
  text-align: ${(props) => props.ta};
  text-transform: ${(props) => props.tt};
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
`;
//span text
export const Text = styled.span`
  font-size: ${(props) => props.fs};
  background-color: ${(props) => props.bgc};
  color: ${(props) => props.c};
  display: inline;
  text-decoration: none;
  text-align: ${(props) => props.ta};
  text-transform: ${(props) => props.tt};
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
  //height width
  border-radius: ${(props) => props.br};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  max-height: ${(props) => props.maxh};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  min-width: ${(props) => props.minw};
`;
