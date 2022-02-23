import styled from "styled-components";

//box
export const Box = styled.div`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  display: ${(props) => props.dp};
  background-color: ${(props) => props.bgc};
  opacity: ${(props) => props.op};
  //height, width
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  max-height: ${(props) => props.maxh};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  min-width: ${(props) => props.minw};
  position: ${(props) => props.p};
  z-index: ${(props) => props.z};
  top: ${(props) => props.t};
  left: ${(props) => props.l};
  right: ${(props) => props.r};
  bottom: ${(props) => props.b};
`;

//flex-box
export const FlexBox = styled.div`
  display: flex;
  cursor: ${(props) => props.cursor};
  flex-direction: ${(props) => props.fd};
  justify-content: ${(props) => props.fjc};
  align-items: ${(props) => props.fai};
  flex-wrap: ${(props) => props.fw};
  //height, width
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  max-height: ${(props) => props.maxh};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  min-width: ${(props) => props.minw};
  background-color: ${(props) => props.bgc};
  color: ${(props) => props.c};
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

//container
export const Container = styled.div`
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
`;
