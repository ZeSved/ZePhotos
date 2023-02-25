import { Image } from "../main";
import { closeImage } from "./image";

const uploadImagePopup = document.querySelector('.upload-image-popup')
const cancelUploadImageButton = document.querySelector('.cancel-upload-image-button')
const uploadImageButton = document.querySelector('.upload-image-button')
const imageURLInput = document.querySelector<HTMLInputElement>('.image-URL-input')!
const imageContainer = document.querySelector('.image-container')

cancelUploadImageButton?.addEventListener('click', cancelUploadImage)
uploadImageButton?.addEventListener('click', uploadImage)

export function search(query: string, inputImages: Image[]) {
  closeImage()

  // Search logic
}

export function cancelUploadImage() {
  toggleDisplayOnuploadImagePopup()
}

export function confirmUploadImage() {
  toggleDisplayOnuploadImagePopup()
}

export function uploadImage() {
  const img = document.createElement('img')
  img.src = imageURLInput.value
  img.id = JSON.stringify(Date.now())

  imageContainer?.appendChild(img)
  toggleDisplayOnuploadImagePopup()
}

function toggleDisplayOnuploadImagePopup() {
  uploadImagePopup?.classList.toggle('display')
  imageURLInput.value = ''
}