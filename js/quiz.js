const startBtn = document.getElementById('btn-start')
const nextBtn = document.getElementById('btn-next')
const qContainerElement = document.getElementById('q_container')
const questionElement = document.getElementById('question')
const repBtn = document.getElementById('answer-btns')

let randQuestions, curQuestionId

startBtn.addEventListener('click', start)
nextBtn.addEventListener('click', () => {
  curQuestionId++
  nextQuestion()
})

function start() {
  console.log('Started !')
  startBtn.classList.add('hide')
  randQuestions = questions.sort(() => Math.random() - .5)
  curQuestionId = 0
  qContainerElement.classList.remove('hide')
  nextQuestion()
}

function nextQuestion() {
  resetGrid()
  showQuestion(randQuestions[curQuestionId])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.reponses.forEach(reponse => {
    const button = document.createElement('button')
    button.innerText = reponse.text
    button.classList.add('btn')
    if (reponse.correct) {
      button.dataset.correct = reponse.correct
    }
    button.addEventListener('click', selectReponse)
    repBtn.appendChild(button)
  })
}

function resetGrid() {
  clearStatusClass(document.body)
  nextBtn.classList.add('hide')
  while (repBtn.firstChild) {
    repBtn.removeChild(repBtn.firstChild)
  }
}

function selectReponse(e) {
  const selectBtn = e.target
  const correct = selectBtn.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(repBtn.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (randQuestions.length > curQuestionId + 1) {
    nextBtn.classList.remove('hide')
  } else {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  }

}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Quel est le nom actuel de la Sérénissime ?',
    reponses: [
      { text: 'Venise', correct: true },
      { text: 'Rome', correct: false },
      { text: 'Paris', correct: false },
      { text: 'Tokyo', correct: false }
    ],
    niveau: 'medium'
  },
  {
    question: 'Comment s\'écrit le nom de cet état américain ?',
    reponses: [
      { text: 'Missisipi', correct: false },
      { text: 'Mississippi', correct: true },
      { text: 'Misissippi', correct: false },
      { text: 'Missisippi', correct: false }
    ],
    niveau: 'medium'
  },
  {
    question: 'Quel chevalier de la Table Ronde est également appelé \"le Gallois\" ?',
    reponses: [
      { text: 'Perceval', correct: true },
      { text: 'Arthur', correct: false },
      { text: 'Lancelot', correct: false },
      { text: 'Hector', correct: false }
    ],
    niveau: 'easy'
  },
  {
    question: 'Combien de muscles y a-t-il dans le corps humain  ?',
    reponses: [
      { text: 'Moins de 200', correct: false },
      { text: 'Entre 200 et 400', correct: false },
      { text: 'Entre 400 et 600', correct: false },
      { text: 'Plus de 600', correct: true }
    ],
    niveau: 'easy'
  },
  {
    question: 'Quelle est la signification du mot pharaon ?',
    reponses: [
      { text: 'Grande maison', correct: true },
      { text: 'Lumière divine', correct: false },
      { text: 'Sagesse', correct: false },
      { text: 'Qui vit sur terre', correct: false }
    ],
    niveau: 'hard'
  },
  {
    question: 'Que fait la cigale ?',
    reponses: [
      { text: 'Elle jase', correct: false },
      { text: 'Elle grisolle', correct: false },
      { text: 'Elle stridule', correct: true },
      { text: 'Elle blatère', correct: false }
    ],
    niveau: 'hard'
  },
  {
    question: 'Qu\'est-ce qu\'un oléandre ?',
    reponses: [
      { text: 'Un grand pont', correct: false },
      { text: 'Un laurier à fleurs', correct: true },
      { text: 'Un arbre du Sud de la France', correct: false },
      { text: 'Une personne généreuse', correct: false }
    ],
    niveau: 'hard'
  },
  {
    question: 'Quel nom porte le siège de la police londonienne ?',
    reponses: [
      { text: 'MI6', correct: false },
      { text: 'Scotland Yard', correct: true },
      { text: 'Buckingham', correct: false },
      { text: 'Le Capitole', correct: false }
    ],
    niveau: 'easy'
  },
  {
    question: 'Combien d\'États souverains bordent la mer Méditerranée ?',
    reponses: [
      { text: '15', correct: false },
      { text: '21', correct: true },
      { text: '25', correct: false },
      { text: '31', correct: false }
    ],
    niveau: 'medium'
  }
]