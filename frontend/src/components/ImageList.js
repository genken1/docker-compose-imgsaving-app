import React from "react"
import PropTypes from "prop-types"
import Image from "./Image";

function ImageList({images, setIsRemove}) {
  return (
    <div className="flex flex-wrap justify-center">
      {
        images.map(({id, url}) =>
          <Image
            extraClass="p-2"
            key={id}
            id={id}
            url={url}
            setIsRemove={setIsRemove}
          />)
      }
    </div>
  )
}

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  setIsRemove: PropTypes.func
}

export default ImageList