let button = document.querySelectorAll(".buttons")
//функция рандомного числа(активно используется)
function Bot(max) {
  return Math.floor(Math.random()*max)
  if (this.classList.contains("buttonsO")) {
  return
  }
  //проверка наличие buttonsO
  if (this.classList.contains("buttonsX")) {
  return
  }
}
for (let buttonc of button) {
  buttonc.onclick = function(){
    //проверка наличие buttonsX
    if (this.classList.contains("buttonsO")) {
      return
    }
    //проверка наличие buttonsO
    if (this.classList.contains("buttonsX")) {
      return
    }
    this.classList.add("buttonsX")
    //сует туда непосредственно
    button[Bot(8)].classList.add('buttonsO')
  }
}
