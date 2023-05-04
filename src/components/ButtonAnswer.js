const ButtonAnswer = ({ children, answerState, ...rest}) => (
  <button
    className={`
      w-full h-full
      text-lg uppercase font-bold
      hover:text-slate-600
      bg-white dark:bg-slate-500 hover:bg-yellow-300 data-[answer-state=right]:bg-green-300 data-[answer-state=wrong]:bg-red-300
      border-4 border-cyan-300 hover:border-yellow-500 data-[answer-state=right]:border-green-500 data-[answer-state=wrong]:border-red-500
      p-16 rounded
    `}
    {...rest}
    data-answer-state={answerState}
  >
    { children }
  </button>
);

export default ButtonAnswer;