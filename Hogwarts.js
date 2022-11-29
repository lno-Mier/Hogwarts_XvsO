let button = document.querySelectorAll(".buttons")
for (let buttonc of button) {
  buttonc.onclick = function(){
    this.classList.add("buttonsX")
    console.log(this)
  }
}
