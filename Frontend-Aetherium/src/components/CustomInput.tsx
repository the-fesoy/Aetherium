import React from "react"

interface Props {
  type: string
  name: string
  classname: string
  Labelplaceholder: string,
  neccassary: boolean,
  AssignedNumb: number,
  placeholder: string
}

const CustomInput = (props: Props) => {
  const { type, name, classname, Labelplaceholder, neccassary, AssignedNumb, placeholder} = props
  return (
    <>
      <div className="form-floating">
        <input
          name={name}
          className={classname}
          type={type}
          required={neccassary}
          placeholder={placeholder}
        />
        <label htmlFor={`floatingInput${AssignedNumb}`}>{Labelplaceholder}</label>
      </div>
    </>
  )
}

export default CustomInput
