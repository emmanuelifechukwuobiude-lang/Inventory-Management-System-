const modal = document.getElementById("modal");

const openBtn = document.getElementById("openModal");

const closeBtn = document.getElementById("closeModal");

if(openBtn){

openBtn.addEventListener("click", function(){
modal.style.display = "block";
});

}

if(closeBtn){

closeBtn.addEventListener("click", function(){
modal.style.display = "none";
});

}

window.addEventListener("click", function(event){

if(event.target == modal){
modal.style.display = "none";
}

});

