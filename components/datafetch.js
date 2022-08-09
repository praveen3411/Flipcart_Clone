let apifetching = async (urls) => {
  try {
    let one = await fetch(urls);
    let two = await one.json();
    console.log(two[0].collest_offer);
    return two[0].collest_offer;
  } catch (error) {
    console.log(error);
  }
};

let sendtoanotherfunction = (data, location) => {
  data.forEach((ele, index) => {
    let create = document.createElement("div");

    let oneonee = document.createElement("img");
    oneonee.setAttribute("src", ele.img);

    let onetwo = document.createElement("h3");
    onetwo.innerHTML = ele.brand;

    let onethree = document.createElement("h4");
    onethree.innerText = ele.offer;

    let onefour = document.createElement("p");
    onefour.innerText = ele.name;

    create.append(oneonee, onetwo, onethree, onefour);

    location.append(create);
  });
};

export { apifetching, sendtoanotherfunction };
