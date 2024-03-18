console.log('Hello World!');



// display nav
let dd=document.querySelector("#d");
let heah=document.querySelector("nav")
dd.onclick=function(){
 heah.style.display="flex" ;

}


const bb=document.querySelector("#b");
const nav=document.querySelector("nav");
bb.onclick=function(){
   nav.style.display="none" ;

}

let box=document.querySelectorAll('.box img ')

let h1=document.querySelector('.h1 ')
let h2=document.querySelector('.h2 ')
let h3=document.querySelector('.h3 ')
let h4=document.querySelector('.h4 ')
let h5=document.querySelector('.h5 ')
let h6=document.querySelector('.h6 ')
let h7=document.querySelector('.h7 ')
let h8=document.querySelector('.h8 ')

let img1=document.getElementById('img1')
let img2=document.getElementById('img2')
let img3=document.getElementById('img3')
let img4=document.getElementById('img4')
let img5=document.getElementById('img5')
let img6=document.getElementById('img6')
let img7=document.getElementById('img7')
let img8=document.getElementById('img8')

img1.onclick=function () {

   h1.style.display='block'
h1.style.transform="scalex(0.5)"
   h1.src='index.html'
     h2.style.display='none'
     h3.style.display='none'
     h4.style.display='none'
     h5.style.display='none'
     h6.style.display='none'
     h7.style.display='none'
     h8.style.display='none'

}

img2.onclick=function () {

   h2.style.display='block'
 h2.innerHTML='D I S C O V E R'
h2.style.transform="scalex(0.5)"
   
       h1.style.display='none'
       h3.style.display='none'
     h4.style.display='none'
     h5.style.display='none'
     h6.style.display='none'
     h7.style.display='none'
     h8.style.display='none'

}

// window.onclick=function () {
//   h2.style.display='none'
//   h1.style.display='none'
//   h3.style.display='none'
//   h4.style.display='none'
//   h5.style.display='none'
//   h6.style.display='none'
//   h7.style.display='none'
//   h8.style.display='none'

// }
img3.onclick=function () {

   h3.style.display='block'
 h3.innerHTML='D I S C O V E R'
h3.style.transform="scalex(0.5)"
   
       h1.style.display='none'
       h2.style.display='none'
     h4.style.display='none'
     h5.style.display='none'
     h6.style.display='none'
     h7.style.display='none'
     h8.style.display='none'

  
}
img4.onclick=function () {

   h4.style.display='block'
 h4.innerHTML='D I S C O V E R'
h4.style.transform="scalex(0.5)"
   
       h1.style.display='none'
       h2.style.display='none'
     h3.style.display='none'
     h5.style.display='none'
     h6.style.display='none'
     h7.style.display='none'
     h8.style.display='none'

  
}
img5.onclick=function () {

   h5.style.display='block'
 h5.innerHTML='D I S C O V E R'
h5.style.transform="scalex(0.5)"
   
       h1.style.display='none'
       h2.style.display='none'
     h4.style.display='none'
     h3.style.display='none'
     h6.style.display='none'
     h7.style.display='none'
     h8.style.display='none'

  
}
img6.onclick=function () {

   h6.style.display='block'
 h6.innerHTML='D I S C O V E R'
h6.style.transform="scalex(0.5)"
   
  
       h1.style.display='none'
       h2.style.display='none'
     h4.style.display='none'
     h5.style.display='none'
     h3.style.display='none'
     h7.style.display='none'
     h8.style.display='none'

}
img7.onclick=function () {

   h7.style.display='block'
 h7.innerHTML='D I S C O V E R'
h7.style.transform="scalex(0.5)"
   
  
       h1.style.display='none'
       h2.style.display='none'
     h4.style.display='none'
     h5.style.display='none'
     h6.style.display='none'
     h3.style.display='none'
     h8.style.display='none'

}

img8.onclick=function () {

   h8.style.display='block'
 h8.innerHTML='D I S C O V E R'
h8.style.transform="scalex(0.5)"
  
       h1.style.display='none'
       h2.style.display='none'
     h4.style.display='none'
     h5.style.display='none'
     h6.style.display='none'
     h7.style.display='none'
     h3.style.display='none'

}
///////

let web=document.getElementById('web')
let photo=document.getElementById('photo')
let all=document.getElementById('all')


web.onclick=function () {
    web.style.background='#fdbf60'
    photo.style.background=''
    all.style.background='#2C1654'
if (web.id==='web') {
img4.style.display='block'
img6.style.display='none'
img7.style.display='none'
img8.style.display='none'
img1.style.display = 'block'
img2.style.display = 'block'
img3.style.display = 'block'
img5.style.display='block'

}

}


photo.onclick=function () {
    photo.style.background='#fdbf60'
    web.style.background=''
    all.style.background='#2C1654'
    if (photo.id==='photo') {
img2.style.display='none'
img1.style.display='none'
img3.style.display='none'
img4.style.display='none'
img6.style.display='block'
img7.style.display='block'
img8.style.display='block'


    }
    }

all.onclick=function () {
    photo.style.background=''
    web.style.background=''
    all.style.background='#fdbf60'
img1.style.display='block'
img2.style.display='block'
img3.style.display='block'
img4.style.display='block'
img6.style.display='block'
img7.style.display='block'
img8.style.display='block'

}

let input=document.querySelector('input')
let d=document.querySelector('#d')
let be=document.querySelector('#bb')
let about=document.querySelector('.about')
let ab=document.querySelector('#ab')
let se=document.querySelector('#se')
let co=document.querySelector('#co')
let pr=document.querySelector('#pr')
let sk=document.querySelector('#sk')

be.onclick=function () {
d.style.display='none'
input.style.display='block'
input.focus()
be.style.borderLeft='2px solid black'
console.log('rr')
  
}
input.onkeyup=function () {
  if (input.value==='abo') {
    
    ab.click()
    input.value=''
    input.style.background='#DDD'
    input.style.border='2px solid #2C1654'
  
    }
    
  if (input.value==='ser'){
    se.click()
    input.value=''
    input.style.background='#DDD'
    input.style.border='2px solid #2C1654'
  
    
  }
  if (input.value==='con'){
    co.click()
    input.value=''
    input.style.background='#DDD'
    input.style.border='2px solid #2C1654'
  
    
  }
  if (input.value==='pro'){
    pr.click()
    input.value=''
    input.style.background='#DDD'
    input.style.border='2px solid #2C1654'
  
    
  }
  
  if (input.value==='ski'){
    sk.click()
    input.value=''
    input.style.background='#DDD'
    input.style.border='2px solid #2C1654'
  
    
  }
  
}

// // scrollTo button
// window.onscroll=function(){
//   if (window.scrollY>600) {
//     console.log('ttt')
//   } else {
//     console.log('t')
//     }
//   }
//   console.log(window.scrollY)

// onscroll skills
 let btn=document.querySelector(".up");

let span1=document.querySelector("div >span")
let span2 = document.getElementById("sp")
let span3 = document.querySelector("div >#spa")


window.onscroll = function() {
  if (window.scrollY >= 2100) {
    span1.style.padding="10px 130px";
    span2.style.padding = "10px 120px";
    span3.style.padding = "10px 75px"
    // btn.style.display="block"

  } else {
    span1.style.padding="10px 10px"
    span2.style.padding="10px 10px"
    span3.style.padding="10px 10px"
    // btn.style.display="none"

  }
}


btn.onclick=function(){
  window.scrollTo({
    left:0, 
    top:0, 
    behavior:"smooth"
  })
}

// let nv=document.getElementById("d")
// nv.onclick=() => {
  
// }