import {
	Badge,
	Card,
	CardBody,
	CardHeader,
	Flex,
	HStack,
	Spacer,
	Stat,
	StatArrow,
	StatHelpText,
	StatLabel,
	StatNumber,
	Text,
} from '@chakra-ui/react';

export default function CardInfo({
	name,
	nameShort,
	value,
	unit,
	percenChange,
	isIncrease,
}) {
	return (
		<Stat as={Card} px="3" py="2.5">
			<HStack justify="space-between">
				<StatLabel fontSize="md">{name}</StatLabel>
				<Badge fontSize="md" variant="subtle" colorScheme="gray">
					{nameShort}
				</Badge>
			</HStack>
			<HStack align="baseline" spacing="1">
				<StatNumber fontSize="3xl">{value}</StatNumber>
				<Text fontWeight="500">{unit}</Text>
				<Spacer />
				<StatHelpText>
					<StatArrow type={isIncrease ? 'increase' : 'decrease'} />
					{percenChange.toFixed(2) + "%"}
				</StatHelpText>
			</HStack>
		</Stat>
	);
}
