import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const AddFriend = ()=> {
    let navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email:''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                navigate('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Friend Name: </label>
                    <input onChange={handleChange} name='name' id="name"/>
                </div>
                <div>
                    <label htmlFor='email'>Friend Email: </label>
                    <input onChange={handleChange} name='email' id='email'/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;