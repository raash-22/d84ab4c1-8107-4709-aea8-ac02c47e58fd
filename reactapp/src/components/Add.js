import React from "react";
import { Button,input } from "reactstrap";

import "./Add.css";


const Add=()=>{

    return(
        <div>
            <form className="form">
            <h1 id="head">ADD PRODUCT</h1> 
            
            <div>
            <input type="text"
            id="data"
            placeholder="ENTER PRODUCT NAME"
            name="pname"
            required></input><br/>

            <input
            type="number"
            id="data"
            placeholder="ENTER PRODUCT PRIZE"
            name="pprice"
            required
          ></input><br/>

          <input
            type="url"
            id="data"
            placeholder="ENTER PRODUCT IMAG-URL"
            name="purl"
            required
          ></input><br/>

          <input
            type="number"
            id="data"
            placeholder="ENTER PRODUCT QUANTITY"
            name="pquantity"
            required>
          </input> <br/>
           
          <Button  size="sm">ADD</Button>{' '}
          <Button  size="sm" >UPDATE</Button>{' '}
          <Button  size="sm">DELETE</Button>
          </div>

            

          
            </form>


        </div>
        

    )
}

export default Add;