import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailsPage, {
    loader as eventDetailLoader,
    action as eventDetailAction,
} from "./pages/EventDetails";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/RootLayout";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "events",
                element: <EventsRootLayout />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        loader: eventsLoader,
                    },
                    {
                        path: "new",
                        element: <NewEventPage />,
                        action: newEventAction,
                    },
                    {
                        path: ":eventId",
                        id: "event-detail",
                        loader: eventDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailsPage />,
                                action: eventDetailAction,
                            },
                            { path: "edit", element: <EditEventPage /> },
                        ],
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
