import React from "react";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  DateLabel,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

import avatar from "../../images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title> Atividades </Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@aalmeida0</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Andre Almeida</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 25,00</Value>
            <Divider></Divider>
            <Date>
              <Feather name="lock" color="#fff" size={14} />
              <DateLabel>há dois anos</DateLabel>
            </Date>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                color="#fff"
                size={14}
              ></MaterialCommunityIcons>
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" color="#fff" size={14}></AntDesign>
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
