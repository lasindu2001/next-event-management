"use client"

import { IEvent } from "@/lib/database/models/event.model"

type EventFormProps = {
    userId: string
    type: "Create" | "Update"
    event?: IEvent,
    eventId?: string
}

const EventForm = ({ userId, type, event, eventId }: EventFormProps) => {
    return (
        <div>EventForm</div>
    )
}

export default EventForm