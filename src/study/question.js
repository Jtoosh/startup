export class Question{
  constructor(questionText, answer, options, semantic, selection){
    this.questionText = questionText
    this.answer = answer
    this.options = options
    this.semantic = semantic
    this.selection = selection
  }

  isAnswer(option){
    if (option == this.answer){return true}
  }
}