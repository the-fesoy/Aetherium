import React from "react"
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"

const Resetpassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb
        title={
          <div className="d-flex">
            <Link to="/login" className="plzNormal">
              &nbsp; Log in &nbsp; /
            </Link>
            <Link to="/login/forgot-password" className="plzNormal">
              &nbsp; Forgot Password &nbsp; /
            </Link>
            <p> &nbsp; Reset Password</p>
          </div>
        }
      />
            <div className="signup-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="password"
                    />
                    <label htmlFor="floatingInput1">password...</label>
                  </div>
                  <div className="form-floating mt-1">
                    <input
                      type="password"
                      className="form-control"
                      name="confpassword"
                      placeholder="password"
                    />
                    <label htmlFor="floatingInput1">Confirm Password...</label>
                  </div>
                  <div className="">
                    <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0">Reset</button>
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

export default Resetpassword
