import { useParams } from "react-router-dom";

function EventDetailsPage() {
    const params = useParams();
    return (
        <p>Event Detail Page - {params.eventId}</p>
    )
}

export default EventDetailsPage;