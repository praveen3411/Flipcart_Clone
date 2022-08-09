let arr = [
  "https://images.pexels.com/photos/3775554/pexels-photo-3775554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4127459/pexels-photo-4127459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/6567728/pexels-photo-6567728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  "https://images.pexels.com/photos/3760917/pexels-photo-3760917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/5650045/pexels-photo-5650045.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];
let i = 0;
let id;
let tom = document.querySelector("#boom");
id = setInterval(() => {
  if (i == arr.length) {
    i = 0;
  } else {
    tom.innerHTML = null;
    let dog = arr[i];
    let make = document.createElement("img");
    make.setAttribute("src", dog);
    tom.append(make);
    i++;
  }
}, 3000);

let here = document.querySelector("#two");
import { apifetching, sendtoanotherfunction } from "../components/datafetch.js";
let response = apifetching(`http://localhost:5000/api/fashion_page`);
response
  .then((result) => {
    sendtoanotherfunction(result, here);
  })
  .catch((err) => {
    console.log(err);
  });
