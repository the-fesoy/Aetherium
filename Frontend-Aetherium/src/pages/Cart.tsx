import React from "react"
import BreadCrumb from "../components/BreadCrumb"
import Meta from "../components/Meta"
import { BsTrash } from "react-icons/bs"
import { Link } from "react-router-dom"
import Container from "../components/Container"

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <Container classname="cart-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="cart-item">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center ">
                  <div className="w-25">
                    <img
                      src="/images/images/watch.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="w-75">
                    <p className="my-3">
                      Kids headphones bulk 10 pack multi colored for students
                    </p>
                    <p className="my-3">Size: </p>
                    <p className="my-3">Color: </p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ 100</h5>
                </div>
                <div className="cart-col-3 d-flex gap-15">
                  <div className="">
                    <input
                      min={1}
                      max={50}
                      type="number"
                      name=""
                      id=""
                      className="form-control"
                    />
                  </div>
                  <div className="button py-2 px-3">
                    <BsTrash />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center ">
                  <div className="w-25">
                    <img
                      src="/images/images/watch.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="w-75">
                    <p className="my-3">
                      Kids headphones bulk 10 pack multi colored for students
                    </p>
                    <p className="my-3">Size: </p>
                    <p className="my-3">Color: </p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ 100</h5>
                </div>
                <div className="cart-col-3 d-flex gap-15">
                  <div className="">
                    <input
                      min={1}
                      max={50}
                      type="number"
                      name=""
                      id=""
                      className="form-control"
                    />
                  </div>
                  <div className="button py-2 px-3">
                    <BsTrash />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center ">
                  <div className="w-25">
                    <img
                      src="/images/images/watch.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="w-75">
                    <p className="my-3">
                      Kids headphones bulk 10 pack multi colored for students
                    </p>
                    <p className="my-3">Size: </p>
                    <p className="my-3">Color: </p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ 100</h5>
                </div>
                <div className="cart-col-3 d-flex gap-15">
                  <div className="">
                    <input
                      min={1}
                      max={50}
                      type="number"
                      name=""
                      id=""
                      className="form-control"
                    />
                  </div>
                  <div className="button py-2 px-3">
                    <BsTrash />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$ 100</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 d-flex justify-content-between align-items-center">
            <Link to="/ourStore" className="button h-30">
              Continue Shopping
            </Link>
            <div className="d-flex justify-content-end flex-column gap-15 align-items-end">
              <h4>Subtotal: $ 100.00</h4>
              <p>Taxes and shipping are calculated at checkout</p>
              <Link to="checkout" className="button text-center">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </Container>
    
    </>
  )
}

export default Cart
