const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "1px solid red";
  section.style.margin = "10px";
  section.style.borderRadius = "10px";
  section.style.padding = "10px";
  section.style.backgroundColor = "#ddd";
}

const brand = document.getElementById("brand");
brand.classList.add("text-align");
