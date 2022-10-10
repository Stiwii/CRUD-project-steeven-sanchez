
import axios from 'axios'
import { useEffect, useState } from 'react'
import { set } from 'react-hook-form'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import UserDelete from './components/UserDelete'

const baseURL = 'https://users-crud1.herokuapp.com'

function App() {

const [users, setUsers] = useState()
//Esto sirve para guardar info hasta actualizar
const [updateInfo, setUpdateInfo] = useState()
const [activateForm, setActivateForm] = useState(true)
const [showUser, setShowUser] = useState()

const getAllUser = () => {
  const URL = `${baseURL}/users/`
  axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err)) 
}
const getUserById = (id) => {
  const URL = `${baseURL}/users/${id}`
  axios.get(URL)
    .then(res => setShowUser(res.data))
    .catch(err => console.log(err)) 
}

const createNewUser = (data) => {
  const URL = `${baseURL}/users/`
  axios.post(URL,data)
    .then(res => {console.log(res.data)
      getAllUser()
    })
    .catch(err => console.log(err))
}

const deleteUserById = id => {
  const URL = `${baseURL}/users/${id}`

  axios.delete(URL)
    .then(res => {console.log(res.data)
    getAllUser()
    })
    .catch(err => console.log(err))
}

 const updateUserById = (id,data) => {
  const URL = `${baseURL}/users/${id}/`

  axios.patch(URL, data)
    .then(res => {
      console.log(res.data)
      getAllUser()
    })
    .catch(err => console.log(err))
 }

useEffect(()=>{
  getAllUser()
  setShowUser()
},[])

// console.log(users)
const handleOpenForm= () => {
  setActivateForm(false)
}


  return (
    <div className="App">
      <div className="App__container-title">
        <h1 className='App__title'>Users CRUD</h1>
      <button onClick={handleOpenForm} className='App__btn'>Create New User</button>
      </div>
      
      <div className={`form-container ${activateForm && 'disable__form'}`}>
        <FormUsers 
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        setUpdateInfo ={setUpdateInfo}
        setUsers={setUsers}
        updateUserById={updateUserById}
        setActivateForm={setActivateForm}
      />
      </div>
      
        {showUser && <div className={`delete__container`}>
          <UserDelete 
          showUser = {showUser}
          setShowUser = {setShowUser}
          deleteUserById = {deleteUserById}
          />
          </div>
          }

      <div className='users-container'> 
      {
        users?.map(user => (
          <UserCard 
          key={user.id}
          user={user}
          deleteUserById = {deleteUserById}
          setUpdateInfo =  {setUpdateInfo}
          setActivateForm={setActivateForm}
          getUserById={getUserById}
          setShowUser={setShowUser}
          />
          ))
      }
      </div>
    </div>
  )
}

export default App
