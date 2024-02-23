import {
	Badge,
	Box,
	Card,
	CardBody,
	CardHeader,
	Center,
	Flex,
	HStack,
	Spacer,
	Stat,
	StatArrow,
	StatHelpText,
	StatLabel,
	StatNumber,
	Text,
	VStack,
} from '@chakra-ui/react';
import { IconPercentage, IconTemperature } from '@tabler/icons-react';

export default function CardTHInfo({ T, H }) {
	return (
		<Card px="3" py="2.5">
			<HStack spacing="6" align="center" h="full">
				<Stat>
					<HStack>
						<Box aspectRatio="1" p="1" bg="gray.100" rounded="6px">
							<IconTemperature size="30px" />
						</Box>
						<StatNumber fontSize="2xl">{Math.round(T) + '°C'}</StatNumber>
					</HStack>
					<StatLabel mt="1" textAlign="center" fontSize="sm">
						Temperatur
					</StatLabel>
				</Stat>
				<Stat>
					<HStack>
						<Box aspectRatio="1" p="1" bg="gray.100" rounded="6px">
							<IconPercentage size="30px" />
						</Box>
						<StatNumber fontSize="2xl">{Math.round(H) + '%'}</StatNumber>
					</HStack>
					<StatLabel mt="1" textAlign="center" fontSize="sm">
						Kelembaban
					</StatLabel>
				</Stat>
			</HStack>
		</Card>
	);
}
