import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server"

export const POST = async (req) => {

    const body = await req.json();
    const bookingCollection = dbConnect(collectionNamesObj.bookingCollection)
    const result = await bookingCollection.insertOne(body)

    return NextResponse.json(result)
}