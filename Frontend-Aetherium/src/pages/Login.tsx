import React from "react"
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"
import CustomInput from "../components/CustomInput"
import Container from "../components/Container"

const Login = () => {
  return (
    <>
      <Meta title="Log in" />
      <BreadCrumb title="Log in" />
      <Container classname="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Log In</h3>
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
                <CustomInput
                  name="Password"
                  classname="form-control"
                  type="password"
                  Labelplaceholder="Password..."
                  neccassary={true}
                  AssignedNumb={2}
                  placeholder="Password..."
                />
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
      </Container>
     </>
  )
}

export default Login
