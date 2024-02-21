import React from "react";

export default function Login_Y() {
  return (
    <>
      <form action="/login" method="post" >
        <div className="mb-3">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="password"
            placeholder="UserName"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          login
        </button>
      </form>
    </>
  );
}
