import { Image } from "../main";
import { closeImage } from "./image";

const uploadImagePopup = document.querySelector('.upload-image-popup__container')
const cancelUploadImageButton = document.querySelector('#cancel')
const uploadImageButton = document.querySelector('#upload')
const imageURLInput = document.querySelector<HTMLInputElement>('.upload-image-popup__input')!
const imageContainer = document.querySelector('.image-container')
const fileImageUploadInput = document.querySelector<HTMLInputElement>('#file-image-upload__input')!

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

  if (fileImageUploadInput.value !== '' && imageURLInput.value !== '') {
    alert('You may only upload one file at a time.')
    return
  }

  imageURLInput.value == '' ? img.src = fileImageUploadInput.value : img.src = imageURLInput.value

  img.id = JSON.stringify(Date.now())

  imageContainer?.appendChild(img)
  toggleDisplayOnuploadImagePopup()
}

function toggleDisplayOnuploadImagePopup() {
  uploadImagePopup?.classList.toggle('display')
  imageURLInput.value = ''
  fileImageUploadInput.value = ''
}