import {
	Box,
	Button,
	Center,
	Divider,
	HStack,
	Heading,
	Image,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react';
import webIcon from '../../assets/icon.svg';
import {
	IconAnalyze,
	IconCaretLeft,
	IconCaretRight,
	IconDashboard,
	IconDatabase,
	IconLogout,
	IconMapPin,
	IconReport,
	IconReportAnalytics,
	IconWashDryDip,
} from '@tabler/icons-react';
import { useState } from 'react';

const SidebarButton = ({ Icon, ...children }) => (
	<Button
		variant="ghost"
		color={children.isActive ? 'gray.900' : 'gray.600'}
		justifyContent="start"
		borderRightRadius="full"
		pl="20px"
		gap="1.5"
		colorScheme="orange"
		leftIcon={Icon}
		{...children}
	/>
);

export default function Sidebar() {
	const [activeTab, setActiveTab] = useState(0);
	const tabList = [
		{ Icon: IconDashboard, label: 'Dashboard' },
		{ Icon: IconAnalyze, label: 'Analisis' },
		{ Icon: IconDatabase, label: 'Data' },
		{ Icon: IconReportAnalytics, label: 'Laporan' },
	];

	return (
		<VStack
			py="5"
			align="stretch"
			maxW="240px"
			h="100%"
			minH="100vh"
			bg="gray.100"
		>
			<Box px="5" mb="2">
				<HStack spacing="3">
					<Image src={webIcon} h="36px" />
					<Heading size="lg">DSS xixixi</Heading>
				</HStack>
				<Text fontSize="sm" lineHeight="1.2" mt="2" color="gray.500">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				</Text>
			</Box>
			<Box mx="5" mb="3">
				<Divider borderColor="gray.400" />
			</Box>

			<VStack align="stretch" pr="5">
				{tabList.map(({ Icon, label }, i) => (
					<SidebarButton
						key={i}
						onClick={() => setActiveTab(i)}
						isActive={activeTab == i}
						Icon={<Icon />}
					>
						{label}
					</SidebarButton>
				))}
			</VStack>

			<Spacer />

			<HStack px="5" mb="4" spacing="4" color="gray.700" align="start">
				<Center boxSize="24px" pt="1.5">
					<IconMapPin />
				</Center>
				<Box>
					<Text fontSize="sm" fontWeight="700">
						Titik 1
					</Text>
					<Text fontSize="xs" noOfLines={2} fontWeight="400">
						Karang Talun, Kec. Tanon, Kabupaten Sragen, Jawa Tengah
					</Text>
					<Button
						mt="2"
						variant="outline"
						colorScheme="gray"
						bg="white"
						size="xs"
					>
						Selengkapnya
					</Button>
				</Box>
			</HStack>

			<Box mx="5">
				<Divider borderColor="gray.400" />
			</Box>
			<Box pr="5">
				<SidebarButton w="full" Icon={<IconLogout />}>
					Logout
				</SidebarButton>
			</Box>
		</VStack>
	);
}
