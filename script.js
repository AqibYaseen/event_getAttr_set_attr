
    
    
    
    let mainImage = document.getElementById("mainImage");
    let images = Array.from(document.getElementsByClassName("images"));


    images.forEach((i)=>{
        i.addEventListener("click", function (){
            src=this.src;
        })
    })

   document.addEventListener("click", function (){
       mainImage.src= src;
   })