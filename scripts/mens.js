let ramarao = document.querySelector("#ramarao");

let sevenfunction = async () => {
  try {
    let one = await fetch(`http://localhost:5000/api/mens_page`);
    let two = await one.json();
    newlyfunction(two);
  } catch (error) {
    console.log(error);
  }
};
sevenfunction();

let newlyfunction = (data) => {
  data.forEach((ele) => {
    let creone = document.createElement("div");

    let one = document.createElement("img");
    one.src = ele.img;

    let two = document.createElement("h3");
    two.setAttribute("id", "pora");
    two.innerText = ele.name;

    let three = document.createElement("h3");
    three.innerText = ele.brand;

    let four = document.createElement("h3");
    four.setAttribute("id", "rain");
    four.innerText = `Rs ${ele.price} `;

    let five = document.createElement("h3");
    five.setAttribute("id", "rainone");
    five.innerText = `Rs ${ele.pstrike}`;

    let six = document.createElement("h3");
    six.setAttribute("id", "end");
    six.innerText = `${ele.review} ⭐`;

    let seven = document.createElement("button");
    seven.innerText = "💖 WISHLIST";
    seven.setAttribute("id", "saree");
    seven.addEventListener("click", function () {
      againonewar(ele);
    });

    creone.append(one, two, three, four, five, six, seven);

    ramarao.append(creone);
  });
};

