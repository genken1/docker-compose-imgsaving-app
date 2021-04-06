import React from "react"
import PropTypes from "prop-types"

function Input({setUrl}) {
  return (
    <input
      type="text"
      className="input py-1.5 px-3 text-sm"
      placeholder="Вставьте url"
      onChange={e => setUrl(e.target.value)}
    />)
}

Input.propType = {
  setUrl: PropTypes.function
}

export default Input