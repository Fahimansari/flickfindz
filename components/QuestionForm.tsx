import questions_list from "@/constants/question_list";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Question from "./Question";

interface Answers {
  [key: string]: string;
}

const QuestionForm = () => {


  let initialAnswers: Answers = {};
  questions_list.forEach((question) => {
    initialAnswers[question.id] = question.options[0].title;
  });
  
  const router = useRouter();
  const [answers, setAnswers] = useState(initialAnswers);
  
  if (typeof window !== "undefined")  {

  sessionStorage.setItem("answers", JSON.stringify(answers));
  }
  const handleAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };
  
  console.log(answers);
  
  
  console.log(`This is the Question Form page`);
  
  const handleSubmit = () => {
    
    
    console.log(`This function handles the submit`);
    // sessionStorage.setItem("answers", JSON.stringify(answers));
    router.push("/suggestions");

    
  };
  return (
    <>
      <form
        className='relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-full sm:min-w-3/4 sm:rounded-lg sm:px-10 lg:w-1/2'
        action='#'
        method=''
      >
        {questions_list.map((question) => {
          return (
            <Question
              key={question.id}
              question={question}
              handleAnswer={handleAnswer}
            />
          );
        })}
        <div className='flex justify-center items-center mt-10 p-10'>
          {" "}
          {/* Adjust this container's classes as needed */}
          <button
            type='submit'
            className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-7 rounded focus:outline-none focus:ring focus:ring-yellow-200 shadow-xl'
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default QuestionForm;
