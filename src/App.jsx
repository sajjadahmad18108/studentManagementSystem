import { useState, useEffect } from 'react'

import './App.css'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import { db } from './firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'


function App() {
  const [students, setStudents] = useState([])

  const fetchStudents = async () => {

    try {
      const querySnapshot = await getDocs(collection(db, 'students'))
      const studentData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setStudents(studentData)
    } catch (e) {
      console.log(e.message)
    }
  }
  useEffect(() => {
    fetchStudents()
  }, [])




  return (
    <>
      <StudentForm  fetchStudents={fetchStudents} />
      <StudentList students={students}  setStudents={setStudents} />
    </>
  )
}

export default App
