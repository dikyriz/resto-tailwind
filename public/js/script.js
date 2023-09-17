const switchToggle = document.getElementById('switch');
const html = document.querySelector('html');
let isDarkMode = false;
const darkIcon = '<i class="fa-solid fa-moon"></i>';
const lightIcon = '<i class="fa-solid fa-sun"></i>';
const localTheme = JSON.parse(localStorage.getItem('isDarkMode'));
const header = document.querySelector('header');
// const showCard = document.getElementById('show');



if(localTheme){
    isDarkMode = localTheme;
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    if(isDarkMode){
        header.classList.remove('shadow-scroll');
        header.classList.add('shadow-scroll-dark');
    } else {
        header.classList.remove('shadow-scroll-dark');
        header.classList.add('shadow-scroll');        
    }
    header.classList.remove('pb-4');
    header.classList.add('pb-3');
    
    // navShadow.style.boxShadow = "-3px -4px 6px black";
    // navShadow.style.backgroundColor = "rgb(253, 192, 80)";
    // for (const nav of navText) {
    //   nav.style.color = "white";
    // }
    // document.getElementsByClassName('fa fa-bars')[0].style.color = "white";
    // console.log("true");
  } else {
    if(isDarkMode){
        header.classList.remove('shadow-scroll-dark');
    } else {
        header.classList.remove('shadow-scroll');        
    }
    header.classList.add('pb-4');
    header.classList.remove('pb-3');
    // navShadow.style.boxShadow= "none";
    // navShadow.style.backgroundColor = "white";
    // for (const nav of navText) {
    //   nav.style.color = "rgb(253, 192, 80)";
    // }
    // document.getElementsByClassName('fa fa-bars')[0].style.color = "rgb(253, 192, 80)";
    // console.log("false");
  }
}


function toggleTheme(){
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode);
    switchTheme();
}

function switchTheme(){
    if(isDarkMode){
        html.classList.add('dark');
        switchToggle.classList.remove('color-gray');
        switchToggle.classList.add('color-yellow');
        setTimeout(() => {
            switchToggle.innerHTML = lightIcon;
        }, 250);
    } else {
        html.classList.remove('dark');
        switchToggle.classList.remove('color-yellow');
        switchToggle.classList.add('color-gray');
        setTimeout(() => {
            switchToggle.innerHTML = darkIcon;
        }, 250);
    }
}

function Menu(e) {
    // const icon = document.getElementById('menu');
    let listMenu = document.getElementById('list_1');
    let listBtn = document.getElementById('list_2');
    if(e.classList.toggle('fa-xmark')){
        listMenu.classList.remove('opacity-0');
        listBtn.classList.remove('opacity-0');
        listMenu.classList.add('opacity-100');
        listBtn.classList.add('opacity-100');
    } else {
        listMenu.classList.remove('opacity-100');
        listBtn.classList.remove('opacity-100');
        listMenu.classList.add('opacity-0');
        listBtn.classList.add('opacity-0');
    }
    
    
}

const changeNameBtn = document.getElementById('btnShow');
const hideContent = document.querySelectorAll('.accordion-content');
const changeContent = document.getElementById('changeContent');

function showCard(){
    // console.log(changeNameBtn.getElementsByTagName('span').innerText = 'test');
    const accordionContent = header.parentElement.querySelectorAll(".accordion-content");
    for (const item of accordionContent) {
        
        // console.log(item);
        let accordionMaxHeight = item.style.maxHeight;
        
        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
            item.style.maxHeight = `${item.scrollHeight + 32}px`;
            // console.log(changeNameBtn);
            changeContent.innerHTML = " ";
            changeContent.innerText = "Hide All Restaurant";
            changeNameBtn.classList.remove('lg:before:top-[22px]');
            changeNameBtn.classList.remove('before:top-[10px]');
            changeNameBtn.classList.remove('before:rotate-45');
            changeNameBtn.classList.add('lg:before:top-[26px]');
            changeNameBtn.classList.add('before:top-[13px]');
            changeNameBtn.classList.add('before:rotate-[225deg]');
        } else {
            item.style.maxHeight = `0px`;
            changeContent.innerHTML = " ";
            changeContent.innerText = "View All Restaurant";
            changeNameBtn.classList.remove('before:rotate-[225deg]');
            changeNameBtn.classList.remove('lg:before:top-[26px]');
            changeNameBtn.classList.remove('before:top-[13px]');
            changeNameBtn.classList.add('lg:before:top-[22px]');
            changeNameBtn.classList.add('before:top-[10px]');
            changeNameBtn.classList.add('before:rotate-45');
        }
    }
}

            // observerHide = new IntersectionObserver((entries) => {
            //     entries.forEach(entry => {
            //         // console.log(entry.intersectionRatio);
                        
                    
            //     })
            // });

            // observerHide.observe(changeNameBtn);

// Animation on Scroll
const scaleRight = document.querySelectorAll('.scale-right');
const scaleLeft = document.querySelectorAll('.scale-left');
const scaleTop = document.querySelectorAll('.scale-top');
const btnE = document.querySelectorAll('.btn-e');
const pictureChef = document.querySelectorAll('.picture-chef');



