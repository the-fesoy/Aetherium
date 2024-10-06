import React from "react"
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"
import CustomInput from "../components/CustomInput"
import Container from "../components/Container"

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
      <Container classname="forgot-password-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="forgot-password-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  name="Email"
                  classname="form-control"
                  type="email"
                  Labelplaceholder="Email..."
                  neccassary={true}
                  AssignedNumb={1}
                  placeholder="Email..."
                />
                <div className="">
                  <div className=" mt-3 d-flex justify-content-center align-items-center flex-column gap-15">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                    <Link className="button cancel" to="../login">
                      Cancel
                    </Link>
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

export default Forgotpassword
