import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import bootstrapMin from 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';  // 引入 Swiper 樣式

const numPad = new bootstrapMin.Offcanvas('#offcanvasNumPad', {
  backdrop: 'static',
})
const consumptionPad = new bootstrapMin.Offcanvas('#consumptionOffcanvas')
const photoPad = new bootstrapMin.Offcanvas("#offcanvasPhotoPad");
const photoPadBtn = document.getElementById('photoPadBtn')
const photoPadClose = document.getElementById('photoPadClose')

const categoryCheckbox = document.querySelectorAll('[for^="checkbox"]')
const awardModal = new bootstrapMin.Modal('#awardModal')

categoryCheckbox.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    numPad.toggle()
  })
})

document.getElementById('numPadOk').addEventListener('click', ()=> {
  consumptionPad.hide()
  awardModal.show()
})

photoPadBtn.addEventListener('click', () => {
  photoPad.show()
})

photoPadClose.addEventListener('click', () => {
  photoPad.hide()
})