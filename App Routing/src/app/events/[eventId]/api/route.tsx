import { NextRequest, NextResponse } from "next/server"
import { events} from "../../../../../data/events"

export async function GET(request: NextRequest, { params }: any) {
   
    let event = events.find((event) => event.id === Number(params.eventId))
    
    return NextResponse.json(event)
}


export async function PUT(request: NextRequest, { params }: any) {
   
    const event = await request.json()
    console.log(event)
    let eventIndex = events.findIndex((event) => event.id === Number(params.eventId))

    events[eventIndex] = event
    
    return NextResponse.json(event)
}


export async function DELETE(request: NextRequest, { params }: any) {
   
    let eventIndex = events.findIndex((event) => event.id === Number(params.eventId))

    events.splice(eventIndex, 1)
    
    return NextResponse.json(events)
}
