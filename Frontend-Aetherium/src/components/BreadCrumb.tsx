import React from "react"
import { Link } from "react-router-dom"

interface Props {
  title: any
}

const BreadCrumb = (props: Props) => {
  const { title } = props
  return (
    <>
      <div className="breadcrumb mb-0 pt-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <div className="d-flex mb-3 breadcrumb">
               
                  <Link to="/" className="text-dark">
                    Home&nbsp; 
                  </Link>
                  / {title}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BreadCrumb
