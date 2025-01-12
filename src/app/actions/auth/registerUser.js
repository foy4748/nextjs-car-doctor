"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    const userCollection = dbConnect(collectionNamesObj.userCollection)

    // Validation
    const { email, password } = payload;
    if (!email || !password) return { success: false };

    const user = await userCollection.findOne({ email: payload.email })

    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10)
        payload.password = hashedPassword
        const result = await userCollection.insertOne(payload);
        const { acknowledged, insertedId } = result;
        return { acknowledged, insertedId };
    }
    return { success: false };


}