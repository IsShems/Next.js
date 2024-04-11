'use client'


import { CustomButton } from "@/components/CustomButton"
import { CustomDiv } from "@/components/CustomDiv"
import { CustomInput } from "@/components/CustomInput"
import { inter } from "@/fonts"
import type { Event as EventType }  from "@/types/Event"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Props {
    params:
    {
        eventId: string
    }
}

export default function Event({ params }: Props) {

    const router = useRouter()
    const { eventId } = params
    const [eventData, setEventData] = useState({ id: 0, title: "", description: "" })

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(`/events/${eventId}/api`)
            console.log(response);

            let event = await response.json()
            setEventData(event)
        }
        fetchData()
    }, [eventId])

    const handleChangeTitle = (title: string) => {
        setEventData(prev => (
            { ...prev, title: title }
        ))
    }
    const handleChangeDescription = (description: string) => {
        setEventData(prev => (
            { ...prev, description: description }
        ))
    }

    const updateEvent = async () => {
        if (eventData.title && eventData.description) {
            let response = await fetch(`/events/${eventId}/api`, {
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(eventData)
            })

            let event = await response.json()
            setEventData(event)
        }
        else {
            alert("Fields can't empty")
        }
    }

    const deleteEvent = async () => {
        await fetch(`/events/${eventId}/api`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json',
            }
        })
        handleGoBack()
    }

    const handleGoBack = () => {
        router.back()
    }
    return (
        <CustomDiv style={{ padding: 10 }} className={inter.className}>
            <CustomButton onClick={handleGoBack}>Go Back</CustomButton>
            <p>Title: </p>
            <CustomInput onChange={(e) => handleChangeTitle(e.target.value)} value={eventData.title} />
            <p>Description:</p>
            <CustomInput onChange={(e) => handleChangeDescription(e.target.value)} value={eventData.description} />
            <CustomButton onClick={updateEvent}>Update event</CustomButton>
            <CustomButton onClick={deleteEvent}>Delete event</CustomButton>
        </CustomDiv>
    )
}


