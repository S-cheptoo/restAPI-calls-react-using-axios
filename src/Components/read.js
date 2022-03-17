import axios from 'axios';
import React, {useEffect, useState} from 'react';
import "../App.css";

function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://crudcrud.com/api/2685d304280042c8bae09cc3cbb3d3aa/users`)
            .then((getData) => {
                setApiData(getData.data)
            })
    });
    return (
        <div className='Read'>
            <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                </thead>
                <tbody>
                    {apiData.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

          </div>
      );
}

export default Read;