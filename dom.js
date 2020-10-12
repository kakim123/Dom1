const MyDavidFamily = [
    {
      name: "John",
      children: ["Ali","MOhsin","Alex","Tajwar"]
  },
    {
      name: "Alx",
      children: ["Ayaz","Faizan","Karem","Sajjad"]
  },
    {
      name: "Cendrella",
      children: ["Michelle","Sarah","Shireen","Sajjad"]
  }
  ];
  
  
  const h1 = document.createElement("h1");
  h1.innerHTML = "Mr David";
  h1.style.color = "black";
  h1.style.fontSize = "20px";
  h1.style.textAlign ="center";
  document.body.append(h1);
  
  var ul = document.createElement("ul");
  document.body.append(ul);
  // ul.classList.add("mainul");
  
  MyDavidFamily.forEach(family => {
       let li = document.createElement("li");
       li.innerHTML = family.name;
       ul.appendChild(li);
       let inul = document.createElement("ul");
       li.appendChild(inul);
       let inli = document.createElement("li");
       inli.innerHTML = family.children[0];
       inul.appendChild(inli)
      //  inli.classList.add("inli");
       inli = document.createElement("li");
       inli.innerHTML = family.children[1];
       inul.appendChild(inli)
      //  inli.classList.add("inli");
       inli = document.createElement("li");
       inli.innerHTML = family.children[2];
       inul.appendChild(inli)
      //  inli.classList.add("inli");
       inli = document.createElement("li");
       inli.innerHTML = family.children[3];
       inul.appendChild(inli)
      //  inli.classList.add("inli");
      //  li.classList.add("mainli");
      //  inul.classList.add("inul");
        });