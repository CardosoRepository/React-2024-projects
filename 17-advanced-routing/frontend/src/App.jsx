import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
    { 
        path: '/', 
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/events', element: <EventsPage /> },
            { path: '/events/:eventId', element: <EventDetailsPage /> },
            { path: '/events/new', element: <NewEventPage /> },
            { path: '/events/:eventId/edit', element: <EditEventPage /> },
        ] },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
