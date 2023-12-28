import { useState } from 'react';

function Person() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
    <h2>Full Name: {fullName}</h2>
    <div>
      <label>
        First Name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
    </div>
    <div>
      <label>
        Last Name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </div>
    </>
  );
}

export default Person