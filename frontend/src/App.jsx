import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/contacts');
      console.log('API response data:', res.data);
      setContacts(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error('Error fetching contacts', error);
    }
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddContact = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contacts', form);
      setForm({ name: '', email: '', phone: '' });
      fetchContacts();
    } catch (error) {
      console.error('Error adding contact', error);
    }
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact', error);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center' }}>Contact Keeper</h1>

      <form onSubmit={handleAddContact} style={{ marginBottom: 20 }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: 8, marginRight: 10, width: '30%' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: 8, marginRight: 10, width: '30%' }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
          style={{ padding: 8, marginRight: 10, width: '25%' }}
        />
        <button type="submit" style={{ padding: '8px 12px' }}>
          Add
        </button>
      </form>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {Array.isArray(contacts) && contacts.length > 0 ? (
          contacts.map(contact => (
            <li
              key={contact._id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 10,
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4,
              }}
            >
              <span>
                <strong>{contact.name}</strong> — {contact.email} — {contact.phone}
              </span>
              <button
                onClick={() => handleDelete(contact._id)}
                style={{
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  padding: '6px 10px',
                  borderRadius: 4,
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No contacts found.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
