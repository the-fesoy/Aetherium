import React, { useState } from "react"
import ReactStars from "react-rating-stars-component"
import BreadCrumb from "../components/BreadCrumb"
import Meta from "../components/Meta"
import ProductCard from "../components/ProductCard"
import Container from "../components/Container"

const OurStore = () => {
  const [grid, setGrid] = useState<number>(4)
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container classname="store-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Show By Catagories</h3>
              <div className="">
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div className="">
                <h5 className="sub-title">Availability</h5>
                <div className="">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      className="form-check-input"
                    />
                    <label
                      htmlFor="form-check-input"
                      className="form-check-label"
                    >
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      className="form-check-input"
                    />
                    <label
                      htmlFor="form-check-input"
                      className="form-check-label"
                    >
                      Out of stock (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center">
                  <div className="form-floating  ">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating  ">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Color</h5>
                <div className="">
                  <ul className="colors ps-0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <h5 className="sub-title">Size</h5>
                <div className="">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      className="form-check-input"
                    />
                    <label
                      htmlFor="form-check-input"
                      className="form-check-label"
                    >
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      className="form-check-input"
                    />
                    <label
                      htmlFor="form-check-input"
                      className="form-check-label"
                    >
                      M (3)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      className="form-check-input"
                    />
                    <label
                      htmlFor="form-check-input"
                      className="form-check-label"
                    >
                      L (9)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value=""
                      className="form-check-input"
                    />
                    <label
                      htmlFor="form-check-input"
                      className="form-check-label"
                    >
                      XL (1)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Types</h3>
              <div className="">
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphones
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    TV
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div className="">
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="/images//images/watch.jpg"
                      alt="its a watch bruh"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 3000</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="/images/images/watch.jpg"
                      alt="its a watch bruh"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 3000</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block">Sort By:</p>
                  <select name="" id="" className="form-control form-select" defaultValue={"DEFAULT"}>
                    <option value="DEFAULT " disabled>Select...</option>
                    <option value="manual">Featured</option>
                    <option value="best-selling">
                      Best selling
                    </option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10 mb-0">
                  <p className="totalProducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(6)
                      }}
                      src="/images/images/gr2.svg"
                      alt="idk its a pic ig"
                      className="d-block img-fluid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4)
                      }}
                      src="/images/images/gr3.svg"
                      alt="idk its a pic ig"
                      className="d-block img-fluid"
                    />
                    <img
                      onClick={() => {
                        setGrid(3)
                      }}
                      src="/images/images/gr4.svg"
                      alt="idk its a pic ig"
                      className="d-block img-fluid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12)
                      }}
                      src="/images/images/gr.svg"
                      alt="idk its a pic ig"
                      className="d-block img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pd-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default OurStore
