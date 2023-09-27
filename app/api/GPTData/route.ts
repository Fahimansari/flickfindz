import { user_input_combinations } from "@/constants/answer_combinations";
import { ResponseArray } from '@/lib/types';
import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
// const PORT = 

export async function GET(request: NextRequest) {


    // console.log(user_input_combinations[0][0])





    let responseArray: ResponseArray[] = []
    
    // const prompt: string = `Give me a list of 3 movie with preferred genres as ${user_input_combinations[0][0]}, preferred movie setting as ${user_input_combinations[0][1]}, pace of movie as ${user_input_combinations[0][2]}, preferred movie tone as ${user_input_combinations[0][3]} and show these as an array. The response should be strictly an array of 3 movies without any others characters or numberings. For example, ['Batman', 'The Matrix', 'John Wick']`     // replace this with the client entry about the film
    
    // const openai = new OpenAI({
    //     apiKey: OPENAI_API_KEY
    // })
    // const response = await openai.completions.create({
    //     model: 'text-davinci-003',
    //     prompt: prompt,
    //     temperature: 1,
    //     max_tokens: 256,
    //     top_p: 1,
    //     frequency_penalty: 0,
    //     presence_penalty: 0,
    // }).then((res) => {

    //     responseArray.push({ combination: user_input_combinations[0], movieNames: res.choices[0].text })
    // }).catch((err) => {
    //     console.log(err)
    // })



    for (const combination in user_input_combinations) {
   
     
            const prompt: string = `Give me a list of 3 movie with preferred genres as ${combination[0]}, preferred movie setting as ${combination[1]}, pace of movie as ${combination[2]}, preferred movie tone as ${combination[3]} and show these as an array. The response should be strictly an array of 3 movies without any others characters or numberings. For example, ['Batman', 'The Matrix', 'John Wick']`     // replace this with the client entry about the film

        console.log(`I am here`);

        console.log(combination[0]);
        
        
        // const openai = new OpenAI({
        //     apiKey: OPENAI_API_KEY
        // })
        // const response = await openai.completions.create({
        //     model: 'text-davinci-003',
        //     prompt: prompt,
        //     temperature: 1,
        //     max_tokens: 256,
        //     top_p: 1,
        //     frequency_penalty: 0,
        //     presence_penalty: 0,
        // }).then((res) => {

        //     responseArray.push({ combination: ['Hy'], movieNames: res.choices[0].text })
        // }).catch((err) => {
        //     console.log(err)
        // })
        // console.log(combination)
    }





    // console.log(response.choices[0].text);




    // console.log(typeof(parsedString))
    // console.log(params);



    return NextResponse.json({data: responseArray})
}
