import Button from "./components/Button"
import Input from "./components/Input"
import Content from "./components/Content";
import ImageList from "./components/ImageList";
import {useEffect, useState} from "react";
import {getImages} from "./helpers";

function App() {
  const [url, setUrl] = useState()
  const [isSent, setIsSent] = useState(false)
  const [isRemove, setIsRemove] = useState(false)
  const [images, setImages] = useState([])

  useEffect(() => {
    setIsSent(false)
    setIsRemove(false)
    getImages()
      .then(res => res.json())
      .then(res => setImages(res))
  },[isSent, isRemove])

  return (
    <div>
      <div className="flex m-4" >
        <Input setUrl={setUrl} />
        <Button value={url} setIsSent={setIsSent}/>
      </div>
      <Content>
        <ImageList images={images} setIsRemove={setIsRemove}/>
      </Content>
    </div>
  )
}

export default App
