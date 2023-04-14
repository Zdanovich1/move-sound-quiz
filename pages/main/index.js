const data = [
   [
      {
         id: 1,
         name: 'Властелин колец',
         description: 'Название композиции - "A Storm is Coming"<br> Композитор - Говард Шор<br> Год создания - 2001'
      },
      {
         id: 2,
         name: 'Пираты карибского моря',
         description: 'Название композиции - "He`s A Pirate"<br> Композитор - Клаус Бадельт<br> Год создания - 2003'
      },
      {
         id: 3,
         name: 'Гарри Поттер',
         description: 'Название композиции - "Prologue"<br> Композитор - Джон Уильямс<br> Год создания - 2001'
      },
      {
         id: 4,
         name: 'Звездные войны',
         description: 'Название композиции - "The imperial march"<br> Композитор - Джон Уильямс<br> Год создания - 1980'
      },
      {
         id: 5,
         name: 'Терминатор',
         description: 'Название композиции - "Main Title"<br> Композитор - Брэд Фидель<br> Год создания - 1991'
      },
      {
         id: 6,
         name: 'Крестный отец',
         description: 'Название композиции - "Love Theme"<br> Композитор - Нино Рота<br> Год создания - 1972'
      }
   ],
   [
      {
         id: 1,
         name: 'Интерстеллар',
         description: 'Название композиции - "S.T.A.Y."<br> Композитор - Ханц Циммер<br> Год создания - 2014'
      },
      {
         id: 2,
         name: 'Игра престолов',
         description: 'Название композиции - "Main Title Theme"<br> Композитор - Рамин Джавади<br> Год создания - 2011'
      },
      {
         id: 3,
         name: 'Дюна(2021)',
         description: 'Название композиции - "Paul’s Dream"<br> Композитор - Ханц Циммер<br> Год создания - 2021'
      },
      {
         id: 4,
         name: 'Хоббит',
         description: 'Название композиции - "Misty Mountains Cold"<br> Композитор - Говард Шор<br> Год создания - 2012'
      },
      {
         id: 5,
         name: 'Назад в будущее',
         description: 'Название композиции - "Back To The Future"<br> Композитор - Алан Сильвестри<br> Год создания - 1985'
      },
      {
         id: 6,
         name: 'Аватар',
         description: 'Название композиции - "Climbing Up "Iknimaya the Path to Heaven"<br> Композитор - Джеймс Хорнер<br> Год создания - 2009'
      }
   ],
   [
      {
         id: 1,
         name: 'Леон',
         description: 'Название композиции - "Shape of my heart"<br> Композитор - Стинг, Доминик Миллер<br> Год создания - 1992'
      },
      {
         id: 2,
         name: 'Титаник',
         description: 'Название композиции - "My Heart Will Go On"<br> Композитор - Джеймс Хорнер<br> Год создания - 1997'
      },
      {
         id: 3,
         name: '1+1',
         description: 'Название композиции - "Fly"<br> Композитор - Людовико Эйнауди<br> Год создания - 2011'
      },
      {
         id: 4,
         name: 'Профессионал',
         description: 'Название композиции - "Chi mai"<br> Композитор - Эннио Марриконе<br> Год создания - 1972'
      },
      {
         id: 5,
         name: 'Достучаться до небес',
         description: 'Название композиции - "Knockin on heavens door"<br> Композитор - Боб Дилан<br> Год создания - 1973'
      },
      {
         id: 6,
         name: 'Реквием по мечте',
         description: 'Название композиции - "Lux Aeterna (Winter)"<br> Композитор - Клинт Мэнселл<br> Год создания - 2000'
      }
   ],
   [
      {
         id: 1,
         name: 'Рокки 3',
         description: 'Название композиции - "Eye of the Tiger"<br> Исполнитель - Survivor<br> Год создания - 1982'
      },
      {
         id: 2,
         name: 'Миссия невыполнима',
         description: 'Название композиции - "Theme from Mission: Impossible"<br> Композитор - Лало Шифрин<br> Год создания - 1966'
      },
      {
         id: 3,
         name: 'Джеймс Бонд',
         description: 'Название композиции - "The James Bond Theme"<br> Композитор - Монти Норман<br> Год создания - 1962'
      },
      {
         id: 4,
         name: 'Индиана Джонс',
         description: 'Название композиции - "Indiana Jones Theme"<br> Композитор - Джон Уильямс<br> Год создания - 1981'
      },
      {
         id: 5,
         name: 'Матрица',
         description: 'Название композиции - "Spybreak"<br> Исполнитель - Propellerheads<br> Год создания - 1997'
      },
      {
         id: 6,
         name: 'Трансформеры',
         description: 'Название композиции - "Arrival to earth"<br> Композитор - Стив Яблонски<br> Год создания - 2007'
      }
   ],
   [
      {
         id: 1,
         name: 'Один Дома',
         description: 'Название композиции - "Banished to the Attick"<br> Композитор - Джон Уильямс<br> Год создания - 1990'
      },
      {
         id: 2,
         name: 'Полицейская академия',
         description: 'Название композиции - "Police Academy March"<br> Композитор - Роберт Фолк<br> Год создания - 1984'
      },
      {
         id: 3,
         name: 'Амели',
         description: 'Название композиции - "La valse d Amelie"<br> Композитор - Ян Тирсен<br> Год создания - 2001'
      },
      {
         id: 4,
         name: 'Брюс всемогущий',
         description: 'Название композиции - "I have got the power"<br> Исполнитель - Snap!<br> Год создания - 1990'
      },
      {
         id: 5,
         name: 'Игрушка',
         description: 'Название композиции - "Le Jouet"<br> Композитор - Владимиир Косма<br> Год создания - 1976'
      },
      {
         id: 6,
         name: 'Полицейский из Беверли Хилз',
         description: 'Название композиции - "Axel F"<br> Композитор - Харольд Фальтермайер<br> Год создания - 1984'
      }
   ],
   [
      {
         id: 1,
         name: 'Розовая пантера',
         description: 'Название композиции - "The Pink Panther Theme"<br> Композитор - Генри Манчини<br> Год создания - 1963'
      },
      {
         id: 2,
         name: 'Шрек',
         description: 'Название композиции - "I am a believer"<br> Исполнитель - Smash Mouth<br> Год создания - 2001'
      },
      {
         id: 3,
         name: 'Король Лев',
         description: 'Название композиции - "Circle of Life"<br> Композитор - Тим Райс и Элтон Джон<br> Год создания - 1993'
      },
      {
         id: 4,
         name: 'Холодное сердце',
         description: 'Название композиции - "Let It Go"<br> Исполнитель - Идина Мензел<br> Год создания - 2013'
      },
      {
         id: 5,
         name: 'Рик и Морти',
         description: 'Название композиции - "Rick and Morty Theme"<br> Композитор - Райан Элдер<br> Год создания - 2018'
      },
      {
         id: 6,
         name: 'Симпсоны',
         description: 'Название композиции - "Main Title Theme"<br> Композитор - Дэни Эльфман<br> Год создания - 1989'
      }
   ]
];

