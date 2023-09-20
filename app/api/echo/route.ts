import { NextResponse } from 'next/server';

const OPENAI_KEY = process.env.OPENAI_API_KEY

export async function GET(request:Request) {
    console.log(request);
    const samp_res = request.body
    const {searchParams} = new URL(request.url)

    console.log(OPENAI_KEY)
    console.log(searchParams);

    return NextResponse.json({samp_res})

    
}

export async function POST(request:Request) {
    // const data = await request.json()
   
    // const data_body = await request.body;
    const data_form = await request.formData()
    const  parsedData = data_form.get('test')
    
    // const parsedDataAll = data_form.forEach((data) => {
    //     console.log(data);
        
    // })


    const parsedDataAll = data_form.entries()
    // console.log(parsedDataAll);
    
    for (var pair of data_form.entries()) {
        console.log("Key: " + pair[0] + ", Value: " + pair[1]);
      }


    // for (const [key, value] of parsedDataAll) {
    //     console.log(`Key: ${key}, Value: ${value}`);
    //   }

    // console.log(parsedData);

    // console.log(parsedDataAll);

    
    console.log(data_form);
    
    

    
   
    // console.log(OPENAI_KEY);
    // console.log(data);
    
    // console.log(request);
    
    const form_data = new FormData()
    const {searchParams} = new URL(request.url)
    console.log(searchParams);

    return NextResponse.json(data_form)
    

    
}
