var priceList = document.querySelector('.price-list');
var select = document.querySelector('.user-tarif').children;
var btn = priceList.querySelectorAll('.btn');

var linkActive = document.querySelector('.main-menu__link.active');
var menu = document.querySelector('.menu__toggle');

/*var spanHidden = document.querySelector('.nojs').style.display="inline-block";*/
/*var selectSity = document.querySelector('#select-sity').style.display="inline-block";*/

let setTarif = function(option,btn) {
    btn.addEventListener('click', function() {
    if (btn.getAttribute('data-tarif') == option.value) {
       option.setAttribute('selected','');
    } 
  });
};

for (var i = 0; i < btn.length; i++) {
    select[i].removeAttribute('selected');
    setTarif(select[i],btn[i]);     
}

linkActive.addEventListener('click', function(){
  location.reload(); 
});

