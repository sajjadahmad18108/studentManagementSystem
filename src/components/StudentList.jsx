import React, { useState, useEffect } from 'react'

import './studentlist.css'
import StudentTable from './StudentTable'

const StudentList = ({student}) => {


  

  return (
      
    <div>
      <StudentTable  StudentList={student}  />
    </div>
     
  )
}

export default StudentList
