$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }

//   const startAnimation = (entries, observer) => {
//     entries.forEach(entry => {
//       entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
//     });
//   };
  
//   const observer = new IntersectionObserver(startAnimation);
//   const options = { root: null, rootMargin: '0px', threshold: 1 }; 
  
//   const elements = document.querySelectorAll('.card');
//   elements.forEach(el => {
//     observer.observe(el, options);
//   });



// const startAnimation = (entries => {
//     entries.forEach(entry => {
// if(entry.isIntersecting)
// document.querySelectorAll(".card")[0].classList.add("fadeInLeft");
// document.querySelectorAll(".card")[1].classList.add("fadeInTop");
//     })


// })

// observer.observe(document.querySelector("aboutMe__info"));
const sectionOneObserver = new IntersectionObserver(function(entries,sectionOneObserver)
{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){

            header.classList.add("nav-scrolled");
          
        }
        else{
            header.classList.remove("nav-scrolled")
           }
    });
},
sectionOneOptions
);
sectionOneObserver.observe(sectionOne) 