// Mouse Events:

// //Click :
// document.addEventListener("click", (event) => {
//   console.log("click", event);
// });

// //DoubleClick :
// document.addEventListener("dblclick", (event) => {
//   console.log("Dblclick", event);
// });

// //MouseDown :
// document.addEventListener("mousedown", (event) => {
//   console.log("MouseDown", event);
// });
// document.addEventListener("copy", (event) => {
//   event.preventDefault();
//   alert("CopyRight is prohibited");
// });

// //MouseUp :
// document.addEventListener("mouseup", (event) => {
//   console.log("MouseUp", event);
// });

// //MouseEnter :
// document.addEventListener("mouseenter", (event) => {
//   console.log("MouseEnter");
// });
// const mouseEnter = document.getElementById("input-list");
// mouseEnter.addEventListener("mouseenter", (event) => {
//   console.log("MouseEnter", event);
// });

// //MouseLeave :
// document.addEventListener("mouseleave", (event) => {
//   console.log("MouseLeave");
// });

// //MouseMove :
// document.addEventListener("mousemove", (event) => {
//   console.log("Mousemove");
// });

// //MouseOut :
// document.addEventListener("mouseout", (event) => {
//   console.log("Mouseout");
// });

// //Mouseover :
// document.addEventListener("mouseover", (event) => {
//   console.log("Mouseover");
// });

//Task:( Using If Condition)

// document.addEventListener("mouseup", (event) => {
//   if (event.which == 1) {
//     alert("you clicked left key");
//   } else if (event.which == 2) {
//     alert("you clicked middle key");
//   } else if (event.which == 3) {
//     alert("you clicked right key");
//   }
//   console.log("Click", event);
// });

//(OR)

//Task : (Using Switch Case)

document.addEventListener("mouseup", (event) => {
  switch (event.which) {
    case 1:
      alert("you clicked Left key");
      break;
    case 2:
      alert("you clicked Middle key");
      break;

    default:
      alert("Unknown Key -" + event.which + " is Pressed");

      break;
  }
});
