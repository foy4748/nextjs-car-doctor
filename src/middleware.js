import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async (req) => {

    const token = await getToken({ req })

    if (token) {

        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL('/login', req.url))
    }

}

export const config = {
    matcher: [
        '/my-bookings',
        '/my-bookings/:path*',
        "/checkout/:path*"
    ],
}