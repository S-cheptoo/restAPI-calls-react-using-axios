import React, { useState, useEffect} from 'react'
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ID, setID] = useState(null);

    // // print the values to the console
    // console.log(firstName);
    // console.log(lastName);

    // create a function that sends the values to the api
    const SendToAPI = () => {
        axios.put(`https://crudcrud.com/api/2685d304280042c8bae09cc3cbb3d3aa/works/${ID}`, {
            firstName,
            lastName
        }).then(() => {
            navigate.push('/read')
        })
    }
  
  useEffect(() => {
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setID(localStorage.getItem('ID'));
    }, [])

    return (
        <div className="Update">
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input 
              name='fname'
              value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input
              name='lname'
              value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                placeholder='Last Name' />
            </Form.Field>
            <Button type='submit' onSubmit={SendToAPI}>Update</Button>
        </Form>
        </div>
    );
}

export default Update;