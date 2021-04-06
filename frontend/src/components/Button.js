import React, {useEffect, useState} from "react";
import classNames from "classnames"
import PropTypes from "prop-types"
import {saveImage} from "../helpers";

function Button({value, setIsSent}) {
  const [url, setUrl] = useState()

  const classes = classNames("inline-flex items-center justify-center px-5 py-3 border border-transparent " +
    "font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700")

  useEffect(() => {
    const imageData = {url}

    if (url) {
      saveImage(imageData)
    }
  }, [url])

  return (
    <div className="inline-flex rounded-md shadow ml-4">
      <button
         className={classes}
         onClick={() => {
           if (value && value.match("(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*\\.(?:jpg|gif|png))(?:\\?([^#]*))?(?:#(.*))?")) {
             setUrl(value)
             setIsSent(true)
           }}
         }
      >
        Добавить
      </button>
    </div>)
}

Button.propTypes = {
  value: PropTypes.string
}
export default Button