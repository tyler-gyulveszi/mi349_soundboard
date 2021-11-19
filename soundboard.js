var button1 = index.html.getElementById('first_button')
var button2 = index.html.GetElementById("second_button")
var button3 = index.html.GetElementById("third_button")
var audio1 = index.html.getElementById("firstaudio")
var audio2 = index.html.getElementById("secondaudio")

/*button1.addEventListener('click', function () {
    audio1.play();
})*/

function ButtonPressOne(audio1) {
  alert("FIRST BUTTON WAS PRESSED")
  audio1.play()
}

function ButtonPressTwo(audio2) {
  alert("SECOND BUTTON WAS PRESSED")
  audio2.play()
}

function ButtonPressThree(audio1) {
  alert("THIRD BUTTON WAS PRESSED")
  audio3.play()
}
