import React from "react";

export default function SIgn_up() {
  return (
    <>
      <form action="/signup" method="post">
        <label htmlFor="First name"> </label>
        <input
          type="text"
          id="First name"
          name="First name"
          placeholder="First Name"
          required
        />

        <label htmlFor="Last Name"></label>
        <input
          type="text"
          id="Last name"
          name="Last name"
          placeholder="Last Name"
        />

        <label htmlFor="email"></label>
        <input type="text" id="email" placeholder="example@gmail.com" />

        <label htmlFor="Set Password"></label>
        <input
          type="password"
          id="password"
          name="Set Password"
          placeholder="Password"
        />

        <label htmlFor="confirm password"></label>
        <input
          type="password"
          id="password"
          name="confirm password"
          placeholder="confirm password"
        />
      </form>
    </>
  );
}
