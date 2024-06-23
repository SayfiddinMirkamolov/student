// src/components/AddStudentModal.jsx
import React, { useState } from 'react';
import './AddStudentModal.css';

const AddStudentModal = ({ addStudent, onClose }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [group, setGroup] = useState('');
    const [doesWork, setDoesWork] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent({ firstname, lastname, group, doesWork });
        setFirstname('');
        setLastname('');
        setGroup('');
        setDoesWork(false);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Add Student</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Group"
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        required
                    />
                    <label>
                        Does Work:
                        <input
                            type="checkbox"
                            checked={doesWork}
                            onChange={(e) => setDoesWork(e.target.checked)}
                        />
                    </label>
                    <div className="modal-buttons">
                        <button type="submit">Add Student</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStudentModal;
