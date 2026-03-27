import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  return (
    <>
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <label>First Name: </label>
        <input 
        className={errors.firstName ? 'input-error' : ''}
        type="text" {...register('firstName', 
          {required: true, 
          minLength:{value:3, message:'Min length at least 3'},
          maxLength:{value:8, message:'Max length at least 8'}
          })}/>
          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label>Middle Name: </label>
        <input type="text" {...register('middleName')}/>
      </div>
      <br />
      <div>
        <label>Last Name: </label>
        <input type="text" {...register('lastName')}/>
      </div>
      <br />
      <input type="submit" />
    </form>
    </>
  )
}

export default App
