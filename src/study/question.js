export class Question{
  constructor(questionText, answer, options, semantic){
    this.questionText = questionText
    this.answer = answer
    this.options = options
    this.semantic = semantic
  }

  isAnswer(option){
    if (option == this.answer){return true}
  }
}