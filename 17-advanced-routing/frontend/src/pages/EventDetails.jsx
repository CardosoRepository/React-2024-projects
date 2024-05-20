import {
    Await,
    defer,
    json,
    redirect,
    useRouteLoaderData,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventDetailsPage() {
    const { event, events } = useRouteLoaderData("event-detail");

    return (
        <>
            <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
            >
                <Await resolve={event}>
                    {(loadedEvent) => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
            >
                <Await resolve={events}>
                    {(loadedEvent) => <EventsList events={loadedEvent} />}
                </Await>
            </Suspense>
        </>
    );
}

export default EventDetailsPage;

export async function loadEvent(id) {
    const response = await fetch("http://localhost:8080/events/" + id);

    if (!response.ok) {
        throw json(
            { message: "Could not fetch details for seleted event." },
            { status: 500 }
        );
    }
    const resData = await response.json();
    return resData.event;
}

export async function loadEvents() {
    const response = await fetch("http://localhost:8080/events/");

    if (!response.ok) {
        throw json({ message: "Could not fetch events." }, { status: 500 });
    }

    const resData = await response.json();
    return resData.events;
}

export async function loader({ request, params }) {
    const id = params.eventId;
    return defer({ event: await loadEvent(id), events: loadEvents() });
}

export async function action({ params, request }) {
    const eventId = params.eventId;
    const response = await fetch("http://localhost:8080/events/" + eventId, {
        method: request.method,
    });

    if (!response.ok) {
        throw json({ message: "Could not delete event." }, { status: 500 });
    }

    return redirect("/events");
}
