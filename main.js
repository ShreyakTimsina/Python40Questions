// Smooth Scrolling
$(".content-container ul li a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 50,
      },
      800
    );
  }
});

// DARK/LIGHT MODE

document.querySelector("#switch").addEventListener("change", function () {
  if (this.checked) {
    document.querySelector("#css-mode").setAttribute("href", "darkmode.css");
  } else {
    document.querySelector("#css-mode").setAttribute("href", "lightmode.css");
  }
});
// KEYWORD SEARCH

function keywordSearch() {
  const keyWord = document.querySelector("#search").value.toLowerCase();

  const allText = document.body.textContent.toLowerCase();

  console.log("searched");

  // if (allText.includes(keyWord)) {
  //   allText.includes(keyWord).style.color = "red";
  // } else {
  //   alert("Keyword Not Found.");
  // }

  // Array.from(allText).forEach((text) => {
  //   if (text.indexOf(keyWord) != -1) {
  //     // text.style.background = "yellow";
  //     console.log("Found");
  //   }
  // });
}

document.querySelector("#search-btn").addEventListener("click", keywordSearch);

document.querySelector("#search").addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    keywordSearch();
  }
});
