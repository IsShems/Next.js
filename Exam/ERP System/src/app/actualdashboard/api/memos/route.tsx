import { memos } from "@/data/memo"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    return NextResponse.json(memos)

}