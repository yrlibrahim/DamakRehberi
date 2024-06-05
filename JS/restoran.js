// Dropdown Menu Start
let dropMenu = document.getElementById("dropMenu");
function toogleMenu() {
  dropMenu.classList.toggle("open-menu");
}
// Aside-Bar Start
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
btn.onclick = function () {
  sidebar.classList.toggle("active");
};
// Check List Start
document.getElementById("checkbox-6").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("kebap").scrollIntoView({ behavior: "smooth" });
  }
});
document.getElementById("checkbox-5").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("yoresel").scrollIntoView({ behavior: "smooth" });
  }
});
document.getElementById("checkbox-7").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("firin").scrollIntoView({ behavior: "smooth" });
  }
});
document.getElementById("checkbox-8").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("fast-food").scrollIntoView({ behavior: "smooth" });
  }
});
document.getElementById("checkbox-9").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("icecek").scrollIntoView({ behavior: "smooth" });
  }
});

//FOOTER START
const tweet = document.querySelector(".tweet"),
  editableInput = tweet.querySelector(".editable"),
  readonlyInput = tweet.querySelector(".readonly"),
  placeholder = tweet.querySelector(".placeholder"),
  counter = tweet.querySelector(".counter"),
  button = tweet.querySelector("button");

editableInput.onkeyup = (e) => {
  let element = e.target;
  validated(element);
};
editableInput.onkeypress = (e) => {
  let element = e.target;
  validated(element);
  placeholder.style.display = "none";
};
function validated(element) {
  let text;
  let maxLength = 60;
  let currentlength = element.innerText.length;
  if (currentlength <= 0) {
    placeholder.style.display = "block";
    counter.style.display = "none";
    button.classList.remove("active");
  } else {
    placeholder.style.display = "none";
    counter.style.display = "block";
    button.classList.add("active");
  }
  counter.innerText = maxLength - currentlength;
  if (currentlength > maxLength) {
    let overText = element.innerText.substr(maxLength); //extracting over texts
    overText = `<span class="highlight">${overText}</span>`; //creating new span and passing over texts
    text = element.innerText.substr(0, maxLength) + overText; //passing overText value in textTag variable
    readonlyInput.style.zIndex = "1";
    counter.style.color = "#e0245e";
    button.classList.remove("active");
  } else {
    readonlyInput.style.zIndex = "-1";
    counter.style.color = "#333";
  }
  readonlyInput.innerHTML = text;
}
// Fiyat Belirleme
// Kişi Sayısı Belirleme Butonu
let personCountPopup = document.getElementById("person-count-popup");
let personCountInput = document.getElementById("person-count-input");
let btnPersonCount = document.getElementById("btn-person-count");

document.getElementById("btn-confirm").addEventListener("click", function () {
  let personCount = personCountInput.value;
  console.log("Seçilen Kişi Sayısı:", personCount);
  personCountPopup.style.display = "none"; // Onaylandığında popup gizlensin
});

btnPersonCount.addEventListener("click", function () {
  let buttonRect = btnPersonCount.getBoundingClientRect();
  // Popup'ı butonun yanında konumlandıralım
  personCountPopup.style.display = "block";
  personCountPopup.style.position = "fixed";
  personCountPopup.style.top = buttonRect.top + "px"; // Butonun üstüne gelir
  personCountPopup.style.left = buttonRect.right + "px"; // Butonun sağ tarafında başlayacak şekilde ayarla
  personCountInput.focus(); // Giriş kutusuna odaklan
});

// Kişi Sayısı Belirleme Kutusu
personCountInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let personCount = personCountInput.value;
    console.log("Seçilen Kişi Sayısı:", personCount);
    personCountPopup.style.display = "none"; // Popup'ı gizle
  }
});

// Yorumlar Start
document.getElementById("clicker1").addEventListener("click", function () {
  this.classList.toggle("active");
});
document.getElementById("clicker2").addEventListener("click", function () {
  this.classList.toggle("active");
});
