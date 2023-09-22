import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
// const PORT = 

export async function GET(request: NextRequest) {
    
    const prompt: string = 'Give me something back'     // replace this with the client entry about the film



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

    console.log(params);
    


    return NextResponse.json({text: response.choices[0].text})
}
