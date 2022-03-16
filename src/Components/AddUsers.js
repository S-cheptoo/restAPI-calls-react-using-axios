import React, { Component } from 'react';
import axios from 'axios';

class AddUsers extends Component {
    
    constructor(props) {
      super(props)
    
        this.state = {
            userId: '',
            firstname: '',
            lastname: '',
            jobtitle: ''
        };
    }

    // we take that changed and set it to a state using the handleChange function
    handleChange=(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // display on the console the content of the user in the input
    handleSubmit=(e) => {
        e.preventDefault()
        axios.post('https://crudcrud.com/api/2685d304280042c8bae09cc3cbb3d3aa/users', this.state)
            // the data that comes back will come as a promise
            // a function that is going to assign the return values to users value
            .then(response => {
                console.log(response)
            })
    }

    render() {
      const {userId, firstname,lastname,jobtitle}= this.state
      return (
          <div>
              <h1>Add New Users</h1>
              <form onSubmit={this.handleSubmit}>
                  <div>
                      <label>User Id:</label>
                      <input type='text'
                        name='userId'
                        value={userId}
                        onChange={this.handleChange} //handle the change of events
                      ></input>
                  </div>
                  <div>
                      <label>First Name:</label>
                      <input type='text'
                        name='firstname'
                        value={firstname}
                        onChange={this.handleChange} //handle the change of events
                      ></input>
                  </div>
                  <div>
                      <label>Last Name:</label>
                      <input type='text'
                        name='lastname'
                        value={lastname}
                        onChange={this.handleChange} //handle the change of events
                      ></input>
                  </div>
                  <div>
                      <label>Job Title:</label>
                      <input type='text'
                        name='jobtitle'
                        value={jobtitle}
                        onChange={this.handleChange} //handle the change of events
                      ></input>
                  </div>
                  <div>
                      <button type='submit'>Submit</button>
                  </div>

              </form>
          </div>
      );
  }
}

export default AddUsers