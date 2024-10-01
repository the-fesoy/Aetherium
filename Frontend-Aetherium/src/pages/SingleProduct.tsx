import React, { useState } from "react"
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import ReactStars from "react-rating-stars-component"

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState<boolean>(true)
  return (
    <div>
      <Meta title="Product" />
      <BreadCrumb
        title={
          <div className="d-flex">
            <Link to="/ourStore" className="plzNormal">
              &nbsp; OurStore &nbsp; /
            </Link>
            <Link to="/ourStore/products" className="plzNormal">
              &nbsp; Products &nbsp; /
            </Link>
            <Link to="" className="plzNormal">
              &nbsp; Product &nbsp; /
            </Link>
            <p> &nbsp; Name of product or smth </p>
          </div>
        }
      />
      <section className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl p-3 bg-white">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image"></div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3 description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ratione sint, iste unde distinctio laborum natus qui eligendi
                  inventore impedit laudantium blanditiis harum numquam! Alias
                  repudiandae quaerat esse accusantium dolores deleniti? Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                  dolore quo animi iste aliquid error fuga esse adipisci facilis
                  deleniti, dolorem perspiciatis autem aut sed minima fugiat
                  molestias quia omnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div className="">
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        href="fkj"
                        className="text-dark text-decoration-underline"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form">
                  <h3 className="my-4">Write A Review </h3>

                  <form action="">
                    <div className="review-input">
                      <div className="d-flex flex-column m-0">
                        <label htmlFor="">Name</label>
                        <input
                          required={true}
                          type="text"
                          className="form-control py-2 mb-3"
                          placeholder="Enter Your Name..."
                          aria-label="Enter Your Name..."
                          aria-describedby="basic-addon2"
                        />
                      </div>
                      <div className="">
                        <label htmlFor="">Email</label>
                        <input
                          required={true}
                          type="email"
                          className="form-control py-2"
                          placeholder="El-m3alem-yousef@example.com"
                          aria-label="El-m3alem-yousef@example.com"
                          aria-describedby="basic-addon2"
                        />
                      </div>
                    </div>
                    <div className="review-stars-for my-2">
                      <h4 className="">Rating</h4>
                      <ReactStars
                        count={5}
                        size={24}
                        value={0}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div className="review-details">
                      <div className="">
                        <label htmlFor="">Review Title</label>
                        <input
                          required={true}
                          type="text"
                          className="form-control py-2"
                          placeholder="Give your review a title"
                          aria-label="Give your review a title"
                          aria-describedby="basic-addon2"
                        />
                      </div>
                      <div className="">
                        <label htmlFor="">Body of Review(1500)</label>
                        <textarea
                          required={true}
                          maxLength={1500}
                          minLength={10}
                          style={{ height: "150px" }}
                          className="form-control py-2"
                          placeholder="Write your comments here"
                          aria-label="Write your comments here"
                          aria-describedby="basic-addon2"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end my-3">
                      <button
                        type="submit"
                        className="button py-2 px-3 border-0"
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">a lover</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Inventore ducimus voluptates error magnam atque quos,
                      perspiciatis minima, sapiente asperiores laborum eaque
                      rem! Delectus odit pariatur possimus nobis, vel in
                      commodi!
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">a hater</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={0}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Inventore ducimus voluptates error magnam atque quos,
                      perspiciatis minima, sapiente asperiores laborum eaque
                      rem! Delectus odit pariatur possimus nobis, vel in
                      commodi!
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">unbiased person</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Inventore ducimus voluptates error magnam atque quos,
                      perspiciatis minima, sapiente asperiores laborum eaque
                      rem! Delectus odit pariatur possimus nobis, vel in
                      commodi!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Our Popular Products(gon do it later)
              </h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleProduct
