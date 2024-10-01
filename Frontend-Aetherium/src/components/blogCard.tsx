import React from "react"
import { Link } from "react-router-dom"

const BlogCard = () => {
  return (
    <>
      
        <div className="blog-card">
          <div className="card-image ">
            <img
              src="/images/images/blog-1.jpg"
              alt="Blog"
              className="img-fluid w-100"
            />
          </div>
          <div className="blog-content">
            <p className="date">1 December 2024</p>
            <h5 className="title">A beautiful sunday morning renaissance</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              earum adipisci repellat. Odit architecto ea ipsum quaerat iure
              magnam quasi inventore, ad reiciendis odio velit assumenda! Nemo
              sed doloremque tenetur.
            </p>
            <Link to="/blogs/blog/:id" className="button">
              Read More
            </Link>
          </div>
        </div>
    </>
  )
}

export default BlogCard
