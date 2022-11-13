var form = document.querySelector('.context__form')
var validateBtn = form.querySelector('.context__btn')
var from = form.querySelector('.context__input')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log('clicked on validate')
  console.log('from: ', from.value)
})

var fields = form.querySelectorAll('.field')

form.addEventListener('submit', function (event) {
  event.preventDefault()



  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
      var error = document.createElement('div')
      error.className = 'error'
      error.style.color = 'red'
      error.innerHTML = 'Cannot be blank'
      form[i].parentElement.insertBefore(error, fields[i])
    }
  }
})




var tab;
var tabContent;

window.onload=function() {
    tabContent=document.getElementsByClassName('content');
    tab=document.getElementsByClassName('Buttonbox__tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('active');

    }
}

document.getElementById('buttonbox').onclick=function (event) {
    var target=event.target;
    if (target.className=='Buttonbox__tab'){
        for(var i=0; i<tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('active');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('active');
    }
}