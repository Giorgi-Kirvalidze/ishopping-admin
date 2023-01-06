import React, { useState } from 'react';

const UserForm = () => {
  const [user, setUser] = useState({
    phone: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const Url = 'http://localhost:5000/api/users/signup';
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const clonedUser = { ...user };
    clonedUser[name] = value;
    setUser(clonedUser);
    console.log(user);
  };
  async function postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  return (
    <form
      className=" container flex  flex-col justify-start items-center form p-5"
      onSubmit={(e) => {
        e.preventDefault();
        postData(Url, user).then((data) => {});
      }}
    >
      {Object.keys(user).map((fieldName) => {
        return (
          <div key={fieldName}>
            <label htmlFor={fieldName}> {fieldName} : </label>
            <input
              id={fieldName}
              type="text"
              name={fieldName}
              className="border-solid border-2 border-blue-500 rounded"
              value={user[fieldName]}
              onChange={handleInputChange}
            />
          </div>
        );
      })}

      <button className="bg-red-400 border-2 rounded border-solid p-2 border-black" type="submit">
        damateba
      </button>
    </form>
  );
};

export default UserForm;
