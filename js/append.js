const brandContainer = document.getElementById("brand-container");
const li = document.createElement("li");
li.innerText = "my asus laptop";
brandContainer.appendChild(li);

const main = document.getElementById("main");

const section = document.createElement("section");

const h1 = document.createElement("h1");
h1.innerText = "brand title";

section.appendChild(h1);

main.appendChild(section);

const dressSection = document.createElement("section");

dressSection.innerHTML = `
<h1>my dress section </h1>
<ul>
    <li>shirt</li>
    <li>pant</li>
    <li>shoe</li>
</ul>
`;

main.appendChild(dressSection);
