import { Image } from "../main";
import { closeImage } from "./image";

const uploadImagePopup = document.querySelector('.upload-image-popup__container')
const cancelUploadImageButton = document.querySelector('#cancel')
const uploadImageButton = document.querySelector('#upload')
const imageURLInput = document.querySelector<HTMLInputElement>('.upload-image-popup__input')!
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

  if (imageURLInput.value == '') {
    alert('Please provide a valid URL.')
    return
  }

  if (!imageURLInput.value.startsWith('https') || !imageURLInput.value.startsWith('http')) {
    alert('URL must start with https or http.')
    return
  }

  img.src = imageURLInput.value
  img.id = JSON.stringify(Date.now())
  img.className = 'img'

  imageContainer?.appendChild(img)
  toggleDisplayOnuploadImagePopup()
}

function toggleDisplayOnuploadImagePopup() {
  uploadImagePopup?.classList.toggle('display')
  imageURLInput.value = ''
}

// window.onload = getExif;

// export function getExif() {
//   var img1 = document.getElementById("img1");
//   EXIF.getData(img1, function () {
//     var make = EXIF.getTag(this, "Make");
//     var model = EXIF.getTag(this, "Model");
//     var makeAndModel = document.getElementById("makeAndModel");
//     makeAndModel.innerHTML = `${make} ${model}`;
//   });

//   var img2 = document.getElementById("img2");
//   EXIF.getData(img2, function () {
//     var allMetaData = EXIF.getAllTags(this);
//     var allMetaDataSpan = document.getElementById("allMetaDataSpan");
//     allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
//   });
// }