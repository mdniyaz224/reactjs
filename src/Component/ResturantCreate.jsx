import React from "react";

import { useState, useEffect } from "react";
const ResturantCreate = () => {
    const [data, setdata] = useState({
        rname:'',
        remail:'',
        rrating:'',
        raddress:''
    })

    const change = (e) => {
  
        console.log(e.target.value);

        const value = e.target.value;
        const name = e.target.name;
      
        setdata((prevalue) => {
            if (name === 'rname') {
                return {
                    rname: value,
                    remail: prevalue.remail,
                    rrating: prevalue.rrating,
                    raddress: prevalue.raddress
                };
            }
            else if (name === 'remail') {
                return {
                    rname: prevalue.rname,
                    remail: value,
                    rrating: prevalue.rrating,
                    raddress: prevalue.raddress
                };
            }
            else if (name === 'rrating') {
                return {
                    rname: prevalue.rname,
                    remail: prevalue.remail,
                    rrating: value,
                    raddress: prevalue.raddress
                };
            }
            else if (name === 'raddress') {
                return {
                    rname: prevalue.rname,
                    remail: prevalue.remail,
                    rrating: prevalue.rrating,
                    raddress: value
                };
            }



        })


    }
   

    const clickme = (e) => {
        e.preventDefault();
        
   fetch('http://localhost:3000/restaurant',{
    method:"post",
    headers:{
        'content-Type':'application/json'
    },
    body:JSON.stringify(data)
   }).then((result)=>{
    result.json().then((resp)=>{
        alert("resturent added successfully")
       
    })
   })

       
    }
    return (<>

        <h1 className="text-center">create list</h1>

        <form className="text-center" onSubmit={clickme}>
            <input type="text" placeholder="res name" onChange={change} value={data.rname} name="rname" /><br /><br />
            <input type="email" placeholder="res email" onChange={change} value={data.remail} name="remail" /><br /><br />
            <input type="text" placeholder="res rating" onChange={change} value={data.rrating} name="rrating" /><br /><br />
            <input type="text" placeholder="res address" onChange={change} value={data.raddress} name="raddress" /><br /><br />
            <button >Submit</button>
        </form>
    </>);
}

export default ResturantCreate;