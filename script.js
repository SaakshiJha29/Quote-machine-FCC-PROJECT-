// colors
const colorsArray = [
  { bgColor: "rgb(254, 164, 127)", textColor: "#fff" },
  { bgColor: "rgb(37, 204, 247)", textColor: "#fff" },
  { bgColor: "rgb(234, 181, 67)", textColor: "#222" },
  { bgColor: "rgb(85, 230, 193)", textColor: "#222" },
  { bgColor: "rgb(44, 58, 71)", textColor: "#fff" }
];

// small quote sample (enough for project)
const allQuotes = [
  {
    id: 1,
    author: "C. A. R. Hoare",
    quote:
      "Premature optimization is the root of all evil."
  },
  {
    id: 2,
    author: "Douglas Adams",
    quote:
      "I love deadlines. I like the whooshing sound they make as they fly by."
  },
  {
    id: 3,
    author: "Jamie Zawinski",
    quote:
      "Some people think using regular expressions solves problems. Now they have two."
  },
  {
    id: 4,
    author: "Bill Gates",
    quote:
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight."
  }
];

const textEl = document.getElementById("text");
const authorEl = document.getElementById("author");
const tweetBtn = document.getElementById("tweet-quote");
const newBtn = document.getElementById("new-quote");
const wrapper = document.getElementById("wrapper");

let used = {};

function generateQuote() {
  let q = allQuotes[Math.floor(Math.random() * allQuotes.length)];

  while (used[q.id]) {
    q = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  }

  used[q.id] = true;
  if (Object.keys(used).length === allQuotes.length) used = {};

  textEl.innerText = `“${q.quote}”`;
  authorEl.innerText = `- ${q.author}`;

  tweetBtn.href =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(q.quote);

  const color =
    colorsArray[Math.floor(Math.random() * colorsArray.length)];

  wrapper.style.backgroundColor = color.bgColor;
  wrapper.style.color = color.textColor;
  newBtn.style.backgroundColor = color.textColor;
  newBtn.style.color = color.bgColor;
  tweetBtn.style.backgroundColor = color.textColor;
  tweetBtn.style.color = color.bgColor;
}

// first load
generateQuote();

// button click
newBtn.addEventListener("click", generateQuote);
