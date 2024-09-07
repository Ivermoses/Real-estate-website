const images = document.querySelectorAll('.view-property .details .thumb .small-image img');
const bigImage = document.querySelector('.view-property .details .thumb .big-image img');

let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
  menu.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('active');
}


images.forEach(image => {
  image.onclick = () => {
    const src = image.getAttribute('src');
    bigImage.setAttribute('src', src);
  }
});

document.querySelectorAll('.faq .box-container .box h3 ').forEach(heading =>{
  heading.onclick = () =>{
    heading.parentElement.classList.toggle('active');
  }
});








