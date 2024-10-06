import React, { useState } from "react"
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import ReactStars from "react-rating-stars-component"
import ImageZoom from "../components/ImageZoom"
import { FaCodeCompare } from "react-icons/fa6"
import { BsTruck, BsCopy } from "react-icons/bs"
import { AiTwotoneSkin } from "react-icons/ai"
import { RxRulerSquare } from "react-icons/rx"
import { FaHeartbeat } from "react-icons/fa"
import SocialMediaShare from "../components/SocialMediaShare"
import Container from "../components/Container"

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState<boolean>(true)
  const copToClipboard = () => {
    const url: string = window.location.href
    const id: string = url.split("/").pop()
    const tempInput = document.createElement("input")
    tempInput.value = id
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand("copy")
    document.body.removeChild(tempInput)
    alert("Copied!")
  }
  return (
    <>
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
      <Container classname="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <ImageZoom />
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div className="p-0">
                <ImageZoom />
              </div>
              <div className="p-0">
                <ImageZoom />
              </div>
              <div className="p-0">
                <ImageZoom />
              </div>
              <div className="p-0">
                <ImageZoom />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details ">
              <div className="border-bottom mb-3">
                <h3 className="title">
                  Kids Headphones Bulk 10 Pack Multi Colored For Students
                </h3>
              </div>
              <div className="border-bottom mb-3">
                <p className="price">$100.00</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">( 2 Reviews )</p>
                </div>
                <a href="#review-place">Write A Review</a>
              </div>
              <div className="border-bottom flex-column mb-3">
                <div className="d-flex align-items-center ">
                  <h3 className="heading my-2">Type :&nbsp;</h3>
                  <p className="content">Watch</p>
                </div>
                <div className="d-flex align-items-center ">
                  <h3 className="heading my-2">Brand :&nbsp;</h3>
                  <p className="content">samsung</p>
                </div>
                <div className="d-flex align-items-center ">
                  <h3 className="heading my-2">Catagory :&nbsp;</h3>
                  <p className="content">Watch</p>
                </div>
                <div className="d-flex align-items-center ">
                  <h3 className="heading my-2">Tags :&nbsp;</h3>
                  <p className="content">Watch</p>
                </div>
                <div className="d-flex align-items-center ">
                  <h3 className="heading my-2">Availablility :&nbsp;</h3>
                  <p className="content">in Store</p>
                </div>
                <div className="d-flex flex-column">
                  <div className="align-items-center ">
                    <h3 className="heading my-2">Size :&nbsp;</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge text-dark border border-1 bg-white border-secondary">
                        S
                      </span>
                      <span className="badge text-dark border border-1 bg-white border-secondary">
                        M
                      </span>
                      <span className="badge text-dark border border-1 bg-white border-secondary">
                        L
                      </span>
                      <span className="badge text-dark border border-1 bg-white border-secondary">
                        XL
                      </span>
                    </div>
                  </div>

                  <div className="align-items-center">
                    <h3 className="heading my-2">Color :&nbsp;</h3>

                    <div className="d-flex align-items-center">
                      <div className="">
                        <ul className="colors ps-0">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="align-items-center d-flex gap-30">
                    <h3 className="heading my-2">Quanitity :&nbsp;</h3>

                    <div className="">
                      <input
                        placeholder="1"
                        className="form-control"
                        style={{ width: "70px" }}
                        min={1}
                        max={50}
                        type="number"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-15 mx-3">
                      <button className="button border-0">ADD TO CART</button>
                      <Link className="button signup" to="/signup">
                        Buy It Now
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15 py-2">
                    <div className="d-flex align-items-center">
                      <Link to="/compare" className="gap-5">
                        <FaCodeCompare />
                        <span className="px-1">Add to Compare</span>
                      </Link>
                    </div>
                    <div className="d-flex align-items-center py-2">
                      <Link to="/wishlist" className="gap-5">
                        <img src="/images/images/wish.svg" alt="" />

                        <span className="px-1">Add to Wishlist</span>
                      </Link>
                    </div>
                    <div
                      className="d-flex align-items-center py-2"
                      onClick={() => copToClipboard()}
                    >
                      <Link to="#" className="gap-5">
                        <BsCopy />
                        <span className="px-1">Copy Product id</span>
                      </Link>
                    </div>
                  </div>
                  <div className="accordion-container">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button gap-5"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <BsTruck />
                            Shipping & Returns
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Free Shipping and Returns available on all orders!
                            <br />
                            We ship all Middle east domestic orders within{" "}
                            <strong>3-4 business days</strong>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed gap-5 align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <AiTwotoneSkin className="fixMeSvg" />
                            Material
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Running Shoes cushions your stride with soft foam to
                            keep you running in comfort. Lightweight knit
                            material
                            <br />
                            wraps your foot in beathable support. while a
                            minimalist desgin fits in just about anyhere your
                            day takes
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed gap-5 "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <RxRulerSquare />
                            Dimension
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Sit voluptatem <br />
                            </strong>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Harum asperiores nam, doloribus et molestiae
                            atque repudiandae sed porro nesciunt ipsa aut quis
                            laudantium error eveniet blanditiis consectetur
                            officia culpa ducimus.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed gap-5 "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <FaHeartbeat />
                            Health
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Sit voluptatem <br />
                            </strong>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Harum asperiores nam, doloribus et molestiae
                            atque repudiandae sed porro nesciunt ipsa aut quis
                            laudantium error eveniet blanditiis consectetur
                            officia culpa ducimus.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <SocialMediaShare />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container classname="description-wrapper py-5 home-wrapper-2">
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
      </Container>
      <Container classname="reviews-wrapper py-5 home-wrapper-2">
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
                    <button type="submit" className="button py-2 px-3 border-0">
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
                    perspiciatis minima, sapiente asperiores laborum eaque rem!
                    Delectus odit pariatur possimus nobis, vel in commodi!
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
                    perspiciatis minima, sapiente asperiores laborum eaque rem!
                    Delectus odit pariatur possimus nobis, vel in commodi!
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
                    perspiciatis minima, sapiente asperiores laborum eaque rem!
                    Delectus odit pariatur possimus nobis, vel in commodi!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container classname="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Recommended For You
            </h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  )
}

export default SingleProduct
