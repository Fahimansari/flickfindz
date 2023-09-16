import { NextResponse } from 'next/server';

export async function GET(request:Request) {
    console.log(request);
    const samp_res = request.body
    const {searchParams} = new URL(request.url)
    console.log(searchParams);

    return NextResponse.json({samp_res})

    
}

export async function POST(request:Request) {
    // const data = await request.formData()
    const data = await request.json()
    console.log(data);
    
    const samp_res = request.body
    const {searchParams} = new URL(request.url)
    console.log(searchParams);

    return NextResponse.json({samp_res})

    
}