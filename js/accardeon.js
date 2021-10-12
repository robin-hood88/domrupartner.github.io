var listDescription = document.querySelectorAll('.faq-list__description');

var faq = document.querySelector('.faq');
var span = faq.querySelectorAll('span');
var iconFaq = document.querySelectorAll('.icon-faq');
var list = document.querySelectorAll('.description-inside__list');

var descriptionTitle = document.querySelectorAll('.description-inside__title');
var descriptionSubtitle = document.querySelectorAll('.description-inside__subtitle');
var dexcriptionText = document.querySelectorAll('.description-inside__text');
var activ = document.querySelector('.description-inside__list_activ');

var spanHidden = document.querySelector('.nojs').style.display="inline";
var selectSity = document.querySelector('#select-sity').style.display="inline";


/*Функция clickSpan обработчик клика по тегу span, внутри .faq-list__description*/
let clickSpan = function(span,icon,list) {
  span.addEventListener('click', function() {
    /*list.classList.toggle('hidden');*/
    list.classList.toggle('description-inside__list_activ');
    icon.classList.toggle('active-icon');
  });
}

for(let i = 0; i < span.length; i++) {
  clickSpan(span[i],iconFaq[i],list[i]);
}
/*clickSpan END*/

/*Функция click обработчик клика по тегу p, внутри .description-inside__title*/
let click = function(title,subtitle,text) {
    title.addEventListener('click', function() {
        title.classList.toggle('active');
        subtitle.classList.toggle('hidden');
        text.classList.toggle('hidden');
        console.log('click');
      });
}
    
for(let i = 0; i < descriptionTitle.length; i++) {
    click(descriptionTitle[i],descriptionSubtitle[i],dexcriptionText[i]);
}
/*click END*/