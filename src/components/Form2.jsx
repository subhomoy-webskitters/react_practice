import React, { useState } from "react";

export default function Form2() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const handelChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    // if (name === "fName") {
    //   setFullName((prevValue) => {
    //     return {
    //       fName: value,
    //       lName: prevValue.lName,
    //       email: prevValue.email,
    //       phone: prevValue.phone,
    //     };
    //   });
    // } else if (name === "lName") {
    //   setFullName((prevValue) => {
    //     return {
    //       fName: prevValue.fName,
    //       lName: value,
    //       email: prevValue.email,
    //       phone: prevValue.phone,
    //     };
    //   });
    // } else if (name === "email") {
    //   setFullName((prevValue) => {
    //     return {
    //       fName: prevValue.fName,
    //       lName: prevValue.lName,
    //       email: value,
    //       phone: prevValue.phone,
    //     };
    //   });
    // } else if (name === "phone") {
    //   setFullName((prevValue) => {
    //     return {
    //       fName: prevValue.fName,
    //       lName: prevValue.lName,
    //       email: prevValue.email,
    //       phone: value,
    //     };
    //   });
    // }
    setFullName((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const valueShow = (e) => {
    e.preventDefault();
    alert("Submited");
  };

  return (
    <div>
      <h1>
        Hello,{fullName.fName} {fullName.lName}
      </h1>
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>
      <form onSubmit={valueShow}>
        <input
          type="text"
          name="fName"
          value={fullName.fName}
          placeholder="Your First Name"
          onChange={handelChange}
        />
        <input
          type="text"
          name="lName"
          placeholder="Your Last Name"
          value={fullName.lName}
          onChange={handelChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={fullName.email}
          onChange={handelChange}
        />
        <input
          type="number"
          name="phone"
          placeholder="Your Phone Number"
          value={fullName.phone}
          onChange={handelChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
