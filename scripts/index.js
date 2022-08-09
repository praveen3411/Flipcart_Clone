let cutoffer = () => {
  document.querySelector("#hdoffer").innerHTML = null;
};

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
let tom = document.querySelector("#praveen");
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

let homez = () => {
  window.location.href = "index.html";
};

let mensone = () => {
  window.location.href = "mens.html";
};
let puthere = document.querySelector("#puthere");

let newfunction = async () => {
  try {
    let makeone = await fetch(`http://localhost:5000/api/home_page`);
    let maketwo = await makeone.json();
    appendinghere(maketwo);
  } catch (error) {
    console.log(error);
  }
};
newfunction();

let appendinghere = (data) => {
  data.forEach((ele, index) => {
    let create = document.createElement("div");

    let images = document.createElement("img");
    images.setAttribute("src", ele.img);

    create.append(images);

    puthere.append(create);
  });
};

let indexpage = () => {
  window.location.href = "index.html";
};

let fashion = () => {
  window.location.href = "fashion.html";
};
let fashionone = () => {
  window.location.href = "index.html";
};
