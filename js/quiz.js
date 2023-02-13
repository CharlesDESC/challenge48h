const startBtn = document.getElementById('btn-start')
const nextBtn = document.getElementById('btn-next')
const quitBtn = document.getElementById('btn-quit')
const rulesElement = document.getElementById('rules')
const qContainerElement = document.getElementById('q_container')
const questionElement = document.getElementById('question')
const scoreElement = document.getElementById('score')
const repBtn = document.getElementById('answer-btns')
const scoreDiv = document.getElementById('score')

let randQuestions, curQuestionId, countScore, countGame
// countGame == nombre essai json, à décrémenter
countGame = 0

startBtn.addEventListener('click', start)
nextBtn.addEventListener('click', () => {
  curQuestionId++
  nextQuestion()
})

// Starts the game and sets the question randomizer 
function start() {
  console.log('Started !')
  startBtn.classList.add('hide')
  countGame+=3
  // randQuestions = questions.sort(() => Math.random() - .5)
  /* randQuestions = questions.sort(function(a,b) {
    return a.niveau - b.niveau
  }) */

  randQuestions = questions.slice(countGame-3,countGame)

  curQuestionId = 0
  countScore = 0
  rulesElement.classList.add('hide')
  qContainerElement.classList.remove('hide')
  scoreElement.classList.remove('hide')
  nextQuestion()
}

// Show next question in randomizer
function nextQuestion() {
  resetGrid()
  showQuestion(randQuestions[curQuestionId])
}


// Show question and displays answers in buttons
function showQuestion(question) {
  questionElement.innerText = question.question
  question.reponses.forEach(reponse => {
    const button = document.createElement('button')
    button.innerText = reponse.text
    button.classList.add('btn')
    if (reponse.correct) {
      button.dataset.correct = reponse.correct
      countScore++
      if (countScore%3 == 1) {
        scoreDiv.innerText = Math.floor(countScore/3) + " missile(s) acquis"
      }
    }
    button.addEventListener('click', selectReponse)
    repBtn.appendChild(button)
  })
}

// Resets the whole answer grid
function resetGrid() {
  clearStatusClass(document.body)
  nextBtn.classList.add('hide')
  while (repBtn.firstChild) {
    repBtn.removeChild(repBtn.firstChild)
  }
}

// Tests the answer and sets a next or quit button
function selectReponse(e) {
  const selectBtn = e.target
  const correct = selectBtn.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(repBtn.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  // Restart loop
  /* if (randQuestions.length > curQuestionId + 1) {
    nextBtn.classList.remove('hide')
  } else {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  } */

  if (randQuestions.length > curQuestionId + 1) {
    nextBtn.classList.remove('hide')
  } else if (countGame < 9) {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  } else {
    quitBtn.classList.remove('hide')
  }

}

// If correct/wrong, sets the button class to "correct" or "wrong"
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

// Clears any correct/wrong class
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


// List of questions
const questions = [
  {
    question: 'Quel chevalier de la Table Ronde est également appelé \"le Gallois\" ?',
    reponses: [
      { text: 'Perceval', correct: true },
      { text: 'Arthur', correct: false },
      { text: 'Lancelot', correct: false },
      { text: 'Hector', correct: false }
    ],
    niveau: '1'
  },
  {
    question: 'Quel est le nom actuel de la Sérénissime ?',
    reponses: [
      { text: 'Venise', correct: true },
      { text: 'Rome', correct: false },
      { text: 'Paris', correct: false },
      { text: 'Tokyo', correct: false }
    ],
    niveau: '2'
  },
  {
    question: 'Quelle est la signification du mot pharaon ?',
    reponses: [
      { text: 'Grande maison', correct: true },
      { text: 'Lumière divine', correct: false },
      { text: 'Sagesse', correct: false },
      { text: 'Qui vit sur terre', correct: false }
    ],
    niveau: '3'
  },
  {
    question: 'Combien de muscles y a-t-il dans le corps humain  ?',
    reponses: [
      { text: 'Moins de 200', correct: false },
      { text: 'Entre 200 et 400', correct: false },
      { text: 'Entre 400 et 600', correct: false },
      { text: 'Plus de 600', correct: true }
    ],
    niveau: '1'
  },
  {
    question: 'Comment s\'écrit le nom de cet état américain ?',
    reponses: [
      { text: 'Missisipi', correct: false },
      { text: 'Mississippi', correct: true },
      { text: 'Misissippi', correct: false },
      { text: 'Missisippi', correct: false }
    ],
    niveau: '2'
  },
  {
    question: 'Que fait la cigale ?',
    reponses: [
      { text: 'Elle jase', correct: false },
      { text: 'Elle grisolle', correct: false },
      { text: 'Elle stridule', correct: true },
      { text: 'Elle blatère', correct: false }
    ],
    niveau: '3'
  },
  {
    question: 'Quel nom porte le siège de la police londonienne ?',
    reponses: [
      { text: 'MI6', correct: false },
      { text: 'Scotland Yard', correct: true },
      { text: 'Buckingham', correct: false },
      { text: 'Le Capitole', correct: false }
    ],
    niveau: '1'
  },
  {
    question: 'Combien d\'États souverains bordent la mer Méditerranée ?',
    reponses: [
      { text: '15', correct: false },
      { text: '21', correct: true },
      { text: '25', correct: false },
      { text: '31', correct: false }
    ],
    niveau: '2'
  },
  {
    question: 'Qu\'est-ce qu\'un oléandre ?',
    reponses: [
      { text: 'Un grand pont', correct: false },
      { text: 'Un laurier à fleurs', correct: true },
      { text: 'Un arbre du Sud de la France', correct: false },
      { text: 'Une personne généreuse', correct: false }
    ],
    niveau: '3'
  } 
  
]