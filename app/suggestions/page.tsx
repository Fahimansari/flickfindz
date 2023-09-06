"use client"



const Suggestions = () => {

  if (typeof window !== "undefined")  {

    const answers = JSON.parse(sessionStorage.getItem("answers") || "{}");
    console.log("Answers in suggestions page:", answers);
  }



  return (
    <div>Suggestions</div>
  )
}

export default Suggestions