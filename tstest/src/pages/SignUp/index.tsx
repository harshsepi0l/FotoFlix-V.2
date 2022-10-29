import React, { useState, useEffect } from 'react'
import './SignUp.css'
import Axios from 'axios'

export const SignUp =  () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [usersList, setUsersList] = useState<any>([]);
  const [newUsername, setNewUsername] = useState('')
  


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
      Firstname: firstname,
      Lastname: lastname,
      Username: username,
      Email: email,
      Password: password
    })

    setUsersList([
      ...usersList,
      {
        Firstname: firstname,
        LastName: lastname,
        Username: username,
        Email: email,
        Password: password
      }
    ])
  }

  const deleteAccount = (Username: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => {
    Axios.delete(`http://localhost:3000/api/delete/${Username}`)
    refreshPage()
  }

  const updateUserName = (firstname: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => {
    Axios.put(`http://localhost:3000/api/update/`, {
      
      Firstname: firstname,
      Username: newUsername
    })
    setNewUsername('')
  }

  return (
    <div className='App'>
      <h1>FotoFlix Test Registration Form </h1>

      <div className='form'>

      <label>Firstname: </label>
        <input type='text' name='firstname' 
        onChange={e => {
            setFirstname(e.target.value)
          }}
        />

      <label>Lastname: </label>
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
        <label>Email: </label>
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

        {usersList.map((key: { Firstname: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; Username: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; Email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
          return (
            <div className='users'>
              <h1>Hey! {key.Firstname} </h1>
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
                  setNewUsername(e.target.value)
                }}
              />
              <button
                onClick={() => {
                  updateUserName(key.Firstname)
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