let level = 0;
let optionsList = document.querySelectorAll('.item__btn');
let nextLevBtn = document.querySelector('.next-button');

let variantList = document.querySelector('.variants__list');
let soundName = document.querySelector('.sound__name');
let soudDescription = document.querySelector('.sound__description');
let varImage = document.querySelector('.variant__img');
let sound = document.querySelector('.sound-hide');

let varSound = document.querySelector('.var-music');
let varPlayBtn = document.querySelector('.var-play-btn');
let varPauseBtn = document.querySelector('.var-pause-btn');
let defoultAnswerInfo = document.querySelector('.defoult-answer__info');
let answeVariant = document.querySelector('.answer__variant');
let varProgress = document.querySelector('#var-time-range');

let soundRight = document.querySelector('.sound-right');
let soundWrong = document.querySelector('.sound-wrong');

let questionImage = document.querySelector('.question__img');
let questionName = document.querySelector('.audio__name');

let scoreButton = document.querySelector('.score-button');
let resultContent = document.querySelector('.content__result');
let contentBack = document.querySelector('.content__back');

let resultGame = document.getElementById('result-game');
let newGameButton = document.querySelector('.new-game');
let changeCounnt = true;

let levelScore = 5;
let gameScore = 0;
let gameScoreInApp = document.getElementById('score');

let rightAnswer = randomInteger(1, 6);
loadQuestion(rightAnswer);
//console.log(rightAnswer);
activeLevel();
disableNextButton();

nextLevBtn.addEventListener('click', function () {
   level++
   loadAnswers();

   rightAnswer = randomInteger(1, 6);
   loadQuestion(rightAnswer);
   //console.log(rightAnswer);
   //console.log(level);

   variantPauseAudio()
   colorReset();
   hideQuestion();
   deblockAnswersVolume();
   deblockColor();
   activeLevel();
   updateScore();
   disableNextButton();
   changeCounnt = true;

   answeVariant.classList.add('inactive');
   defoultAnswerInfo.classList.remove('inactive');

   if (level == 5) {
      sweatchButtons();
   }
})

