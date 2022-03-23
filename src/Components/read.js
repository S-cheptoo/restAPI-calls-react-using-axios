import axios from 'axios';
import React, {useEffect, useState} from 'react';
import "../App.css";
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get("https://crudcrud.com/api/2685d304280042c8bae09cc3cbb3d3aa/works")
            .then((getData) => {
                setApiData(getData.data)
            })
    }, []);

    const setData = (id, firstName, lastName) => {
        localStorage.setItem('ID', id);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
    }

    const getData = () => {
         axios.get(`https://crudcrud.com/api/2685d304280042c8bae09cc3cbb3d3aa/works`)
            .then((getData) => {
                setApiData(getData.data)
            })
    }

    const onDelete =(id) => {
        axios.delete(`https://crudcrud.com/api/2685d304280042c8bae09cc3cbb3d3aa/works/${id}`)
            .then(() => {
                getData();
        })
    }

    return (
        <div className='Read'>
            <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Update</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {apiData.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>
                                    <Link to='/update'>
                                        <Button color="green" onClick={() =>setData(data.id)}>Update</Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to='/delete'>
                                        <Button color="red" onClick={() =>onDelete(data.id)}>Delete</Button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default Read;