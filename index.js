var counter = 0;
function generatid() {
  return counter++;
}
var map = Array.from(document.querySelectorAll("svg path"));
map.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    window.open(`https://fr.wikipedia.org/wiki/${ele.getAttribute("name")}`);
  });
});
function mackimg(name, images) {
  return {
    id: generatid(),
    name,
    images,
  };
}
var img1 = mackimg("Mahdia", [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIG0Dd_zHwRpsvns3U6koKiEcvY2dlY3jXkQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLb2nMZ34TbsyzIR7it-XofL2giGwCoi1m5A&usqp=CAU",
]);

var img2 = mackimg("Sousse", [
  " img/sousse(1).jpg",
  "img/sousse2 (1).jpg",
  "img/sousse3 (1).jpg",
]);
var img3 = mackimg("sidi bou said", [
  "img/sidi Bou Said(1).jpg",
  "img/sidi bou said (3).jpg",
]);

var arr = [img1, img2, img3];
function display(obj) {

  $("#im").append(`
    <div id="${obj.name}" class="abc">
      <h1>${obj.name}</h1>
      <img src =${obj.images[0]} id="${obj.id}" class="imgs"> 
    </div>
`);
}

function displayAll() {
  arr.forEach(function (elem) {
    display(elem);
    $(`#${elem.id}`).click(function () {
      toogeleimage(elem);
    });
  });
}
displayAll();
var cout = 0;
function toogeleimage(obj) {
  if (cout === obj.images.length - 1) {
    cout = 0;
  } else {
    cout++;
  }
  $("#" + obj.id).attr("src", obj.images[cout]);
}
