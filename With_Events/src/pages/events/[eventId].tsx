import { CustomDiv } from "@/components/CustomDiv"
import { CustomImage } from "@/components/CustomImage"
import { inter } from "@/fonts"
import { useRouter } from "next/router"
import {Event} from "@/types/Event"

interface Props
{
    event: Event
}

export default function CarDetails({event}: Props)
{
    let router = useRouter()
    if (router.isFallback)
    {
        return <>Loading...</>
    }

    return (
        <CustomDiv className={inter.className} >
            <h1>{event.name} </h1>
            <br/>
            {event.url ? <CustomImage src={event.url}/>: <></>}
            <p>Category: {event.type}</p>
        </CustomDiv>
    )
}

export function getStaticPaths()
{
    return {
        paths: [
            {
                params: {
                    eventId: '1'
                }
            },
        ],
        fallback: true
    }
}


export async function getStaticProps(context: any)
{
    const {
        params: {eventId}
    } = context
    const response = await fetch(`http://localhost:3000/events/${eventId}`)
   
    let event = await response.json()

    return {
        props:
        {
            event: event
        }
    }
}