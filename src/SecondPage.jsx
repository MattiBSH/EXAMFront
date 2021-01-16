import React, { useEffect, useState } from 'react';
import facade from "./apiFacade"
import "./App.css";
 
function SecondPage() {
    const [booking, setBooking] = useState({});
    const [name2,setName2]=useState("");
    const [arr,setArr]=useState([]);

      const handleChange = (evt) => {
        const target = evt.target;
        const value = target.value;
        const prop = target.id;
        const booking1 = { ...booking, [prop]: value };
        setBooking(booking1);
      };
      const handleName = (evt) => {
       
        setName2(evt.target.value);
      };


        function handleSubmit(){
            console.log(facade.addIt);
            facade.addIt(booking);
        }
        function handleSubmitName2(){
            console.log(facade.fetchBookings);
            facade.fetchBookings(setArr,name2);
        }
        
        
  return (
    <div align="center">
      <h1>add Booking</h1>
      <form>
                  <div className="summary">
                    <div>
                      
                      <h6>Nights</h6>
                      <input
                        type="number"
                        id="numberOfNights"
                        onChange={handleChange}
                      />
                      <h6>price</h6>
                      <input
                        type="number"
                        id="price"
                        onChange={handleChange}
                      />
                      <h6>name</h6>
                      <input
                        type="text"
                        id="name"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <br />
                      {console.log(booking)}
                      <button className="myButton" onClick={handleSubmit}>
                        Send Booking
                      </button> <br/>
                      
                    </div>
                  </div>
                </form>
                <h1>Search By Name and get your booking</h1>

                <h6>Name for search</h6>
                      <input type="text"
                        id="name2"
                        onChange={handleName}></input>
                      <br />
                      
                      <button onClick={handleSubmitName2}>Search</button>
                     {console.log(arr)}
                     <table className="table">
                         <tr><th>Nights</th><th>Price</th><th>Name</th></tr>
      {arr.map(x=>{
          return <tr><td >{x.numberOfNights}</td><td>{x.price}</td><td>{x.name}</td></tr>
         
      })}
      </table>           
    </div>
  );
}
export default SecondPage;