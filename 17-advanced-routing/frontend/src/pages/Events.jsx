import { json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
    return <EventsList />;
}

export default EventsPage;

export async function loader() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        // return {isError: true, message: 'Could not fetch events.'}; // Alternative to return error]

        // A second alternative to return error data
        // throw new Response(
        //     JSON.stringify({ message: "Could not fetch events." }),
        //     { status: 500 }
        // );

        throw json({ message: "Could not fetch events." }, { status: 500 });
    }
    
    return response;
}
