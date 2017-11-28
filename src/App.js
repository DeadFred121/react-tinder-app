import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';

class App extends Component {

  // Set the initial state
  state = {
    firstName: 'Big',
    lastName: 'Steve',
    imageURL: 'https://randomuser.me/api/portraits/men/83.jpg',

    // Setting the editing/viewing state
    editing: false
  }



  // When first name changes
  onChangeFirstName = (event) => {
    console.log('First name changed')
    const input = event.target;
    const newFirstName = input.value;
    this.setState(prevState => ({
      firstName: newFirstName
    }))
  }

  // When last name changes
  onChangeLastName = (event) => {
    console.log('Last name changed')
    const input = event.target;
    const newLastName = input.value;
    this.setState(prevState => ({
      lastName: newLastName
    }))
  }

  // When Image URL changes
  onChangeImageURL = (event) => {
    console.log('Image URL changed')
    const input = event.target;
    const newImageURL = input.value;
    this.setState(prevState => ({
      imageURL: newImageURL
    }))
  }

  // When toggling between editing and viewing
  onClickEdit = () => {
    console.log('Toggle editing')
    this.setState(prevState => ({
      editing: !prevState.editing
    }))
  }

  render() {

    // grab values from state
    let { firstName, lastName, imageURL, editing } = this.state;

    return (
      <div className="App">
        <Profile
          firstName={ firstName }
          lastName={ lastName }
          imageURL={ imageURL } />
          <button onClick={ this.onClickEdit }>Edit Profile</button>

        {
          editing && 
        (<form className="profile-form">
          <label>
            First name:
            <input type="text" value={ firstName } onChange={ this.onChangeFirstName } />
          </label>
          <label>
            Last name:
            <input type="text" value={ lastName } onChange={ this.onChangeLastName } />
          </label>
          <label>
            Image URL:
            <input type="text" value={ imageURL } onChange={ this.onChangeImageURL } />
          </label>
        </form>)
        }

      </div>
    );
  }
}

export default App;
