'use client'

import { CustomButton } from "@/components/CustomButton";
import { CustomDiv } from "@/components/CustomDiv";
import { CustomInput } from "@/components/CustomInput";
import { inter } from "@/fonts";
import { Event } from "@/types/Event";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function AddEvent() {
    const router = useRouter()
    const [eventData, setEventData] = useState<Event>({ id: 0, title: "", description: ""});

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

    const handleAddEvent = async () => {
        if (eventData.title && eventData.description) {
            await fetch(`/events/api`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(eventData)
            })
            router.back()
        }
        else {
            alert("Field's can't be empty")
        }

    }

    return (
        <CustomDiv style={{ padding: 10 }} className={inter.className}>
            <p>Title: </p>
            <CustomInput onChange={(e) => handleChangeTitle(e.target.value)} value={eventData.title} />
            <p>Description:</p>
            <CustomInput onChange={(e) => handleChangeDescription(e.target.value)} value={eventData.description} />
            <CustomButton onClick={handleAddEvent}>Add event</CustomButton>
        </CustomDiv>
    )

}