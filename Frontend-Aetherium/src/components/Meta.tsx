import { Helmet } from "react-helmet"
import React from "react"

interface Props {
  title: String
}

const Meta = (props: Props) => {
  const { title } = props
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} | Aetherium</title>
      </Helmet>
    </>
  )
}

export default Meta
