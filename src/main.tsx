import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import Landing from './pages/landing/Landing';
import LaunchListPage from "./pages/launches/LaunchListPage";
import LaunchDetailPage from "./pages/launches/LaunchDetailPage";
import ProtectedRoute from "./routes/Protected";
import LoginPage from './pages/LoginPage/LoginPage';
import PublicRoute from './routes/PublicRoute';

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Landing /> },

      {
        element: <PublicRoute />, 
        children: [{ path: "login", element: <LoginPage /> }],
      },

      {
        element: <ProtectedRoute />,
        children: [
          { path: "launches", element: <LaunchListPage /> },
          { path: "launches/:id", element: <LaunchDetailPage /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			cacheTime: 1000 * 60 * 15
		}
	}
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>
);
