import React from "react";
import { useState, useEffect } from "react";
const ResturantList = () => {
    const [list, setlist] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    const getData=()=> {
       fetch('http://localhost:3000/restaurant').then
    }
    return (<>
        <h3 className="text-center" >Restuarent list</h3>

        {<div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">ratting</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(record => (
                        <tr key={record.id}>
                            <th scope="row" >{record.id}</th>
                            <td>{record.name}</td>
                            <td>{record.address}</td>
                            <td>{record.ratting}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>}
    </>);





}

export default ResturantList;