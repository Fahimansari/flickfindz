import axios from "axios";

const PORT = process.env.PORT

export async function GET(request: Request ) {

    const response = await axios.get(`http://localhost:${PORT}/api/hello`)
    console.log(response.data);
    

    return new Response('Success')
}