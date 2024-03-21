import { events } from "../../../data/events";
import { useRouter } from "next/router";
import styled from "styled-components";

const CustomButton = styled.button({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
})

const EventItem = styled.div({
    flexDirection: 'row',
    fontSize: 30,
    paddingBottom: 10,
})

export default function Events() {
    const router = useRouter()

    const navigateToDetails = (id: number) => {
        router.push(`/events/${id}`)
    }
    return (
        <div>
            {events.map((event) =>
            (
                <div key={event.id}>
                    <CustomButton onClick={() => navigateToDetails(event.id)}>
                        <EventItem>
                            <p>{event.id}. {event.title}</p>
                        </EventItem>
                    </CustomButton>
                </div>
            ))}
        </div>
    )
}
