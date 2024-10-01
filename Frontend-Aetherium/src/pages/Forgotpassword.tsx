import React from "react"
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"

const Forgotpassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb
        title={
          <div className="d-flex">
            <Link to="/login" className="plzNormal">
              
              &nbsp; Log in &nbsp; /
            </Link>
            <p> &nbsp; Forgot password</p>
          </div>
        }
      />
      <div className="forgot-password-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="forgot-password-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center">
                  We will send you an email to reset your password
                </p>
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
                  <div className="">
                    <div className=" mt-3 d-flex justify-content-center align-items-center flex-column gap-15">
                      <button className="button border-0" type="submit">Submit</button>
                      <Link className="button cancel" to="../login">
                        Cancel
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

export default Forgotpassword
