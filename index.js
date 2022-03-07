// const
const formtable = document.querySelector("#formtable")
const result_color = document.querySelector("#result_color")

formtable.addEventListener("submit", function (event) {
  event.preventDefault()

  // get input value
  let inputRed = Number(formtable.children[1].children[1].value)
  let inputGreen = Number(formtable.children[2].children[1].value)
  let inputBlue = Number(formtable.children[3].children[1].value)

  // switch input value to hex(string type)
  let red = inputRed.toString(16)
  let green = inputGreen.toString(16)
  let blue = inputBlue.toString(16)

  // make sure hex is 2 digits
  if (red.length < 2) {
    red = "0" + red
  }
  if (green.length < 2) {
    green = "0" + green
  }
  if (blue.length < 2) {
    blue = "0" + blue
  }

  // combine hex to color code
  let hex = "#" + red + green + blue
  hex = hex.toUpperCase()

  // show results
  result_color.style.backgroundColor = hex
  result_color.parentElement.parentElement.children[1].innerHTML = `${hex}`
})




