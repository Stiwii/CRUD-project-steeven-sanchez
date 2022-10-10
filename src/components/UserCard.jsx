import React, { useState } from 'react'
import { AiFillDelete, AiFillGift } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import './styles/userCard.css'

const UserCard = ({ setActivateForm, user, deleteUserById, setUpdateInfo,getUserById,setShowUser }) => {
const [activateDel, setActivateDel] = useState(false)
  const getInfoUpdate = () => {
    setUpdateInfo(user)
    setActivateForm(false)
  }
  const activateDelete = () => {
    setActivateDel(true)
  }

  const handleDelete = () => {
    getUserById(user.id)
  }
  // console.log(user)
  return (
    <article className='user'>
      <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>

      <ul className='user__list'>
        <li className='user__item'><span className='user__span'>Email </span>{user.email}</li>
        <li className='user__item'><span className='user__span'>Bithday </span>
          <div className='user__item-container'>
            <AiFillGift />{user.birthday}
          </div> </li>
        {/* <li className='user__item'><span className='user__span'>Password </span>{user.password}</li> */}
      </ul>
      <footer className='user__footer'>
        <button className={`user__btn delete__btn ${activateDelete && 'disable__delete'}`}  onClick={handleDelete}>
          <AiFillDelete
            className='user_delete'
             />
        </button>
        <button className='user__btn update__btn' onClick={getInfoUpdate}>
          <BsPencilSquare
            className='user_update'
             />
        </button>

      </footer>
    </article>
  )
}

export default UserCard