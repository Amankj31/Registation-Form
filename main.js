
var Name = document.getElementById('Name')
var Email = document.getElementById('Email')
var website = document.getElementById('website')
var btn = document.getElementById('btn');
var cards = document.querySelector('.cards');
var Male = document.getElementById('Male')
var Female = document.getElementById('Female')
var html = document.getElementById('html')
var css = document.getElementById('css')
var javascript = document.getElementById('javascript')
var java = document.getElementById('java')
var python = document.getElementById('python')
var form = document.querySelector('form');
var selectImage;

var image = function (event) {
  selectImage = URL.createObjectURL(event.target.files[0]);
};
btn.addEventListener('click', function () {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = []
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });

  if (!Name.value || !Email.value || !website.value) {
    alert('ERROR: Please enter all fields!')
  }
  else {
    cards.innerHTML += `
  <div class="card">
  <h4 class="title">${Name.value}</h4>
  <p class="text">${Male.checked ? Male.value : Female.checked ? Female.value : 'Others'}</p>
  <p class="text">${Email.value}</p>
  <p class="text">${website.value}</p>
  <p class="text">${values}</p>
      <img src='${selectImage}' alt="Image" width="120" height="110">
  </div>`

    alert('Student Enrolled Successfully!!')
    form.reset()
  }
});