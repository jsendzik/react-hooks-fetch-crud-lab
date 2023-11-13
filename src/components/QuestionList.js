import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((items) => setQuestions(items))
  }, [])

  function handleDelete(deletedItem) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedItem.id);
    setQuestions(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => {
        return (
          <QuestionItem key={question.id} question={question} questions={questions} setQuestions={setQuestions} onDelete={handleDelete}/>
        )
      })}</ul>
    </section>
  );
}

export default QuestionList;
