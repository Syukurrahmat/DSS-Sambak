import {
	Badge,
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Center,
	Circle,
	Divider,
	Flex,
	HStack,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react';
import CardInfo from '../card/CardInfo';
import CardTHInfo from '../card/CardTHInfo';

import { useState } from 'react';
import Example from './mychart';
import { IconArrowBarToRight, IconMoodWrrr } from '@tabler/icons-react';

export default function Dashboard() {
	const [activeChart, setActiveChart] = useState(0);
	const parameter = [
		{ short: 'AQI', mean: 'Indeks Kualitas Udara' },
		{ short: 'CO2', mean: 'Karbon Dioksida' },
		{ short: 'CH4', mean: 'Metana' },
		{ short: 'PM', mean: 'Partikulat Matter' },
		{ short: 'Xixi', mean: 'Xiixix' },
		{ short: 'Suhu', mean: 'Suhu' },
		{ short: 'RH', mean: 'Kelembaban' },
	];

	return (
		<Box>
			<Flex justifyContent="space-between" gap="15px" mt="4" align="stretch">
				<CardInfo
					name="Metana"
					nameShort="CH4"
					value="344"
					unit="PPM"
					percenChange={1.34}
					isIncrease={true}
				/>
				<CardInfo
					name="Karbon Dioksida"
					nameShort="CH4"
					value="500"
					unit="PPM"
					percenChange={0.34}
					isIncrease={false}
				/>
				<CardInfo
					name="Partikulat Mater"
					nameShort="PM"
					value="23"
					unit="gr"
					percenChange={3.4}
					isIncrease={false}
				/>
				<CardTHInfo T={23.44} H={60.2} />
			</Flex>

			<Flex mt="4" gap="5">
				<Card size="sm" rounded="6" flexGrow={1} minH="400px">
					<CardHeader as={HStack} justify="space-between">
						<HStack>
							<Badge fontSize="md" variant="subtle" colorScheme="gray">
								{parameter[activeChart].short}
							</Badge>
							<Text fontWeight="500">{parameter[activeChart].mean}</Text>
						</HStack>
						<Button
							leftIcon={<IconArrowBarToRight size="14" />}
							size="xs"
							variant="outline"
						>
							Lihat Selengkapnya
						</Button>
					</CardHeader>

					<CardBody as={Box}>
						<Example />
					</CardBody>

					<Divider color="gray.300" />

					<CardFooter as={HStack} justifyContent="space-evenly">
						{parameter.map(({ short }, i) => (
							<Button
								key={i}
								isActive={activeChart == i}
								onClick={() => setActiveChart(i)}
								size="xs"
								variant="outline"
								colorScheme="teal"
							>
								{short}
							</Button>
						))}
					</CardFooter>
				</Card>
				<Card size="sm" rounded="6" w="250px">
					<CardBody as={VStack} py="6">
						<HStack mb="2">
							<Center
								bg="red.100"
								border="1px solid"
								p="2"
								rounded="lg"
								color="white"
							>
								<IconMoodWrrr size="50px" stroke="1.2" color="tomato" />
							</Center>
							<Box>
								<Text fontSize="sm" color="gray.500" lineHeight="1">
									Indeks Kualitas Udara
								</Text>
								<Text fontSize="4xl" lineHeight="1.2">
									{15}
								</Text>
							</Box>
						</HStack>
						<Text fontSize="lg" fontWeight="600" textAlign="center">
							Kualitas Udara Tidak Sehat{' '}
						</Text>
						<Box
							px="2"
							py="1"
							rounded="md"
							fontSize="sm"
							border="1px solid"
							borderColor="gray.300"
						>
							Pakai masker tepat, jaga kebersihan diri, dan konsultasi ke
							dokter jika ada gejala kesehatan.
						</Box>
						<Spacer />
						<Flex flexWrap="wrap" gap="2" justify="center">
							<Badge fontSize="md" colorScheme="green">
								CO2
							</Badge>
							<Badge fontSize="md" colorScheme="green">
								CH4
							</Badge>
							<Badge fontSize="md" colorScheme="red">
								PM
							</Badge>
							<Badge fontSize="md" colorScheme="red">
								Temp
							</Badge>
							<Badge fontSize="md" colorScheme="red">
								RH
							</Badge>
						</Flex>
						<HStack
							justifyContent="space-around"
							fontSize="sm"
							color="gray.600"
						>
							<HStack>
								<Circle bg="green.400" size="2" />
								<Text>Aman</Text>
							</HStack>
							<HStack>
								<Circle bg="red.400" size="2" />
								<Text>Tidak Aman</Text>
							</HStack>
						</HStack>
					</CardBody>
					<Divider borderColor="gray.400" />
					<CardFooter py='2'>
						<Button
							mx='auto'
							leftIcon={<IconArrowBarToRight size="14" />}
							size="sm"
							variant="outline"
						>
							Analisis Selengkapnya
						</Button>
					</CardFooter>
				</Card>
			</Flex>
		</Box>
	);
}
