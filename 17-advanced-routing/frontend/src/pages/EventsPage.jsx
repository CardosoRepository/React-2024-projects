import { useEffect, useState } from "react";
import EventsList from "../components/EventsList";

function EventsPage() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        async function fetchAllEvents() {
            const response = await fetch("http://localhost:8080/events");

            if (!response.ok) {
                throw new Error("Failed to fetch events.");
            }

            const resData = await response.json();
            setEvents(resData.events);
        }

        fetchAllEvents();
    }, []);

    return <EventsList events={events}></EventsList>;
}

export default EventsPage;
