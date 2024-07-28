import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';



export  const StudentTable=({ students, setStudents })=> {
    let handlerDelete =  async (studentId) => {
        // alert(studentId)
        const studentDoc = doc(db, 'students', studentId)
        await deleteDoc(studentDoc)
        setStudents(students.filter((std) => std.id !== studentId))

    }
    return (
        <TableContainer component={Paper} >
            <Table sx={{ width: 700, margin: 'auto' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'> Roll_No</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Age</TableCell>
                        <TableCell align="center">Action</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((student) => (
                        <TableRow
                            key={student.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="center">{student.rollNo}</TableCell>
                            <TableCell align="center">{student.name}</TableCell>
                            <TableCell align="center">{student.age}</TableCell>
                            <TableCell align="center">  <MdEdit /> <MdDelete style={{ color: 'crimson' }} onClick={() => handlerDelete(student.id)} /> </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
