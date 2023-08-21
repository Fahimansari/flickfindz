import questions_list from "@/constants/question_list";
import Question from "./Question";

const QuestionForm = () => {

    console.log(questions_list);
    

    const handleSubmit = () => {
      console.log(`This function handles the submit`);
      
    }
  return (
    <>
    <form className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-1-2 sm:rounded-lg sm:px-10 w-1/2" action='#' method=''>
        { questions_list.map(question => {return <div><Question question={question} /></div> })}
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    </>  )
}

export default QuestionForm