import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";
import styled from "styled-components";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filterValue: BanknotsType)=>void // давайте подумаем, setFilter -это гоузчик, у которого всегда в руках товар
  }

export const Country = (props: CountryPropsType) => {
    const setAll = () => {
        props.setFilterValue('All')
        // засетаем 'All'
    }

    const setDollars = () => {
        props.setFilterValue('Dollars')
        // засетаем 'Dollars'
    }

    const setRUBLS = () => {
        props.setFilterValue('RUBLS')
        // засетаем 'RUBLS'
    }

    return (
        <div>
            <ButtonStyle onClick={setAll}>All</ButtonStyle>
            <ButtonStyle onClick={setDollars}>Dollars</ButtonStyle>
            <ButtonStyle onClick={setRUBLS}>RUBLS</ButtonStyle>
            <City data={props.data}/>
        </div>
    );
};

const ButtonStyle = styled.button`
  width: 75px;
  height: 55px;
  background-color: #61dafb;
  font-size: 18px;
  margin: 10px;
  border-radius: 8px;
`

