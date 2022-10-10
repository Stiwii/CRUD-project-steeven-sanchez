import React from 'react'
import './styles/userDelete.css'
import './styles/userCard.css'
import {  AiFillGift, AiOutlineDislike, AiOutlineLike,  } from 'react-icons/ai'

const UserDelete = ({showUser,setShowUser,deleteUserById}) => {
  const handleYes = () => {
    deleteUserById(showUser.id)
    setShowUser( )
  }
  return (
    <div className='delete__div'>
      
      <article className='user'>
        <h2 className='user__name'>{`${showUser.first_name} ${showUser.last_name}`}</h2>

        <ul className='user__list'>
          <li className='user__item'><span className='user__span'>Email </span>{showUser.email}</li>
          <li className='user__item'><span className='user__span'>Bithday </span>
            <div className='user__item-container'>
              <AiFillGift />{showUser.birthday}
            </div> </li>
          {/* <li className='user__item'><span className='user__span'>Password </span>{showUser.password}</li> */}
        </ul>
      </article>
      <h2 className='delete__alert'><span className='alert_signo'>¡</span> ALERT <span className='alert_signo'>!</span> </h2>
      <h3 className='delete__alert-text'>Are you sure you want to delete this user? </h3>
      <footer className='btn__delete-alert'>
        <button className='delete__btn-alert'
        onClick={handleYes}
        > <AiOutlineLike /> YES</button>
        <button className='delete__btn-alert'
        onClick={() => setShowUser()}
        > <AiOutlineDislike /> NO</button>
      </footer>
      
    </div>
  )
}

export default UserDelete