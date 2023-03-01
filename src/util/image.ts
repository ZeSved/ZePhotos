import { Image } from "../main";

const imageContainer = document.querySelector('#image-container')
const selectedImageView = document.querySelector('#selected-image-view')
const selectedImageView__selectedImage = document.querySelector<HTMLImageElement>('#selected-image-view__selected-image')!
const selectedImageView__fileName = document.querySelector('#selected-image-view__file-name')

export function deleteImage(id: string) {
  // Do delete code
}

export function downloadImage(image: Image) {
  // Do download code
}

export function openImage(image: Image) {

  console.log('testonetwo')

  const id = image.id
  const src = image.src

  imageContainer?.classList.toggle('image-selected')
  selectedImageView?.classList.toggle('display')

  selectedImageView__selectedImage.src = src

  const TextNode = document.createTextNode(src)
  selectedImageView__fileName?.appendChild(TextNode)
}

export function closeImage() {
  // Do close code
}