import {createBrowserRouter} from "react-router";
import MainLayout from "../Layout/MainLayout.jsx";
import Homepage from "../Pages/HomePage/Homepage.jsx";
import FriendsDetails from "../Pages/FriendsDetails/FriendsDetails.jsx";
import Timeline from "../Pages/Timeline/Timeline.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import Stats from "../Pages/Stats/Stats.jsx";

// Central app routes: home, timeline, stats, and dynamic friend details page.
export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: 'timeline',
                Component: Timeline,
            },
            {
                path: 'stats',
                Component: Stats,
            },
            {
                path: 'friendsdetails/:id',
                Component: FriendsDetails,
                // Load the shared friend dataset before rendering a details page.
                loader: () => fetch("/FriendsData.json")
            },
            {
                path: '*',
                Component: ErrorPage,
            },
        ]

    }
])
