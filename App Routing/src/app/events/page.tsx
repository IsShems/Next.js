'use client'

import { CustomButton } from "@/components/CustomButton";
import { CustomDiv } from "@/components/CustomDiv";
import { inter } from "@/fonts";
import { Event } from "@/types/Event";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { events } from "../../../data/events";
import { CustomInput } from "@/components/CustomInput";



export default function Events() {
    const router = useRouter()
    const [eventsData, setEventsData] = useState<Event[]>([])
    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            if (searchInput) {
                let response = await fetch(`/events/api?query=${searchInput}`)

                let events = await response.json()
                setEventsData(events)
            }
            else {
                let response = await fetch(`/events/api`)

                let events = await response.json()
                setEventsData(events)
            }
        }
        fetchData()
    }, [events, searchInput])


    const handleNavigateToAddEvent = () => {
        router.push("/events/add")
    }

    const handleChangeSearchInput = (search: string) => {
        setSearchInput(search)
    }

    return (
        <CustomDiv style={{ padding: 10 }} className={inter.className}>
            <CustomInput placeholder="Search" value={searchInput} onChange={(e) => handleChangeSearchInput(e.target.value)} />
            <CustomDiv >
                <CustomButton onClick={handleNavigateToAddEvent}>Add event</CustomButton>
            </CustomDiv>
            {eventsData.map((event) =>
            (
                <CustomDiv key={event.id}>
                    <Link href={`/events/${event.id}`}>{event.id}. {event.title}</Link>
                </CustomDiv>
            ))}
        </CustomDiv>
    )
}

