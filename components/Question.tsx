const notificationMethods = [
  { id: "email", title: "Email" },
  { id: "sms", title: "Phone (SMS)" },
  { id: "push", title: "Push notification" },
];

interface QuestionProps {
  handleAnswer: Function;
  question: {
    id: string;
    question: string;
    key: string;
    options: { id: string; title: string }[];
  };
}

const Question: React.FC<QuestionProps> = ({ question, handleAnswer }) => {
  return (
    <div className='mt-20 shadow-xl p-10'>
      <label className='text-base font-semibold text-gray-900'>
        {question.question}
      </label>
      {/* <p className="text-sm text-gray-500">How do you prefer to receive notifications?</p> */}
      <fieldset className='mt-4'>
        <legend className='sr-only'>Notification method</legend>
        <div className='space-y-4'>
          {question.options.map((option) => (
            <div key={option.id} className='flex items-center  '>
              <input
                id={option.id}
                name={question.id}
                value={option.title}
                type='radio'
                defaultChecked={option.id === question.options[0].id}
                onChange={(event) => {
                  handleAnswer(event);
                }}
                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
              />
              <label
                htmlFor={option.id}
                className='ml-3 block text-sm font-medium leading-6 text-gray-900'
              >
                {option.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default Question;
