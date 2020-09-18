import React from 'react'
import HashLoader from "react-spinners/HashLoader";

export default function Spinner(props) {
  return (
    <div
      style={{ position: 'fixed', top: '50%', right: '50%', zIndex: 10 }}
    >
      <HashLoader
        size={50}
        color={"green"}
        loading={props.loading}
      />
    </div>
  )
}
