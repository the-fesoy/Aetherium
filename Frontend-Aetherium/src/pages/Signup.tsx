import React from "react"
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"
import CustomInput from "../components/CustomInput"
import Container from "../components/Container"

const Signup = () => {
  return (
    <>
      <Meta title="Sign up" />
      <BreadCrumb title="Sign up" />
      <Container classname="signup-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  name="Name"
                  classname="form-control"
                  type="text"
                  Labelplaceholder="Name..."
                  neccassary={true}
                  AssignedNumb={1}
                  placeholder="Name..."
                />
                <CustomInput
                  name="Mobile"
                  classname="form-control"
                  type="text"
                  Labelplaceholder="Mobile..."
                  neccassary={true}
                  AssignedNumb={2}
                  placeholder="Mobile..."
                />
                <CustomInput
                  name="Email"
                  classname="form-control"
                  type="email"
                  Labelplaceholder="Email..."
                  neccassary={true}
                  AssignedNumb={3}
                  placeholder="Email..."
                />
                <CustomInput
                  name="Password"
                  classname="form-control"
                  type="password"
                  Labelplaceholder="Password..."
                  neccassary={true}
                  AssignedNumb={4}
                  placeholder="Password..."
                />
                <div className="">
                  <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Create</button>
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

export default Signup
