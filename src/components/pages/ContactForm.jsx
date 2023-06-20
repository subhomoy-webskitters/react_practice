import React from "react";
import "./page.css";

export default function ContactForm() {
  return (
    <form className="contact-form">
      <ul>
        <li>
          <label>Name</label>
          <input type="text" name="fullName" />
        </li>
        <li>
          <label>Email</label>
          <input type="email" name="email" />
        </li>
        <li>
          <label>Phone Number</label>
          <input type="number" name="phonNumber" />
        </li>
        <li>
          <label>Gender</label>
          <div>
            <label htmlFor="male">
              <input type="radio" id="male" name="gender" /> Male
            </label>
          </div>
          <div>
            <label htmlFor="female">
              <input type="radio" id="female" name="gender" /> Female
            </label>
          </div>
        </li>
      </ul>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}
