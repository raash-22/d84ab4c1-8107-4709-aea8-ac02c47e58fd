import React from 'react';
import axios from 'axios';
import ButtonAppBar from './demo';
import Grid from '@material-ui/core/Grid';
import { border } from '@mui/system';
import { Container,row,col } from '@material-ui/core';
import './PersonListStyle.css';
export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/product`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      // <ul>
      //   {
      //     this.state.persons
      //       .map(person =>
      //         <><li key={person.pname}>{person.pname}</li>
      //         <li>{person.pprice}</li>
      //         <li>{person.pimg}</li>
      //         <li>{person.pquantity}</li>
      //         </>
      //       )
      //   }
      // </ul>
       <>
      
       
      <div className='PCard'>
        
        {this.state.persons.map(person =>
         
         <div class="card" style={{ width:"18rem",padding:"30px"}}>
         <img src={person.imageUrl} class="card-img-top" style={{ width: 230, height: 230, borderRadius: "6px" }}/>
         <div class="card-body">
         <h3 class="card-title">{person.productName}</h3>
         <h5 class="cart-subtitle">₹{person.price}</h5>
         <h4 className='cart-quantity'>{person.quantity} Pieces</h4>
    <button class="btn-addtocart">Add to cart</button>
  </div>
</div>
 )}
      </div></>
    )
  }
}
