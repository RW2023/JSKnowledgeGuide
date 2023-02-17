// import hljs from "highlight.js";

// Call the highlightAll() function to apply syntax highlighting to all code blocks on the page
// hljs.highlightAll();

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("pre code").forEach((el) => {
    hljs.highlightElement(el);
  });
});
