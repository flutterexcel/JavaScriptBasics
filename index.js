
let count1 = document.getElementById("count-el")
let saveEl = document.getElementById("saved-el")
let count2 = parseInt(count1.innerText)
let count = count2
let welcome = document.getElementById("welcome-el")
let namez = "Medhavi "
let welcomeq = "Hi, Welcome :"
welcome.innerText = welcomeq+ namez + "👍"
function increment(params) {
  count += 1
  count1.innerText = count
  // console.log(count)
}
function save(){
  let savedele = count + " - "
  saveEl.textContent += savedele
  count = 0
  count1.innerText = count
  // console.log("Save Button clicked")
}
  
