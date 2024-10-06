import React from "react"
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"
import CustomInput from "../components/CustomInput"
import Container from "../components/Container"

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
      <Container classname="signup-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  name="Password"
                  classname="form-control"
                  type="password"
                  Labelplaceholder="Password..."
                  neccassary={true}
                  AssignedNumb={1}
                  placeholder="Password..."
                />
                <CustomInput
                  name="Confirm Password"
                  classname="form-control"
                  type="password"
                  Labelplaceholder="Confirm Password..."
                  neccassary={true}
                  AssignedNumb={2}
                  placeholder="Confirm Password..."
                />
                <div className="">
                  <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Reset</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Resetpassword
