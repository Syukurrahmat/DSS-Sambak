import {
	Avatar,
	Box,
	Button,
	HStack,
	Heading,
	Spacer,
	Text,
} from '@chakra-ui/react';
import { IconHistory } from '@tabler/icons-react';

export default function Header() {
	return (
		<HStack align="start">
			<Box>
				<Heading size="lg" mb="4px">
					DASHBOARD
				</Heading>
				<Text fontSize="sm" color="gray.500">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Corporis, iusto
				</Text>
			</Box>

			<Spacer />

			<HStack>
				<HStack fontSize='sm' boxShadow='xs' h='7' p='2' rounded='md' align='center'>
					<IconHistory size='18px' />
					<Text fontWeight='600' >Diperbarui 1 menit yang lalu</Text>
				</HStack>
				<Button size="sm" variant="ghost">
					<Avatar
						size="sm"
						name="Dan Abrahmov"
						src="https://bit.ly/dan-abramov"
						mr="2.5"
					/>
					<Text>Dan Abrahmov</Text>
				</Button>
			</HStack>
		</HStack>
	);
}
