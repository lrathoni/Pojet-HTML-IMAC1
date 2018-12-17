
const select = document.querySelector('#choix');
const inputSubmit = document.querySelector('#submit');
const Mask = document.querySelector('#mask');
const icon2 = document.querySelector('#icon2');
const inputQuestion = document.querySelector('#inputQuestion');

//picture_active
const handleModalClick = e => {
    const activePicture =
        document.querySelector('.picture-active');
  // here we are using string templating
  icon2.style.background =
    `url('${activePicture.src}') no-repeat top / 100px 100px`;
  Mask.classList.add('modal-active');

};


// event is pass implicitly/automatically to the
// callback function
inputSubmit.addEventListener(
  'click',
  handleModalClick
);

const changeImage = e => {
  const value = e.target.value;
    console.log(value);
  const activePicture =
        document.querySelector('.picture-active');
  activePicture.classList.remove('picture-active');
  const chosenPicture =
        document.querySelector(`#${value}`);
  chosenPicture.classList.add('picture-active');
};


//modale
select.addEventListener(
      'change',
      e => {loadDoc() ; changeImage (e)}
    );


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById('daily-horoscope').innerHTML =
        this.responseText;
        }
    };
    xhttp.open('GET', 'https://horoscopes-and-astrology.com/template/?&width=499&widthunit=px&backgroundcolor=rgba(60, 60, 60,10)&textcolor=ivory&border=ON&image=0&imageunit=px&borderradius=20&padding=&margin=', true);
    xhttp.send();
}

