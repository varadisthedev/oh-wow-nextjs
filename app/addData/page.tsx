// In your React component
"use client";
import axios from 'axios';
import { useState } from 'react';

export default function CreateUser() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            // POST to your own Next.js API route
            const response = await axios.post('/api/users', formData);

            setMessage('User created successfully!');
            console.log('Response:', response.data);

            // Reset form
            setFormData({ name: '', email: '', age: '' });
        } catch (error) {
            setMessage(error.response?.data?.error || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create User'}
            </button>
            {message && <p>{message}</p>}
        </form>
    );
}