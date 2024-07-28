import React, { useState, useEffect } from 'react'

import './studentlist.css'
import{ StudentTable} from './StudentTable'

const StudentList = ({students ,setStudents}) => {


  

  return (
      
    <div>
      <StudentTable  students={students}  setStudents={setStudents}   />
    </div>
     
  )
}

export default StudentList
