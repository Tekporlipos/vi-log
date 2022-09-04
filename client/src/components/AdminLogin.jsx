import React from 'react';
import "../styles/AdminLogin.scss";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function AdminLogin() {

function handleSubmit(event) {
 
  event.preventDefault()
}

  return (
    <div className="main-wrap">
      <div className="center">
        <h1>Sign in</h1>

        <form>
          <div className="txt_field">
            <input type="email" required placeholder="email" />
            <label>
              <MdEmail className="icon" />
            </label>
          </div>
          <div className="txt_field">
            <input type="password" required placeholder="password" />
            <label>
              <RiLockPasswordFill />
            </label>
          </div>
          <div className="pass">Forgot Password?</div>
          <input onClick={handleSubmit} type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default AdminLogin