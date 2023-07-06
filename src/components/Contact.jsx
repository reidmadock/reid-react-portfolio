import React, { useState } from 'react';

export default function Contact() {
  const [person, setPerson] = useState({ username: '', email: '', message: '' });

  function handleInput(name, value) {
    // console.log('event target:', event.target.value);
    setPerson({ ...person, [name]: value });
  }

  function handleSubmit() {
    setPerson({ username: '', email: '', message: '' });
  }

  return (
    <>
      <h1>We are on my Contact</h1>
      <form>
        <input
          type="text"
          placeholder="Full name"
          value={person.username}
          onChange={(event) => handleInput('username', event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Email"
          value={person.email}
          onChange={(event) => handleInput('email', event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={person.message}
          onChange={(event) => handleInput('message', event.target.value)}
        />
        <br />
        <input type="button" value="Contact" onClick={handleSubmit} />
      </form>
    </>
  );
}
