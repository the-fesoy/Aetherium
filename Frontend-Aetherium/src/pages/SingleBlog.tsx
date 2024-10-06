import React from "react"
import BreadCrumb from "../components/BreadCrumb"
import Meta from "../components/Meta"
import { Link } from "react-router-dom"
import Container from "../components/Container"

const SingleBlog = () => {
  return (
    <>
      <Meta title="Blog" />
      <BreadCrumb
        title={
          <div className="d-flex">
            <Link to="/blogs" className="plzNormal">
              &nbsp; Blogs &nbsp; /
            </Link>
            <Link to="" className="plzNormal">
              &nbsp; Blog &nbsp; /
            </Link>
            <p> &nbsp; :id</p>
          </div>
        }
      />
      <Container classname="blog-wrapper home-wrapper-2 py-5">
        <div className="row ">
          <div className="col-12">
            <div className="single-blog-card ">
              <div className=""></div>
              <Link to="/blogs">&larr; Go Back to Blogs</Link>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img
                src="/images/images/blog-1.jpg"
                className="img-fluid w-100"
                alt="some guy looking a lil bit too happy;-;"
              />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugat
                fuga provident adipisci eveniet sint aliquam in mollitia maxime
                explicabo nam, earum doloremque quis quibusdam architecto
                facilis, totam esse voluptate nostrum. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Ut animi enim similique
                laudantium cupiditate autem voluptatum repellendus molestias
                fugiat distinctio, odio veniam accusantium molestiae? Ad
                repudiandae nesciunt dolorem pariatur tenetur. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Tenetur cum aliquid
                vitae sunt unde quos rem, doloribus autem nobis fugit id nulla
                laborum fugiat ab nesciunt rerum obcaecati incidunt quo.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SingleBlog
