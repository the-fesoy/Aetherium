import React from "react"
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
      <Meta title="Log in" />
      <BreadCrumb title="Log in" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Log In</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="email"
                    />
                    <label htmlFor="floatingInput1">email...</label>
                  </div>
                  <div className="form-floating mt-1">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="email"
                    />
                    <label htmlFor="floatingInput1">password...</label>
                  </div>
                  <div className="">
                    <Link to="forgot-password">Forgot Password?</Link>

                    <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0">Log in</button>
                      <Link className="button signup" to="/signup">
                        Sign up
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
