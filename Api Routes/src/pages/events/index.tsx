import { CustomButton } from "@/components/CustomButton";
import { CustomDiv } from "@/components/CustomDiv";
import { inter } from "@/fonts";
import { Event } from "@/types/Event";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
    events: Event[]
}

export default function Events({ events }: Props) {
    const router = useRouter()
    const [eventsData, setEventsData] = useState<Event[]>(events)


    const fetchAll = async () => {
        const response = await fetch("http://localhost:3000/api/events")
        const events = await response.json()

        setEventsData(events)
    }

    const handleNavigateToAddEvent = () => 
    {
        router.push("/events/add")
    }


    return (
        <CustomDiv style={{ padding: 10 }} className={inter.className}>
            <CustomDiv >
                 <CustomButton onClick={fetchAll}>Get All Events</CustomButton>
                 <CustomButton onClick={handleNavigateToAddEvent}>Add event</CustomButton>
            </CustomDiv>
            {eventsData.map((event) =>
            (
                <CustomDiv key={event.id}>
                    <Link href={`/events/${event.id}`}>{event.title}</Link>
                </CustomDiv>
            ))}
        </CustomDiv>
    )
}


export async function getServerSideProps() {
    const response = await fetch("http://localhost:3000/api/events")
    const events = await response.json()

    return {
        props:
        {
            events: events
        }
    }

}