variantList.addEventListener("click", (event) => {

   for (let i = 0; i < data[level].length; i++) {
      if (+event.target.dataset.id === data[level][i].id) {
         soundName.innerHTML = data[level][i].name;
         soudDescription.innerHTML = data[level][i].description;
         varImage.style.background = `url(../../assets/images/${level}/${event.target.dataset.id}.jpg) no-repeat`;
         sound.innerHTML = `<audio src="../../assets/audio/${level}/${event.target.dataset.id}.mp3" controls class="var-music"></audio>`;

         defoultAnswerInfo.classList.add('inactive');
         answeVariant.classList.remove('inactive');
         varPlayBtn.classList.remove('inactive');
         varPauseBtn.classList.add('inactive');
         varProgress.style.backgroundSize = `0% 100%`;
         varProgress.value = 0;
      }
   }

   check(event.target);

})

scoreButton.addEventListener('click', function () {
   updateScore();
   seeResult();
});

newGameButton.addEventListener('click', function () {
   document.location.reload();
})

/*-------------------- HELPERS ---------------------*/

function seeResult() {
   resultGame.innerHTML = `${gameScore}`
   resultContent.classList.add('open');
   contentBack.classList.remove('inactive');
}
function sweatchButtons() {
   scoreButton.classList.remove('inactive');
   nextLevBtn.classList.add('inactive');
   scoreButton.disabled = true;
}

function updateScore() {
   gameScore = gameScore + levelScore;
   gameScoreInApp.innerHTML = `${gameScore}`;
   levelScore = 5;
}

function disableNextButton() {
   nextLevBtn.disabled = true;
}

function enableNextButton() {
   nextLevBtn.disabled = false;
}

function check(variant) {
   let indicator = variant.firstElementChild;

   if (+variant.dataset.id === rightAnswer) {
      //console.log('ПРАВИЛЬНО');
      indicator.classList.add('right');
      questionImage.style.background = `url(../../assets/images/${level}/${rightAnswer}.jpg) no-repeat`;
      questionName.innerHTML = data[level][rightAnswer - 1].name;
      soundRight.play();
      pauseAudio();
      setTimeout(lockAnswersVolume, 700);
      lockColor();
      enableNextButton();
      changeCounnt = false;
      if (level == 5) {
         scoreButton.disabled = false;
      }
   } else {
      //console.log('НЕПРАВИЛЬНО');
      indicator.classList.add('wrong');
      soundWrong.play();
      if (changeCounnt) {
         levelScore--;
      }
   }
}

function lockAnswersVolume() {
   soundRight.volume = 0;
   soundWrong.volume = 0;
}
function deblockAnswersVolume() {
   soundRight.volume = 1;
   soundWrong.volume = 1;
}

function lockColor() {
   let allAnswers = document.querySelectorAll('.item__btn');
   allAnswers.forEach(function (item) {
      if (!item.classList.contains('right') && !item.classList.contains('wrong')) {
         item.classList.add('lock')
      }
   })
}

function deblockColor() {
   let allAnswers = document.querySelectorAll('.item__btn');
   allAnswers.forEach(function (item) {
      if (item.classList.contains('lock')) {
         item.classList.remove('lock')
      }
   })
}

function activeLevel() {
   let questionLevel = document.querySelectorAll('.level')
   questionLevel.forEach(function (item, index) {
      if (index == level) {
         item.style.background = '#009973';
      } else {
         item.style.background = '#F2BD0B';
      }
   })
}

function hideQuestion() {
   questionImage.style.background = 'url(../../assets/images/default-img.jpg) no-repeat';
   questionName.innerHTML = '<p>***********</p>';
}

function colorReset() {
   let varListButtons = document.querySelectorAll('.item__btn');
   varListButtons.forEach(function (item) {
      if (item.classList.contains('right')) {
         item.classList.remove('right');
      } else if (item.classList.contains('wrong')) {
         item.classList.remove('wrong');
      }
   })
}

function loadAnswers() {
   if (level == (data.length)) {
      level = 0;
   }

   for (let i = 0; i < data[level].length; i++) {
      optionsList[i].innerHTML = data[level][i].name;
   }

}

function randomInteger(min, max) {
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
}

function loadQuestion(integer) {
   let questionAudio = document.querySelector('.audio-hide');
   questionAudio.innerHTML = `<audio src="../../assets/audio/${level}/${integer}.mp3" controls class="music"></audio>`;
}