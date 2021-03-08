const questions = [{
    question: 'Which country were ABBA from?',
    possible_answers: [
        'Denmark', 'Turkey', 'Sweden'
    ],
    answer: 'Sweden'
}, {
    question: 'How many members of The Beatles were there?',
    possible_answers: [
        'Three', 'Four', 'Five'
    ],
    answer: 'Four'
}, {
    question: 'Who had a hit in the sixties with "The Air That I Breathe"?',
    possible_answers: [
        'The Kinks', 'The Beatles', 'The Hollies'
    ],
    answer: 'The Hollies'
}, {
    question: 'Which band featured the Davies brothers?',
    possible_answers: [
        'Stealers Wheel', 'Right Said Fred', 'The Hollies'
    ],
    answer: 'The Kinks'
}]

// Render the questions to the screen in order of their index



const renderQuestions = (questions) => {
    document.querySelector('#question-container').appendChild(questionDOM(questions))

    questions[0].possible_answers.forEach((item) => {
        document.querySelector('#possible-answer-container').appendChild(answerDOM(item))
    })

}

renderQuestions(questions)