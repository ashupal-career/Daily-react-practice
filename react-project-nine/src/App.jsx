import React, { useState } from "react";
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    gender: "",
    hobbies: [],
    message: "",
    country: ""
  })

  const handleChange = (e) => 
    {
      const { name, value, type, checked } = e.target

      if (type === "checkbox") 
        {
          let updatedHobbies = [...formData.hobbies]
          if (checked) 
            {
              updatedHobbies.push(value)
            } 
          else 
            {
              updatedHobbies = updatedHobbies.filter((item) => item !== value)
            }
          setFormData({ ...formData, hobbies: updatedHobbies })
        } 
      else 
        {
          setFormData({ ...formData, [name]: value })
        }
    }

  const handleSubmit = (e) => 
    {
    e.preventDefault()
    console.log(formData)
  };

  return (
    <div style={{border:"2px solid black", padding:"20px", width:"400px"}}>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange}/>
        </div><br/>

        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange}/>
        </div><br/>

        <div>
          <label>Gender:</label>
          <input type="radio" name="gender" value="male" onChange={handleChange}/>Male
          <input type="radio" name="gender" value="female" onChange={handleChange}/> Female      
          </div><br/>

        <div>
          <label>Hobbies:</label>
          <input type="checkbox" value="swim" onChange={handleChange}/>Swim
          <input type="checkbox" value="football" onChange={handleChange}/>Football
          <input type="checkbox" value="editing" onChange={handleChange}/>Editing
        </div><br/>

        <div>
          <label>Message:</label><br/>
          <textarea name="message" row="4" cols="30" onChange={handleChange}></textarea>
        </div><br/>

        <div>
          <label>Country:</label>
          <select name="country" onChange={handleChange}>
            <option value="">Select</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div><br/>

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}
export default App;