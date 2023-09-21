import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

interface Movie {
    movieGenre: string;
    movieSetting: string;
    moviePace: string;
    movieTone: string;
    movieRating: string; // Example type, use the appropriate type for your use case
    movieStory: string;
}

const prompt: string = 'Give me something back'



export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url)
    let params: { [key: string]: string } = {}

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

    console.log(response.choices[0].text);
    
    searchParams.forEach((value, key) => {
        params[key] = value;
    })



    return NextResponse.json({text: response.choices[0].text})
}
