const questionDOM = (questions) => {
    // CREATE DOM FOR QUESTION
    const rootDiv = document.createElement('div')
    const textEl = document.createElement('span')

    // assign contents of textEl
    textEl.textContent = questions[0].question

    // append textEl
    rootDiv.appendChild(textEl)

    return rootDiv
}

const answerDOM = (item) => {

    // creation of container
    const container = document.createElement('div')

    // creation of checkbox
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    // creation of label
    const label = document.createElement('label')
    label.htmlFor = checkbox
    label.appendChild(document.createTextNode(`${item}`))

    container.appendChild(checkbox)
    container.appendChild(label)

    return container

}