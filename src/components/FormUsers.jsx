import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'
import { AiFillCloseCircle } from 'react-icons/ai';

const defaultValues = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  birthday: ''
}
const FormUsers = ({ createNewUser, updateInfo, setUpdateInfo, updateUserById,setActivateForm }) => {

  const { handleSubmit, register, reset } = useForm()


  // console.log(updateInfo)

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo)
    }
  }, [updateInfo])




  const submit = data => {
    console.log(data)
    if (updateInfo) {
      updateUserById(updateInfo.id, data)
      setUpdateInfo()
    } else {
      createNewUser(data)
    }
    reset(defaultValues)
    setActivateForm(true)
  }

  const handleCloseForm = () => {
    setActivateForm(true)
    setUpdateInfo( )
    reset(defaultValues)
  }
  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <AiFillCloseCircle onClick={handleCloseForm} className='form__x'/>
      <h2 className='form__title'>{updateInfo ? 'UPDATE' : 'CREATE'}</h2>
      <div className='form__div'>
        <label className='form__label' htmlFor="email">Email</label>
        <input className='form__input' placeholder='Enter your email' type="text" id='email' {...register('email')} />
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="password">Password</label>
        <input className='form__input' placeholder='Enter your password' type="password" id='password' {...register('password')} />
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="first_name">First Name</label>
        <input className='form__input' placeholder='Enter your fist name' type="text" id='first_name' {...register('first_name')} />
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="last_name">Last Name</label>
        <input className='form__input' placeholder='Enter your last name' type="text" id='last_name' {...register('last_name')} />
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="birthday">Birthday</label>
        <input className='form__input' placeholder='Enter your birthday' type="date" id='birthday' {...register('birthday')} />
      </div>
      <button className='form__btn'>{updateInfo ? 'UPDATE' : 'CREATE'}</button>
    </form>
  )
}

export default FormUsers