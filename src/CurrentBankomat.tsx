import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <Banknotes color={props.money.banknotes === 'Dollars'? 'aquamarine':'lightcoral'}>
            <Name>{props.money.banknotes}</Name>
            <Nominal>{props.money.value}</Nominal>
        </Banknotes>
    );
};

const Banknotes = styled.div`
  background-color: ${ ({color}) =>color};
      
          // if(props.color ==='aquamarine') {
          //     return 'aquamarine'
          // } else {
          //     return 'lightcoral'
          // }      
  
  font-size: 30px;
  border: 2px solid black;
  padding: 2px;
  margin: 2px;
  width: 200px;
  height: 150px;
`
const Name = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Nominal = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`