import React, { useState } from "react";
import facade from "./apiFacade";
import "./App.css";

function Admin() {
  const [name2, setName2] = useState("");
  const [id, setId] = useState("");
  const [arr, setArr] = useState([]);

  const [booking, setBooking] = useState({});

  
  const handleNamead = (evt) => {
    setName2(evt.target.value);
  };
  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const prop = target.id;
    const booking1 = { ...booking, [prop]: value };
    setBooking(booking1);
  };
  function handleSubmit() {
    facade.fetchAdmin(setArr, name2);
  }
  function handleSubmitE() {
    const booking2 = { ...booking, ["id"]: {id} };
    console.log(booking2);
      facade.putIt(booking2);
  }
  
  function handleDelete(e) {
    setId(e.target.id);
    console.log(e.target.id);
    facade.delIt(id);
  }
  function handleEdit(e) {
    setId(e.target.id);
    console.log(e.target);
    
  }
  function edit(){

  }
  return (
    <div align="center">
      <h1>Search By Name and get your booking</h1>
      <h6>Name for search</h6>
      <input type="text" id="name2" onChange={handleNamead}></input>
      <br />

      <button onClick={handleSubmit}>Search</button>
      {console.log(arr)}
      <table className="table">
        <thead>
        <tr key="1">
          <th key="2">Nights</th>
          <th key="3">Price</th>
          <th key="4">Name</th>
          <th key="5">id</th>
        </tr>
        </thead>
        {arr.map((x) => {
          return (
            <tr key={x.id} onClick={handleEdit}>
              <td id="nr">{x.numberOfNights}</td>
              <td id="pr">{x.price}</td>
              <td id="name">{x.name}</td>
              <td id={x.id}>{x.id}</td>
              <button id={x.id} onClick={handleDelete}>
                del
              </button>
              <button id={x.id} onClick={handleEdit}>put</button>
            </tr>
          );
        })}
      </table>
    <h1>Edit</h1>
    <form>
                  <div className="summary">
                    <div>
                    <h6>ID</h6>
                      <input
                        type="text"
                        id={id}
                        readOnly
                        value={id}
                      />
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
                      <button className="myButton" onClick={handleSubmitE}>
                        Edit Booking
                      </button> <br/>
                      {console.log(id)}
                    </div>
                  </div>
                </form>
{console.log(booking)}
    </div>
  );
}
export default Admin;
