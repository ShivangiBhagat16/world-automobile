import { React, useState, useEffect } from 'react';
import axios from 'axios'
import './BodyCss.css'

function Home() {
    const[items, setitems] = useState([])
    const[alldata, setalldata] = useState([])
    useEffect(()=>{
        axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json')
        .then((res)=>{

            setitems(res.data.Results) 
            setalldata(res.data.Results)

        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const info = alldata.map((item)=>{
        return (
            <tr>
                <td>{item.Model_Name}</td>
                <td>{item.Make_Name}</td>
                <td>{item.Model_ID}</td>
            </tr>
       )
    })

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = items.filter((data) => {
            return (data.Model_Name.toLowerCase().search(value) != -1 || 
                    data.Make_Name.toLowerCase().search(value) != -1 ||
                    ('' + data.Model_ID).search(value) != -1);
        });
        setalldata(result);
    }

    return <div className="container Cars Main">
            <div className="SearchBar row">
                <div className="col-md-6">
                    <label>Search </label>
                    <input type="text" onChange={(event) =>handleSearch(event)} placeholder="Search Car Type/Make/year" />
                </div>
            </div>
             <div className="Content">
                <table>
                    <thead>
                        <tr>
                            <th>Car Type</th>
                            <th>Car Make</th>
                            <th>Car Year</th>
                        </tr>
                    </thead>
                    <tbody>
                    {info} 
                    </tbody>
                </table>
            </div>
        </div>
}

export default Home;