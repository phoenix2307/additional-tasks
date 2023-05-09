import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";
import {log} from "util";

export type BanknotsType = 'Dollars' | 'RUBLS' | 'All'
// создадим типы для banknotes -он может быть 'Dollars', 'RUBLS' или 'All'
export type MoneyType = {
    banknotes: BanknotsType
    value: number// не ленимся, убираем заглушку, и пишем правильный тип)
    number: string// ложку за Димыча, за...
}

let defaultMoney: MoneyType[] = [  // типизируем
    {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
]

export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
    let filteredMoney = money
    if(filter === 'Dollars'){
        filteredMoney = money.filter(el => el.banknotes === 'Dollars')
        return filteredMoney
    }
    if(filter === 'RUBLS'){
        filteredMoney = money.filter(el => el.banknotes === 'RUBLS')
        return filteredMoney
    } else {
        return money
    }
}

function App() {
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsType>('All')
    const filteredMoney = moneyFilter(money, filterValue)
    console.log(filteredMoney)
    return (

        <div className="App">

            <Country
                data={filteredMoney}   //отрисовать будем деньги после фильтрации
                setFilterValue={setFilterValue}  //useState передаем? Так можно было?!
            />
        </div>
    );
}

export default App;
