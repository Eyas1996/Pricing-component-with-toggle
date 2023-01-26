
let toggle = document.getElementById("toggle");
let monthly = document.querySelectorAll(" .monthly")
let annually = document.querySelectorAll(".annually")

// toggle.onchange = () => {
//   for (let i = 0; i < annually.length; ++i) {
//     if (toggle.checked === true) {
//       annually[i].style.display = "block"
//     } else {
//       annually[i].style.display = "none"
//     }
//   }
//   for (let j = 0; j < monthly.length; ++j) {
//     if (toggle.checked === true) {
//       monthly[j].style.display = "none"
//     } else {
//       monthly[j].style.display = "block"
//     }
//   }
// };
// // ----------------------------------------------------------------------------------------
// // For Loop
// toggle.addEventListener("change", e => {
//   for (let i = 0; i < monthly.length; ++i) { { monthly[i].style.display = toggle.checked ? "none" : "block" }; }
//   for (let i = 0; i < annually.length; ++i) { { annually[i].style.display = toggle.checked ? "block" : "none" }; }
//   for (let i = 0; i < annually.length; ++i) { { annually[i].style.display = toggle.checked ? "block" : "none" }; }
// });
// ----------------------------------------------------------------------------------------
// // For Each Loop
// toggle.addEventListener("change", function () {
//   if (toggle.checked) {
//     annually.forEach((element) => element.style.display = "block");
//     monthly.forEach((element) => element.style.display = "none");
//   } else {
//     annually.forEach((element) => element.style.display = "none");
//     monthly.forEach((element) => element.style.display = "block");
//   }
// });
// ----------------------------------------------------------------------------------------
// // For Each Loop
// toggle.onchange = () => {
//   monthly.forEach((element) => element.style.display = toggle.checked ? "none" : "block")
//   annually.forEach((element) => element.style.display = toggle.checked ? "block" : "none")
// };
// ----------------------------------------------------------------------------------------
// For of Loop
toggle.addEventListener("change", e => {
  for (let itme of monthly) { itme.style.display = e.target.checked ? "none" : "block" }
  for (let itme of annually) { itme.style.display = e.target.checked ? "block" : "none" }
});
// ----------------------------------------------------------------------------------------