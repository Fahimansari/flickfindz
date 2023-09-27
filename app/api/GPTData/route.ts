import { user_input_combinations } from "@/constants/answer_combinations";
import { ResponseArray } from '@/lib/types';
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export async function GET(request: NextRequest) {

    let responseArray: ResponseArray[] = []



    for (let i = 0; i < user_input_combinations.length; i++) {
        console.log(user_input_combinations[i])


        const prompt: string = `Give me a list of 6 movies with preferred genres as ${user_input_combinations[i][0]}, preferred movie setting as ${user_input_combinations[i][1]}, pace of movie as ${user_input_combinations[i][2]}, preferred movie tone as ${user_input_combinations[i][3]} and show these as an array. The response should be strictly an array of 3 movies without any others characters or numberings. For example, ['Batman', 'The Matrix', 'John Wick', 'Captain America', 'Batman Return', Spiderman']`     // replace this with the client entry about the film
        const openai = new OpenAI({
            apiKey: OPENAI_API_KEY
        })

        await openai.completions.create({
            model: 'text-davinci-003',
            prompt: prompt,
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }).then((res) => {

            responseArray.push({ combination: user_input_combinations[i], movieNames: res.choices[0].text })
            // console.log(responseArray)
        }).catch((err) => {
            console.log(err)
        })
    }


    return NextResponse.json({ data: responseArray })
}
