// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let hitpoints = 100

let attackPoints = 100

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function attackHandler(){
    console.log(attackHandler)
    attackPoints--
    console.log("current attack points", attackPoints);
    renderAttacks()

}

function hitPtHandler(){
    hitpoints--
    console.log("current hitPt", hitpoints)
}

function renderAttacks(){
console.log("renderAttacks()")
}

onReady()