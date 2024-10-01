import { Link, useLocation } from "react-router-dom"
import React from "react"

interface Props {
  grid: Number
}

const ProductCard = (props: Props) => {
  const { grid } = props
  let location = useLocation()

  return (
    <>
      <div
        className={`${location.pathname === "/ourStore" ? `gr-${grid}` : "col-3"}`} //or try another approach where u just use col
      >
        <Link to="/ourStore/products/product/:id" style={{'width': '100%'}}>
          <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <Link to="">
                <img src="/images/images/wish.svg" alt="" />
              </Link>
            </div>
            <div className="product-image d-flex justify-content-center">
              <img src="/images/images/watch.jpg" alt="watch" />
              <img src="/images/images/myLover.jpg" alt="shrek" />
            </div>
            <div className="product-details">
              <h6 className="brand">Havels</h6>
              <h5 className="product-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h5>
              <p className={`description   ${grid === 12 || grid === 6 ? "d-block" : "d-none"}`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum fuga, eaque accusamus cumque voluptas laborum hic molestias? Ipsa ipsum voluptatem sint suscipit aliquid 
              </p>
              <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <Link to="">
                  <img src="/images/images/prodcompare.svg" alt="compare" />
                </Link>
                <Link to="">
                  <img src="/images/images/add-cart.svg" alt="" />
                </Link>
                <Link to="">
                  <img src="/images/images/view.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
      
    </>
  )
}

export default ProductCard
