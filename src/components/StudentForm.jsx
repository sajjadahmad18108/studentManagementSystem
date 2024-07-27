import React from 'react'
import { db } from '../firebase/firebase'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import './student.css'




 let  StudentForm =({fetchStudents})=> {
    const [name , setName ] = useState('')
    const [age , setAge ]  = useState('')
    const [rollNo , setRollno] = useState('')

    let handleSubmit = async(e)=>{
       
        e.preventDefault()
        //  console.log("the form is submitting")
        try {
          await addDoc(collection(db,'students'),{
            rollNo,
            name,
            age
          })
          setRollno('')
          setName('')
          setAge('')
          fetchStudents()
        }
        catch(e){
          console.log(e.message)
        }
    }
  return (
    <div className='main-container'>
       <h2>Student Form</h2>
       <form onSubmit={handleSubmit}>
       <label htmlFor="rollno">RollNo:</label>
       <input type="text"
       value={rollNo}
       placeholder='Enter your rollNo'
       id='rollno'
       onChange={(e)=>setRollno(e.target.value)} />
       <label htmlFor="name">Name:</label>
       <input type="text"
       value={name}
       placeholder='Enter your name'
       id='name'
       onChange={(e)=>setName(e.target.value)} />
       <br />

       <label htmlFor="age">Age:</label>
       <input type="number"
       value={age}
       placeholder='Enter your age'
       id='age'
       onChange={(e)=> setAge(e.target.value)} />

       <button type='submit'>Submit</button>

       </form>
    </div>
  )
}

export default StudentForm

