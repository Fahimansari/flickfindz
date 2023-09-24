import { db } from "@/firebase/firebaseConfig";
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { NextResponse } from "next/server";

export async function GET() {
    
    console.log(db);
    
    const response = await setDoc(doc(db, "movies", "samp_q2"), {
        name: 'Sample movie',
        imageURL: 'Sample URL', 
        description: "Sample Description"
    }).then((res) => {
        console.log(`This is the then block`)
        console.log(res)
    })


    const moviesRef = collection(db, "movies")
    const q = query(moviesRef, where("name" , "!=", "Sah"))

    const qSnap = await getDocs(q)
    qSnap.forEach((doc) => {
        console.log(`${doc.id}  => ${doc.data()}`)
    })
    
    

    // const getResponse = await getDoc(doc(db,"movies", "samp_ff")).then((res) => {
    //     console.log(res.data);
        
    // })
    // console.log(response);
    
    return NextResponse.json({success: 'This is a success message'})

    // db.settings({timeStampInSnapshots: true})

}