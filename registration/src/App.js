import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

function App () {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [usersList, setUsersList] = useState([])
  const [newUserName, setNewUserName] = useState('')

  console.log(username, password);

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
      Username: username,
      Email: email,
      Password: password
    })

    setUsersList([
      ...usersList,
      {
        Username: username,
        Password: password,
        Email: email,
      }
    ])
  }

  const deleteAccount = username => {
    Axios.delete(`http://localhost:3000/api/delete/${username}`)
    refreshPage()
  }

  const updateUserName = name => {
    Axios.put('http://localhost:3000/api/update', {
      Username: newUserName
    })
    setNewUserName('')
  }

  return (
    <div className='App'>
      <h1>React SQL Test App</h1>

      <div className='form'>
        
        <label>Username: </label>
        <input
          type='text'
          name='username'
          onChange={e => {
            setUserName(e.target.value)
          }}
        />
        <label>Email </label>
        <input
          type='text'
          name='email'
          onChange={e => {
            setEmail(e.target.value)
          }}
        />
        <label>Password: </label>
        <input
          type='text'
          name='password'
          onChange={e => {
            setPassword(e.target.value)
          }}
        />
        
       
        

        <button onClick={submitLog}>Submit</button>

        {usersList.map(key => {
          return (
            <div className='users'>
              <h1>{key.Name}</h1>
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
              <input
                type='text'
                id='updateInput'
                onChange={e => {
                  setNewUserName(e.target.value)
                }}
              />
              <button
                onClick={() => {
                  updateUserName(key.Name)
                }}
              >
                Update UserName
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default App