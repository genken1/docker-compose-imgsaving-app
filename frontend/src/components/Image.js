import React, {useState} from "react"
import PropTypes from "prop-types"
import classNames from "classnames";
import CloseIcon from "./CloseIcon";
import {removeImage} from "../helpers";

function Image({id, url, extraClass, setIsRemove}) {
  const [isOver, setIsOver] = useState(false)

  const rootClasses = classNames("relative rounded-lg overflow-hidden", extraClass)
  const closeIconClasses = classNames(
    "absolute w-6 top-2 right-2 font-medium rounded-md text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700",
    {"hidden": !isOver})

  return (
    <div
      className={rootClasses}
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <CloseIcon
        className={closeIconClasses}
        onClick={() => {
          removeImage(id)
          setIsRemove(true)
        }}
      />
      <img src={url} alt="users photos" className="h-96 w-auto"/>
    </div>
  )
}

Image.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string
}
export default Image