import React, { useEffect, useState } from 'react';
import facade from "./apiFacade"
import "./App.css";

function FirstPage() {
    const [hotels, setHotels] = useState([]);
    const [arr,setArr]=useState([]);
    const [city,setCity]=useState("");
    useEffect(() => {
        
        facade.fetchHotels(setHotels);

        
      },[]);
    
        function all(){
            setArr(JSON.parse(hotels));
        }
        
        function handleChange(e){     
                const value = e.target.value;
                setCity(value);
                console.log(city);
        }
  return (
    <div>
      <h1>All hotels</h1>
      <input onChange={handleChange}></input>
      <table>
      {arr.map(x=>{
          if(x.city=city){
            return (
                <div>
                    <tr><td>{x.id }</td><td>{x.name}</td><td>{x.address }</td><td>{x.phone}</td><td>{x.city}</td></tr><br/>
                </div>)
          }else{

          }
         
      })}
      </table>
      Click this for specified city<button onClick={all}></button>
      
      Click this for all<button onClick={all}></button>

      <table>
      {arr.map(x=>{
          return (
          <div>
              <tr><td>{x.id }</td><td>{x.name}</td><td>{x.address }</td><td>{x.phone}</td></tr><br/>
          </div>)
      })}
      </table>
    </div>
  );
}
export default FirstPage;