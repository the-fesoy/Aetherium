import React from "react"
import Meta from "../components/Meta"
import { Link, Navigate, useNavigate } from "react-router-dom"
import Container from "../components/Container"

const Checkout = () => {
  const navigate = useNavigate()
  return (
    <>
      <Meta title="Checkout" />
      <Container classname="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data border-right">
              <div className="title-stuff border-bottom">
                <h3 className="website-name">Aetherium</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-start">
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/cart">Cart </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <strong>
                        <a href="#">Information</a>
                      </strong>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/cart/checkout/shipping">Shipping </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/cart/checkout/payment">Payment</a>
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="contact-stuff border-bottom py-3">
                <h4 className="title">Contact Info</h4>
                <p className="user-details">
                  Navdeep Dahiya (monudi0232@gmail.com)
                </p>
              </div>
              <h4 className="my-3">Shipping Address</h4>
              <form
                onSubmit={() => navigate("shipping")}
                action=""
                className="d-flex flex-wrap gap-15 justify-content-between"
              >
                <div className="w-100">
                  <select name="" id="" className="form-control form-select">
                    <option
                      value=" Select Country"
                      defaultChecked={true}
                      selected
                      disabled
                    >
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name...(optional)"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name..."
                    required
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address..."
                    required
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, suite, etc... (optional)"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City..."
                    required
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" id="" className="form-control form-select">
                    <option value="" defaultChecked={true} selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ZIP code..."
                    required={true}
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between">
                    <Link to="/cart" className="go-back">
                      &larr; Return to Cart
                    </Link>

                    <button className="button" type="submit">
                      Continue to Shipping
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 align-items-center mb-2">
                <div className="d-flex w-75 gap-10">
                  <div className="w-25 position-relative ">
                    <span className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                      1
                    </span>

                    <img
                      src="/images/images/watch.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="product-checkout-details">
                    <h5 className="title">
                      Lorem ipsum dolor sit amet consectetur Maxime neque
                      nesciunt{" "}
                    </h5>
                    <p>S / #8GU38K</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5>$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-2 extra-amount">
              <div className="d-flex justify-content-between align-items-center my-2 ">
                <p>Subtotal</p>
                <p>$ 100000</p>
              </div>

              <div className="d-flex justify-content-between align-items-center my-2 ">
                <p className="mb-0">Shipping</p>
                <p className="mb-0">$ 100000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center my-2 final-amount ">
              <h4>Total</h4>
              <h5>$ 100000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Checkout
