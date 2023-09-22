import { NextResponse } from "next/server";


export async function GET() {

    // Logic to get TMDB data should go here
    
return NextResponse.json({message: 'This is a success message from TMDBData'})
}