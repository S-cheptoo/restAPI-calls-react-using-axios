import axios from 'axios';
import React, { Component } from 'react';


class UsersList extends Component {
    // set the state variable
    constructor(props) {
        super(props)
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        axios.get('https://crudcrud.com/api/2685d304280042c8bae09cc3cbb3d3aa/users')
            // the data that comes back will come as a promise
            // a function that is going to assign the return values to users value
            .then(response => {
                this.setState({
                    users: response.data
                })
                console.log(response.data)
            })
    }

    render() {
    //   get the users into the state
        const {users} = this.state
      return (
          <div>
              <h1>Users List</h1>
              {/* now map through all users and get individual user */}
              {
                  users.map(user => <div key={user.id}>{user.firstname}</div>)
              }
          </div>
      );
  }
}

export default UsersList