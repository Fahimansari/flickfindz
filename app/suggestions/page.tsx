"use client"



const Suggestions = () => {
  const answers = JSON.parse(sessionStorage.getItem("answers") || "{}");

console.log("Answers in suggestions page:", answers);


  return (
    <div>Suggestions</div>
  )
}

export default Suggestions