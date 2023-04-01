import './App.css';
import React, { useState } from 'react';
import { useFormik } from 'formik';

function App() {
  const [error, setError] = useState("");

  const onSubmit = async (values: any) => {
    console.log("Values: ", values);
    setError("");
  };

  const formUser = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <div className="Container">
      <div className="InnerContainer">
        <form className="Form" onSubmit={formUser.handleSubmit}>
          <label>Welcome Back</label>
          <div className="ErrorText">{error}</div>
          <div className="InputWrapper">
            <label>User</label>
            <input
              className="StyledInput"
              name="user"
              value={formUser.values.user}
              onChange={formUser.handleChange}
              placeholder="User"
              clearOnEscape
              size="large"
              type="text"
            />
            <label>Password</label>
            <input
              className="StyledInput"
              name="password"
              value={formUser.values.password}
              onChange={formUser.handleChange}
              placeholder="Password"
              clearOnEscape
              size="large"
              type="password"
            />
          </div>
          <button className="ButtonLogIn" size="large" kind="primary" isLoading={formUser.isSubmitting}>
              Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
