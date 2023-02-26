import { search, uploadImage, cancelUploadImage, confirmUploadImage } from "./util/manage"

const images: Image[] = []
let currentOpenImage: string

const uploadImageBtn = document.querySelector('.upload-image')

uploadImageBtn?.addEventListener('click', confirmUploadImage)

export type Image = {
  id: string
  src: string
}
