import { Box, Container, Flex } from '@chakra-ui/react';
import Sidebar from './components/layout/sidebar';
import Dashboard from './components/layout/dashboard';
import Header from './components/layout/header';

export default function App() {
	return (
		<Container bg="#F4F5F7" as={Flex} maxWidth="full" p="0">
			<Sidebar />
			<Box p="20px" flexGrow="1">
				<Header />
				{/*  */}
				<Dashboard />
				{/*  */}
			</Box>
		</Container>
	);
}
