
const select = document.querySelector('#choix');
const inputSubmit = document.querySelector('#submit');
const Mask = document.querySelector('#mask');
const icon2 = document.querySelector('#icon2');
const QuestionWrite = document.querySelector('#question-write');
const ResponseWrite = document.querySelector('#reponse');
const inputQuestion = document.querySelector('#inputQuestion');

const changeValue =
      (value, element) => element.innerHTML = value || 'QUESTION';
      
//we have two parameters, so we create a function
// to pass evt as a parameter
inputQuestion.addEventListener(
  'keyup',
  evt => changeValue(evt.target.value, question)
);

// random predictions
var predictions = {
        "reponse": [
            "Oui.",
            "Non.",
            "Peut-être.",
			"Jamais.",
			"Bientôt.",
			"Je n'ai pas compris votre question.",
			"42.",
			"Je ne réponds pas aux grossièretés !",
			"La réponse se trouve sous votre nez, il suffit de se moucher."
        ]
    }

var random = predictions.reponse[Math.floor(Math.random() * predictions.reponse.length)];
console.log(random);

//picture_active
const handleModalClick = e => {
  e.preventDefault();
  QuestionWrite.innerHTML = question.innerHTML;
  ResponseWrite.innerHTML = random;
    const activePicture =
        document.querySelector('.picture-active');
  // here we are using string templating
  icon2.style.background =
    `url('${activePicture.src}') no-repeat top / 100px 100px`;
  Mask.classList.add('modal-active');

};



inputSubmit.addEventListener(
  'click',
  handleModalClick
  );

const changeImage = e => {
  const value = e.target.value;
  const activePicture =
        document.querySelector('.picture-active');
  activePicture.classList.remove('picture-active');
  const chosenPicture =
        document.querySelector(`#${value}`);
  chosenPicture.classList.add('picture-active');
};


//modale
select.addEventListener('change',e => {
  loadDoc();
  changeImage (e);
});

var monJson;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          monJson = JSON.parse(this.responseText);  
        document.getElementById('daily-horoscope').innerHTML =
        monJson.dailyhoroscope[document.querySelector('#choix').value];
        }
    };
    xhttp.open('GET', 'https://www.horoscopes-and-astrology.com/json', true);
    xhttp.send();
}

//$.getJSON("https://horoscopes-and-astrology.com/template/?&width=499&widthunit=px&backgroundcolor=rgba(60, 60, 60,10)&textcolor=ivory&border=ON&image=0&imageunit=px&borderradius=20&padding=&margin=", $("div.cadre")).done(function(data)

//this.ajax("https://horoscopes-and-astrology.com/template/?&width=499&widthunit=px&backgroundcolor=rgba(60, 60, 60,10)&textcolor=ivory&border=ON&image=0&imageunit=px&borderradius=20&padding=&margin=").done(function(response){
 // console.log(response);
//});