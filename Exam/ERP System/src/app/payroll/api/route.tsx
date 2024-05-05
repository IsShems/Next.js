import { NextRequest, NextResponse } from "next/server"
import { users } from "@/data/users"
export async function GET(request: NextRequest, { params }: any) {
    return NextResponse.json(users)
}

