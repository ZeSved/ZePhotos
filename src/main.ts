import { search, uploadImage, cancelUploadImage, confirmUploadImage } from "./util/manage"
import { openImage, closeImage, deleteImage, downloadImage } from "./util/image"

const images: Image[] = []
let currentOpenImage: string

const uploadImageBtn = document.querySelector('.upload-image')
const img = document.querySelectorAll<HTMLImageElement>('.img')!

uploadImageBtn?.addEventListener('click', confirmUploadImage)

export type Image = {
  id: string
  src: string
}

// const id = img.id
// const src = img.src
// openImage({ id, src })