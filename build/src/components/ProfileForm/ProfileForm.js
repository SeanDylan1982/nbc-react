import React, { useState } from 'react';
import userDetails from '../../config/userDetails';



export default function ProfileForm() {
  const [data, setData] = useState([]);
  const [DatabaseData, setDatabaseData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newData = {};

    for (let [key, value] of formData.entries()) {
      newData[key] = value;
    }
    function AddNewObject() {
      // const handleAddNewObject = () => {
        const newObject = newData;

        const updatedObject = {
          ...userDetails,
          ...newObject
        };

        console.log(updatedObject); // Output: { name: 'Jane Doe', age: 25, email: 'janedoe@example.com' }
      // };

      // return (
      //   <button onClick={handleAddNewObject}>Add New Object</button>
      // );
    }
    AddNewObject()
    // let userDetails = newData
    console.log(data,newData,userDetails);
    setData([...data, newData]);

    setDatabaseData((userDetails) => {
      return {
        ...userDetails,
        ...DatabaseData,
        ...newData,
      };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Club:
          <input type="text" name="club" />
        </label>
        <label>
          District:
          <input type="text" name="district" />
        </label>
        <label>
          Skill:
          <input type="text" name="skill" />
        </label>
        <label>
          Experience:
          <input type="text" name="experience" />
        </label>
        <label>
          Position:
          <input type="text" name="position" />
        </label>
        <label>
          Social:
          <input type="text" name="Social" />
        </label>
        <label>
          Competition:
          <input type="text" name="competition" />
        </label>
        <label>
          League:
          <input type="text" name="league" />
        </label>
        <button type="submit">Submit</button>
      </form>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.name}<br />
            <strong>Email:</strong> {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
