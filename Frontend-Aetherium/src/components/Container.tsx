import React from "react"

interface Props {
  classname: string
  children: any
}

const Container = (props: Props) => {
  return (
    <section className={props.classname}>
      <div className="container-xxl">{props.children}</div>
    </section>
  )
}

export default Container
