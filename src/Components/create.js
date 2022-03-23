import React, { useState} from 'react'
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // // print the values to the console
    // console.log(firstName);
    // console.log(lastName);

    // create a function that sends the values to the api
    const SendToAPI = () => {
        axios.post(`https://crudcrud.com/api/2685d304280042c8bae09cc3cbb3d3aa/works`, {
            firstName,
            lastName
        }).then(() => {
            navigate.push('/read')
        })
    }

    return (
        <div className="Create">
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input 
                name='fname'
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input
                name='lname'
                onChange={(e)=>setLastName(e.target.value)}
                placeholder='Last Name' />
            </Form.Field>
            <Button type='submit' onSubmit={SendToAPI}>Submit</Button>
        </Form>
        </div>
    );
}

export default Create;