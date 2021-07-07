import React from 'react';
import Item1 from './images/item1a.jpg';
import Item2 from './images/item2a.jpg';
import Item3 from './images/item3a.jpg';
import Item4 from './images/item4a.jpg';
import Item5 from './images/item5a.jpg';
import Item6 from './images/item6a.jpg';
import './Items.css';


class Items extends React.Component{
    constructor(){
        super()
        this.state={ items: [
            {id:1,title:'Pizza', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1100,img:Item1},
            {id:2,title:'Pancakes', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:300,img: Item2},
            {id:3,title:'Burger', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:400,img: Item3},
            {id:4,title:'Donut', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img:Item4},
            {id:5,title:'Cake', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:700,img: Item5},
            {id:6,title:'Salad', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:250,img: Item6}
        ],}
    }


    render(){
        let itemList = this.state.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div>
                            <img className="card-image" src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                           <br />
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: Rs {item.price}</b></p>
            </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">OUR ITEMS</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

export default Items;