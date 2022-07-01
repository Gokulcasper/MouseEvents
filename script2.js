Mouse Events:

//Click :
document.addEventListener("click", (event) => {
  console.log("click", event);
});

//DoubleClick :
document.addEventListener("dblclick", (event) => {
  console.log("Dblclick", event);
});

//MouseDown :
document.addEventListener("mousedown", (event) => {
  console.log("MouseDown", event);
});
document.addEventListener("copy", (event) => {
  event.preventDefault();
  alert("CopyRight is prohibited");
});

//MouseUp :
document.addEventListener("mouseup", (event) => {
  console.log("MouseUp", event);
});

//MouseEnter :
document.addEventListener("mouseenter", (event) => {
  console.log("MouseEnter");
});
const mouseEnter = document.getElementById("input-list");
mouseEnter.addEventListener("mouseenter", (event) => {
  console.log("MouseEnter", event);
});

//MouseLeave :
document.addEventListener("mouseleave", (event) => {
  console.log("MouseLeave");
});

//MouseMove :
document.addEventListener("mousemove", (event) => {
  console.log("Mousemove");
});

//MouseOut :
document.addEventListener("mouseout", (event) => {
  console.log("Mouseout");
});

//Mouseover :
document.addEventListener("mouseover", (event) => {
  console.log("Mouseover");
});
