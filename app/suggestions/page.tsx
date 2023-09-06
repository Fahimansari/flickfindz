"use client"
const answers = JSON.parse(sessionStorage.getItem("answers") || "{}");

const Suggestions = () => {

console.log("Answers in suggestions page:", answers);


  return (
    <div>Suggestions</div>
  )
}

export default Suggestions