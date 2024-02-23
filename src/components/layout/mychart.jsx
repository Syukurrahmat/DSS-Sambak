import React, { PureComponent } from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	AreaChart,
	Area,
} from 'recharts';

let data = [
	{ timestamp: new Date('2024-02-21 00:00:00').getTime(), value: 400 },
	{ timestamp: new Date('2024-02-21 00:05:00').getTime(), value: 380 },
	{ timestamp: new Date('2024-02-21 00:10:00').getTime(), value: 390 },
	{ timestamp: new Date('2024-02-21 00:15:00').getTime(), value: 410 },
	{ timestamp: new Date('2024-02-21 00:20:00').getTime(), value: 405 },
	{ timestamp: new Date('2024-02-21 00:25:00').getTime(), value: 395 },
	{ timestamp: new Date('2024-02-21 00:30:00').getTime(), value: 400 },
	{ timestamp: new Date('2024-02-21 00:35:00').getTime(), value: 385 },
	{ timestamp: new Date('2024-02-21 00:40:00').getTime(), value: 395 },
	{ timestamp: new Date('2024-02-21 00:45:00').getTime(), value: 700 },
	{ timestamp: new Date('2024-02-21 00:50:00').getTime(), value: 410 },
	{ timestamp: new Date('2024-02-21 00:55:00').getTime(), value: 400 },
	{ timestamp: new Date('2024-02-21 01:00:00').getTime(), value: 390 },
	{ timestamp: new Date('2024-02-21 01:05:00').getTime(), value: 380 },
	{ timestamp: new Date('2024-02-21 01:10:00').getTime(), value: 375 },
	{ timestamp: new Date('2024-02-21 01:15:00').getTime(), value: 385 },
	{ timestamp: new Date('2024-02-21 01:20:00').getTime(), value: 390 },
	{ timestamp: new Date('2024-02-21 01:25:00').getTime(), value: 395 },
	{ timestamp: new Date('2024-02-21 01:30:00').getTime(), value: 400 },
	{ timestamp: new Date('2024-02-21 01:35:00').getTime(), value: 405 },
	{ timestamp: new Date('2024-02-21 01:40:00').getTime(), value: 410 },
	{ timestamp: new Date('2024-02-21 01:45:00').getTime(), value: 200 },
	{ timestamp: new Date('2024-02-21 01:50:00').getTime(), value: 420 },
	{ timestamp: new Date('2024-02-21 01:55:00').getTime(), value: 415 },
	{ timestamp: new Date('2024-02-21 02:00:00').getTime(), value: 410 },
	{ timestamp: new Date('2024-02-21 02:05:00').getTime(), value: 405 },
	{ timestamp: new Date('2024-02-21 02:10:00').getTime(), value: 400 },
	{ timestamp: new Date('2024-02-21 02:15:00').getTime(), value: 395 },
	{ timestamp: new Date('2024-02-21 02:20:00').getTime(), value: 390 },
	{ timestamp: new Date('2024-02-21 02:30:00').getTime(), value: 385 },
	{ timestamp: new Date('2024-02-21 02:35:00').getTime(), value: 380 },
	{ timestamp: new Date('2024-02-21 02:40:00').getTime(), value: 375 },
	{ timestamp: new Date('2024-02-21 02:45:00').getTime(), value: 370 },
	{ timestamp: new Date('2024-02-21 02:50:00').getTime(), value: 365 },
	{ timestamp: new Date('2024-02-21 02:55:00').getTime(), value: 360 },
];

const timeFormater = (e) =>
	new Date(e).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});

export default function Example() {
	return (
		<ResponsiveContainer
			style={{ fontSize: '14px' }}
			width="100%"
			height="100%"
		>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					data={data}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="5 5" />
					<XAxis
						dataKey="timestamp"
						tickFormatter={timeFormater}
						scale="time"
						domain={['auto', 'auto']}
						type="number"
						minTickGap={20}
					/>
					<YAxis />
					<Tooltip
						formatter={(value, name, props) => [value, 'CO2']}
						labelFormatter={timeFormater}
						label="123"
					/>
					<Area
						type="monotone"
						dataKey="value"
						stroke="#64CCC5"
						fill="#D5F0C1"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</ResponsiveContainer>
	);
}
