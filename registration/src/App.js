import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

function App () {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newUserName, setNewUserName] = useState('')
  const [usersList, setUsersList] = useState([])

  
  console.log(usersList.map);

  const refreshPage = () => {
    window.location.reload()
  }

  useEffect(() => {
    Axios.get('http://localhost:3000/api/get').then(response => {
      setUsersList(response.data)
    })
  }, [])

  const submitLog = () => {
    Axios.post('http://localhost:3000/api/insert', {
      FirstName: firstname,
      LastName: lastname,
      Username: username,
      Email: email,
      Password: password
    })

    setUsersList([
      ...usersList,
      {
        FirstName: firstname,
        LastName: lastname,
        Username: username,
        Email: email,
        Password: password
      }
    ])
  }

  const deleteAccount = username => {
    Axios.delete(`http://localhost:3000/api/delete/${username}`)
    refreshPage()
  }

  const updateUserName = username => {
    Axios.put('http://localhost:3000/api/update', {
      Username: newUserName
    })
    setNewUserName('')
  }

  return (
    <div className='App'>
      <h1>FotoFlix Test Registration </h1>

      <div className='form'>

      <label>Firstname: </label>
        <input type='text' name='firstname' 
        onChange={e => {
            setFirstname(e.target.value)
          }}
        />

<label>Lastname </label>
        <input type='text' name='lastname' 
        onChange={e => {
            setLastname(e.target.value)
          }}
        />
        
        <label>Username: </label>
        <input type='text' name='username' 
        onChange={e => {
            setUserName(e.target.value)
          }}
        />
        <label>Email </label>
        <input type='text' name='email' 
        onChange={e => {
            setEmail(e.target.value)
          }}
        />
        <label>Password: </label>
        <input type='text' name='password'
          onChange={e => {
            setPassword(e.target.value)
          }}
        />        

        <button onClick={submitLog}>Submit</button>

        {usersList.map(key => {
          return (
            <div className='users'>
              <h1>Hey!{key.FirstName} </h1>
              <p>
                UserName: {key.Username} | Email: {key.Email}{' '}
              </p>
              <button
                onClick={() => {
                  deleteAccount(key.Username)
                }}
              >
                Delete Account
              </button>
              <input type='text' id='updateInput'
                onChange={e => {
                  setNewUserName(e.target.value)
                }}
              />
              <button
                onClick={() => {
                  updateUserName(key.Username)
                }}
              >
                Update Username
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default App