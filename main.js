// Smooth Scrolling
$(".content-container ul li a, .top-btn button a").on("click", function (
  event
) {
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

// COPY CODE
let clipboard1 = new ClipboardJS("#copy-btn");
// KEYWORD SEARCH

function keywordSearch() {
  let searchedText = document.querySelector("#search").value;
  const keyWord = document
    .querySelector("#search")
    .value.toLowerCase()
    .replace(/\s/g, "");

  const topics = document.querySelector("#topics").getElementsByTagName("a");

  Array.from(topics).forEach((topic) => {
    const topicName = topic.textContent.replace(/\s/g, "");

    if (searchedText.length >= 3) {
      if (topicName.toLowerCase().indexOf(keyWord) > -1) {
        topic.style.backgroundColor = "yellow";
        topic.style.color = "black";
        topic.style.padding = "5px";
      } else {
        topic.style.backgroundColor = "transparent";
        topic.style.color = "inherit";
        topic.style.padding = "initial";
      }
    } else {
      topic.style.background = "transparent";
      topic.style.color = "inherit";
      topic.style.padding = "initial";
    }
  });
}

// search event listeners
document.querySelector("#search-btn").addEventListener("click", keywordSearch);
document.querySelector("#search").addEventListener("keyup", keywordSearch);
