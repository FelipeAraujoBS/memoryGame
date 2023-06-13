import React, { useState } from 'react'
import Cards from './Cards'
import node from "../../assets/imgs/node.png"
import angular from "../../assets/imgs/angular.png"
import css from "../../assets/imgs/css.png"
import html from "../../assets/imgs/html.png"
import scss from "../../assets/imgs/scss.png"
import reactImg from "../../assets/imgs/react.png"
import vue from "../../assets/imgs/vue.png"
import js from "../../assets/imgs/js.png"

import "./Cards.css"

function CardsList() {
    const [items, setItems] = useState([ 
    {id: 1, name: "Node", img: node, stats: ""},
    {id: 2,name: "Angular", img: angular, stats:  ""},
    {id: 3,name: "React", img: reactImg, stats:  ""},
    {id: 4,name: "Css", img: css, stats:  ""},
    {id: 5,name: "Html", img: html, stats:  ""},
    {id: 6,name: "JS", img: js, stats:  ""},
    {id: 7,name: "Vue", img: vue, stats:  ""},
    {id: 8,name: "Scss", img: scss, stats:  ""},
    {id: 1,name: "Node", img: node, stats:  ""},
    {id: 2,name: "Angular", img: angular, stats:  ""},
    {id: 3,name: "React", img: reactImg, stats:  ""},
    {id: 4,name: "Css", img: css, stats:  ""},
    {id: 5,name: "Html", img: html, stats:  ""},
    {id: 6,name: "JS", img: js, stats:  ""},
    {id: 7,name: "Vue", img: vue, stats:  ""},
    {id: 8,name: "Scss", img: scss, stats:  ""}
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    const check = (current) => {
        if(items[current].id === items[prev].id){
            items[current].stats = "correct"
            items[prev].stats = "correct"
            setPrev(-1)
        }else{
            items[current].stats = "wrong"
            items[prev].stats = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stats = ""
                items[prev].stats = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        } 
    }



    const handleClick = (id) => {
     if(prev === -1){
        items[id].stats = "active"
        setItems([...items])
        setPrev(id)
     }else{
        check(id)
     }
    }


  return (
    <div className='container'>
        {items.map((item, index) => (
            <Cards handleClick={handleClick} item={item} key={index} id={index}/>
        ))}
    </div>
  )
}

export default CardsList