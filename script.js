document.getElementById("divOne").addEventListener("click",function(e){
document.getElementById("mainImage").src = e.target.getAttribute("src");
 })


/*

using both getAttribute() and setAttribute() 

*/

/*

document.getElementById("divOne").addEventListener("click",function(e){

  document.getElementById("mainImage").setAttribute("src",e.target.getAttribute("src"));
})


*/