// src/components/StudentList.jsx
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './StudentList.css';
import AddStudentModal from './AddStudentModal';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [showModal, setShowModal] = useState(false);

    const addStudent = (student) => {
        setStudents([...students, { ...student, id: uuidv4() }]);
        setShowModal(false);
    };

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleFilter = (e) => {
        setFilter(e.target.value);
    };

    const filteredStudents = students.filter(student =>
        student.firstname.toLowerCase().includes(search.toLowerCase()) ||
        student.lastname.toLowerCase().includes(search.toLowerCase()) ||
        student.group.toLowerCase().includes(search.toLowerCase())
    ).filter(student =>
        filter ? student.group === filter : true
    );

    return (
        <div className="student-list">
            <h1>Student List</h1>
            <div className="controls">
                <input
                    type="text"
                    placeholder="Searching"
                    value={search}
                    onChange={handleSearch}
                />
                <select value={filter} onChange={handleFilter}>
                    <option value="">All</option>
                    <option value="Group1">Group1</option>
                    <option value="Group2">Group2</option>
                </select>
                <button onClick={() => setShowModal(true)}>Add student</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Group</th>
                    <th>Does work?</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {filteredStudents.map((student, index) => (
                    <tr key={student.id}>
                        <td>{index + 1}</td>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                        <td>{student.group}</td>
                        <td>{student.doesWork ? 'Yes' : 'No'}</td>
                        <td>
                            <button onClick={() => deleteStudent(student.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showModal && <AddStudentModal addStudent={addStudent} onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default StudentList;
