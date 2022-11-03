// import { navigate } from "@gatsbyjs/reach-router";
import React, { useEffect, useState } from "react";
import { useAuthProvider } from "../components/AuthProvider";
import Layout from "../components/Layout";

export default function Login() {
  const [values, setValue] = useState({});
  const { setCurrentUser, currentUser } = useAuthProvider();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("values", values);
    if (!values.username || !values.password) {
      alert("Please enter username and password");
      return;
    }

    if (values.username !== "admin" && values.password !== "admin") {
      alert("username is admin and password is admin");
      return;
    }

    setCurrentUser({ username: "admin", password: "admin", role: "Admin" });
    localStorage.setItem(
      "user",
      JSON.stringify({ username: "admin", password: "admin" })
    );

    alert("Login success. please check localStorage to confirm value");
  };

  const handleChangeValue = (name) => {
    return (e) => {
      setValue({
        ...values,
        [name]: e.target.value,
      });
    };
  };

  useEffect(() => {
    if (currentUser) {
      // i dont know why navigate does not working on dev, because it alwasy move to 404 page
      // navigate("/admin/dashboard/");
      window.location.assign("/admin/dashboard");
    }
  }, [currentUser]);

  return (
    <Layout>
      <h1 className="fw-bold text-center">Login page</h1>
      <form style={{ maxWidth: 500, margin: "auto" }} onSubmit={onSubmit}>
        <div className="mb-2 form-item">
          <label htmlFor="username" className="form-label">
            <strong>Username</strong>
          </label>
          <input
            onChange={handleChangeValue("username")}
            id="username"
            placeholder="Please enter username"
            className="form-control me-2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            <strong>Password</strong>
          </label>
          <input
            onChange={handleChangeValue("password")}
            placeholder="Please enter password"
            className="form-control me-2"
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
}
