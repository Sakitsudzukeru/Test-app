import React, { Component } from "react";
import { SearchOutlined } from '@ant-design/icons';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";


export default function SearchNotes() {
   
  return (
    
    <div>
    <MyInput type="text" className="btn2" placeholder="Поиск..."/>
      <MyButton className="btn3" >{<SearchOutlined />}</MyButton></div>
  )
}

