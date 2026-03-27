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
        <input type="text" {...register('firstName')}/>
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
