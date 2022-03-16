import React, { Component } from 'react';

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

    render() {
      const {userId, firstname,lastname,jobtitle}= this.state
      return (
          <div>
              <h1>Add New Users</h1>
              <form onSubmit={handleSubmit}>
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