let munis=document.querySelector('.details .container .productdetails .detail form .btns .counter span.minus');
let container=document.querySelector('.details .container .productdetails .detail form .btns .counter span.container');
let plus=document.querySelector('.details .container .productdetails .detail form .btns .counter span.plus');
function counter(){
    let count=0;
     plus.addEventListener('click',()=>{
         count++;
         container.innerHTML=count;
     })
     munis.addEventListener('click',()=>{
         count--;
         if(count<=0){
            count=0;
         }
         container.innerHTML=count
    })

     
}
counter();

let content=document.querySelector('.details .container .productdetails .moredetails .content');
let link1=document.querySelector('.details .container .productdetails .moredetails .heading a:first-child');
let link2=document.querySelector('.details .container .productdetails .moredetails .heading a:nth-child(2)');
let link3=document.querySelector('.details .container .productdetails .moredetails .heading a:last-child');

function description(desc){
    link1.addEventListener('click',()=>{
        content.innerHTML=`
        <p class="info">Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Animi quam asperiores culpa?
         Quod, voluptate ab deleniti dolorum impedit
         consectetur sint eum quam voluptatem quo atque 
         rerum amet nihil odit autem.
      </p>
        
        `;
    })

    link2.addEventListener('click',()=>{
        content.innerHTML=`
        <p class="info">Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Animi quam asperiores culpa?
         Quod, voluptate ab deleniti dolorum impedit
         consectetur sint eum quam voluptatem quo atque 
         rerum amet nihil odit autem.

         <br>
         <br>
         <br>
         Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Animi quam asperiores culpa?
         Quod, voluptate ab deleniti dolorum impedit
         consectetur sint eum quam voluptatem quo atque 
         rerum amet nihil odit
        
        `;
        
    })
    link3.addEventListener('click',()=>{
        content.innerHTML=`
        <div class="review">
          <div class="persons">
           <h3>reviews for   <%= ele.title %></h3>
            <div class="person">
             <img src="img/user.jpg" alt="uers1">
             <div class="text">
               <h3>john : <span>1/11/2022</span> </h3>
               <div class="star">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
               </div>
               <p>Lorem ipsum dolor sit amet, consectetur 
                 adipisicing elit. Quod, sit
               </p>
             </div>
            </div>
        </div>
        <div class="yourreview">
             <p>leave your review</p>
             <span>Your email address will not be published. Required fields are marked *</span>
             <div class="rate">
               <h3>your rateing *</h3>
               <i class="far fa-star"></i>
               <i class="far fa-star"></i>
               <i class="far fa-star"></i>
               <i class="far fa-star"></i>
             </div>
             <div class="review">
       
               <form action="#">
                   <div class="input">
                     <label for="review">your review *</label>
                     <textarea id="review"></textarea>
                   </div>
                   <div class="input">
                     <label for="name">your name *</label>
                     <input type="text" id="name">
                   </div>
                   <div class="input">
                     <label for="email">your eamil *</label>
                     <input type="email" id="email">
                   </div>
                   <input type="submit" value="leave your review" class="btn">
               </form>
             </div>
        </div>
      </div>
        
        
        
        `
    })
}
description();