/*
observerRight = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'scale1 1s forwards ease-out';
        } else {
            entry.target.style.animation = 'none';
        }
    })
});

observerLeft = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `scale2 1s ${entry.target.dataset.delay} forwards ease-out`;
        } else {
            entry.target.style.animation = 'none';
        }
    })
});

observerTop = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'slide-top 1s forwards ease-out';
        } else {
            entry.target.style.animation = 'none';
        }
    })
});

observerBtnE = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'scale-up-ver-center 1s forwards ease-out';
        } else {
            entry.target.style.animation = 'none';
        }
    })
});

observerPictureChef = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'fade-in-bck 1s forwards ease-out';
            
        } else {
            entry.target.style.animation = 'none';
            
        }
    })
});


scaleRight.forEach(entry => {
    observerRight.observe(entry);
});

scaleLeft.forEach(entry => {
    observerLeft.observe(entry);
});

scaleTop.forEach(entry => {
    observerTop.observe(entry);
});

btnE.forEach(entry => {
    observerBtnE.observe(entry);
});

pictureChef.forEach(entry => {
    observerPictureChef.observe(entry);
});
*/
const slideImage = document.querySelector('.slide-image');
const slideTitle = document.querySelector('.slide-title');
const slidePrice = document.querySelector('.slide-price');
const slideLocation = document.querySelector('.slide-location');

const sliders = [
    {
        image: 'https://source.unsplash.com/h108eyMxbxw/1128x564',
        title: 'Padang Restaurant',
        price: 'IDR 49.999 - IDR 560.000',
        location: 'Padang, Indonesia'
    },
    {
        image: 'https://source.unsplash.com/poI7DelFiVA/1128x564',
        title: 'Surabaya Restaurant',
        price: 'IDR 59.999 - IDR 560.000',
        location: 'Surabaya, Indonesia'
    },
    {
        image: 'https://source.unsplash.com/jFCViYFYcus/1128x564',
        title: 'Bandung Restaurant',
        price: 'IDR 69.999 - IDR 560.000',
        location: 'Bandung, Indonesia'
    }
]
// console.log(typeof(sliders));
let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < sliders.length; i++) {
//     //   slides.style.display = "none";  
//         console.log(slideIndex);
//     slideImage.innerHTML = `
//     <img src="${sliders[slideIndex].slideImage}" alt="resto-1" class="lg:rounded-3xl rounded-t-lg">
//   `  ;
//   }
// if(slideIndex > sliders.length-1){
//         slideIndex = 0;
//         // console.log(slideIndex);
//     }
//      slideImage.innerHTML = `
//     <img src="${sliders[slideIndex].image}" alt="resto-1" class="lg:rounded-3xl rounded-t-lg fade">
//   `  ;
    
    
//     slideTitle.innerText = `${sliders[slideIndex].title}`;
//     slidePrice.innerText = `${sliders[slideIndex].price}`;
//     slideLocation.innerText = `${sliders[slideIndex].location}`;
//   slideIndex++;
// //   if (slideIndex > sliders.length) {slideIndex = 0}  
// //   slides.style.display = "block";
  
//   setTimeout(showSlides, 3000); // Change image every 2 seconds
// }

window.addEventListener('load', function (event) {
    // console.log(animationPicture1);
    for (const item of scaleRight) {
        // console.log(item);
        item.style.animation = 'scale1 1s forwards ease-out';
    }
    for (const item of scaleLeft) {
        item.style.animation = `scale2 1s forwards ease-out`;
    }
    for (const item of scaleTop) {
        item.style.animation = 'slide-top 1s forwards ease-out';
    }
    for (const item of btnE) {
        item.style.animation = 'scale-up-ver-center 1s forwards ease-out';
    }
    for (const item of pictureChef) {
        item.style.animation = 'fade-in-bck 1s forwards ease-out';
    }
    // console.log(pictureChef);
    // animationContiner1.classList.add('scale2');
    // createObserver();
}, false);


// function createObserver(){
//     let observer;

//     let options = {
//         root: null,
//         rootMargin: "0px",
//         threshold: 1
//     };

//     observer = new IntersectionObserver(handleIntersect, options);
//     observer.observe(titlePage1);
// }

// function handleIntersect(entries, observer){
//     entries.forEach(entri => {
//         if (entri.intersectionRatio > 0) {
//             entri.target.style.animation = "scale1 1s forwards ease-out";
//         } else {
//             entri.target.style.animation = "none";
//         }
//         // console.log(entries);
//     });
// }


// function show(){
//     // console.log(showCard.classList.contains('hidden'));
//     // if(showCard.classList.contains('hidden')){
//     //     showCard.classList.remove('hidden');
//     // } else {
//     //     showCard.classList.add('hidden');
//     // //     console.log('not found');
//     // }

//     const accordionContent = header.parentElement.querySelectorAll(".accordion-content");
//     for (const item of accordionContent) {
        
//         // console.log(item);
//         let accordionMaxHeight = item.style.maxHeight;
        
//         // Condition handling
//         if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
//             item.style.maxHeight = `${item.scrollHeight + 32}px`;
//             // console.log(changeNameBtn);
//             changeNameBtn.innerHTML = " ";
//             changeNameBtn.innerText = "Hide";
//             changeNameBtn.classList.remove('before:top-[14px]');
//             changeNameBtn.classList.remove('before:rotate-45');
//             changeNameBtn.classList.add('before:top-[18px]');
//             changeNameBtn.classList.add('before:rotate-[225deg]');
//         } else {
//             item.style.maxHeight = `0px`;
//             changeNameBtn.innerHTML = " ";
//             changeNameBtn.innerText = "Show";
//             changeNameBtn.classList.remove('before:rotate-[225deg]');
//             changeNameBtn.classList.remove('before:top-[18px]');
//             changeNameBtn.classList.add('before:rotate-45');
//             changeNameBtn.classList.add('before:top-[14px]');
//         }
//     }
// }



var splide = new Splide( '.splide', {
    type   : 'loop',
  perPage: 2,
  drag: false,
  focus: 'center',
  pagination: false,
  autoplay: true,
  interval: 2000,
  arrows: false,
  speed: 2000,
  
} );

splide.mount();


switchTheme();