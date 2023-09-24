import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
// const PORT = 

export async function GET(request: NextRequest) {


    const { searchParams } = new URL(request.url)
    let params: { [key: string]: string } = {}
    searchParams.forEach((value, key) => {
        params[key] = value;
    })

    const prompt: string = `Give me a list of 3 movie genres as ${params.movieGenre}, preferred movie setting as ${params.movieSetting}, pace of movie as ${params.moviePace}, preferred movie tone as ${params.movieTone}, preferred parental guidance as ${params.movieRating}, preferred movie story line as ${params.movieStory} and show these as an array. The response should be strictly an array of 3 movies without any others characters or numberings. For example, ['Batman', 'The Matrix', 'John Wick']`     // replace this with the client entry about the film

    const openai = new OpenAI({
        apiKey: OPENAI_API_KEY
    })


    const response = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: prompt,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,

    })


    const cleanedResponse = JSON.parse(response.choices[0].text.replace(/[^\w\s,]/g, ''));
    const stringified = JSON.stringify(response.choices[0].text)
    const parsedString = JSON.parse(stringified)
    // const parsedArray = JSON.parse(parsedString)
    console.log(response.choices[0].text);




    // console.log(typeof(parsedString))
    console.log(params);



    return NextResponse.json(parsedString)
}
