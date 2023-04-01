import './App.css';
import React, { useState } from 'react';
import { useFormik } from 'formik';

function App() {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (values: any) => {
    if (values.user === "Pvodelangel" && values.password === "pvoda080297!"){
      setIsError(false)
      setIsSuccess(true)
      console.log("entre")
    } else {
      setIsSuccess(false)
      setIsError(true)
    }
  };

  const formUser = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    onSubmit,
  });

  const ErrorNotification = () => {
    return (<div className="AlertError" role="alert">
      Wrong password or username, please try again.
    </div>)
  }

  const SuccessNotification = () => {
    return (<div className="AlertSuccess" role="alert">
      Successful Entry, Welcome Back!
    </div>)
  }

  return (
    <div className="Container">
      <div className="InnerContainer">
        <form className="Form" onSubmit={formUser.handleSubmit}>
          <label>Welcome Back</label>
          {isError ? ErrorNotification() : null}
          {isSuccess ? SuccessNotification() : null}
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
