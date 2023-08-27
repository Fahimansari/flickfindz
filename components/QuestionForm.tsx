import questions_list from "@/constants/question_list";
import Question from "./Question";

const QuestionForm = () => {
  console.log(questions_list);

  const handleSubmit = () => {
    console.log(`This function handles the submit`);
  };
  return (
    <>
      <form
        className='relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-full sm:min-w-3/4 sm:rounded-lg sm:px-10 lg:w-1/2'
        action='#'
        method=''
      >
        {questions_list.map((question) => {
          return <Question key={question.id} question={question} />;
        })}
        <div className='flex justify-center items-center mt-10 p-10'>
          {" "}
          {/* Adjust this container's classes as needed */}
          <button
            type='submit'
            className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-7 rounded focus:outline-none focus:ring focus:ring-indigo-200 shadow-xl'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default QuestionForm;
