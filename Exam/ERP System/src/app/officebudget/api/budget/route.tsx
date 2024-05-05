import { budgets } from "@/data/budget"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    return NextResponse.json(budgets)

}