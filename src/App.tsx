import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import './App.scss';
import { useAuthStore } from "./features/auth/auth.store";

export default function App() {
	const restore = useAuthStore((state) => state.restore);
	const { pathname } = useLocation();
  useEffect(() => {
    restore(); 
  }, []);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
			<Outlet />
		</MantineProvider>
	);
}
