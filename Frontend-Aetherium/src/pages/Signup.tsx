import React from "react"
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <>
      <Meta title="Sign up" />
      <BreadCrumb title="Sign up" />
      <div className="signup-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="Name"
                      placeholder="Name"
                    />
                    <label htmlFor="floatingInput1">Name...</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control"
                      name="mobile"
                      placeholder="mobile number"
                    />
                    <label htmlFor="floatingInput1">Mobile Number...</label>
                  </div>
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
                    <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0">Create</button>
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

export default Signup
