
const URL = "http://localhost:3001/image"

function saveImage(imageData) {
  fetch(URL + "/add", {
    method: 'POST',
    body: JSON.stringify(imageData),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }).then(response => response)
    .then(res => console.log(res))
}

function getImages() {
  return fetch(URL+"/getAll")
}

function removeImage(id) {
  fetch(URL + `/remove?id=${id}`, {
    method: 'DELETE'
  }).then(res => console.log(res))
    .then(res => console.log(res))
}

export {
  saveImage,
  getImages,
  removeImage
}