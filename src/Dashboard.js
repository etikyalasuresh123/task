import { useEffect, useState } from "react";
import axios from 'axios';
import Pagination from "./Pagination";


function Dashboard(){

    const [products, setProducts] = useState([]);
    const[perpage, setPerpage] = useState([]);

    useEffect(() =>{
        axios.get("https://fakestoreapi.com/products").then(
            response =>{
                console.log(response);
                setProducts(response.data); setPerpage(response.data.slice(0,5));
            },
            error =>{
                console.log(error);
            }
        )
    })

    const pageHandler = (pageNumber) => {
       
        
        setPerpage(products.slice((pageNumber*5)-5,pageNumber*5));
      }


    const renderList = () => {

        let list = perpage.map(product => {
            var productWithUI = 
                <div className="card" >
                    <div className="block1">
                       
                        <span className="block1">{product.id}</span><span className="block1">{product.title} </span><span className="block1">{product.category}</span><span><button className="block2">EDIT</button><button className="block2">DELETE</button></span>
                        </div>
                   
                </div>
         
            return productWithUI;
        })
        return list;

    }
   
   


    return (
        <div >
            Show  <select>
    <option >1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select> Entires
  <span className="block3"> Search : <input type="text"></input></span><br></br><br></br>

 
               
            
            {products.length > 0 ? renderList()
                
               
                
                : <h1>Products Loading...</h1>}
                    
         
           
                <br></br><br></br><br></br>
                <br></br><br></br>
            <Pagination products={products} pageHandler= {pageHandler}></Pagination><br></br><br></br><br></br>
            


           
        </div>
    )
}

export default Dashboard;