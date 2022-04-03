import React, {useState} from 'react';
import Dropdown from './dropdown-reuse/Dropdown'
import '../styles.css'

const App = () => {
  const optionList = [
    {'key': 0, 'title':'Beef Enchiladas'}, 
    {'key':1, 'title':'Beer and Brown Sugar Kielbasa & Sauerkraut'}, 
    {'key': 2, 'title':'Coconut Shrimp with Mango Dipping Sauce'},
    {'key':3, 'title':'Crab Cakes with Remoulade Sauce'}, 
    {'key':4, 'title':' Favorite Meatloaf'}, 
    {'key': 5, 'title':'Greek Lamb Gyros with Tzatziki Sauce'} 
  ]

  return (
    <>
    <div className="container">
      <Dropdown options={optionList} name={'Menu'} optionsType={'multiple'}/>
    </div>
    <div className="container">
      <Dropdown options={optionList} name={'Menu'} optionsType={'single'}/>
    </div>
    </>
  )
}

export default App
