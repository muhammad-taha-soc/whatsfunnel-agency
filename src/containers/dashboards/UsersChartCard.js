/* eslint-disable */
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { FaCaretUp } from 'react-icons/fa';

const dailyData = [
  { day: 'Mon', users: 600 },
  { day: 'Tue', users: 800 },
  { day: 'Wed', users: 750 },
  { day: 'Thu', users: 480 },
  { day: 'Fri', users: 1020 },
  { day: 'Sat', users: 900 },
  { day: 'Sun', users: 650 }
];

const weeklyData = [
  { week: 'Week 1', users: 3500 },
  { week: 'Week 2', users: 6200 },
  { week: 'Week 3', users: 2800 },
  { week: 'Week 4', users: 7500 }
];


const monthlyData = [
  { month: 'Jan', users: 45000 },
  { month: 'Feb', users: 18000 },
  { month: 'Mar', users: 36500 },
  { month: 'Apr', users: 29000 },
  { month: 'May', users: 51000 },
  { month: 'Jun', users: 20000 },
  { month: 'Jul', users: 70000 },
  { month: 'Aug', users: 20310 },
  { month: 'Sep', users: 35000 },
  { month: 'Oct', users: 40020 },
  { month: 'Nov', users: 38250 },
  { month: 'Dec', users: 41000 },
];

const yearlyData = [
  { year: '2018', users: 180000 },
  { year: '2019', users: 220000 },
  { year: '2020', users: 250000 },
  { year: '2021', users: 310000 },
  { year: '2022', users: 350000 }
];

export default function Component() {
  const [interval, setInterval] = useState('Weekly');
  const [chartData, setChartData] = useState(weeklyData);
  const [hoveredItem, setHoveredItem] = useState(null);

  const totalUsers = 26201;
  const percentageIncrease = 10;

  const handleIntervalChange = (selectedInterval) => {
    setInterval(selectedInterval);
    switch (selectedInterval) {
      case 'Daily':
        setChartData(dailyData);
        break;
      case 'Weekly':
        setChartData(weeklyData);
        break;
      case 'Monthly':
        setChartData(monthlyData);
        break;
      case 'Yearly':
        setChartData(yearlyData);
        break;
      default:
        setChartData(weeklyData);
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: '#0D0D26',
          padding: '8px 12px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#0062FF'
          }} />
          <div style={{
            color: '#fff',
            fontSize: '12px'
          }}>
            <span style={{ fontWeight: 400 }}>{label}</span>
            <span style={{ margin: '0 4px' }}>:</span>
            <span style={{ fontWeight: 600 }}>{payload[0].value}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        marginBottom: '32px'
      }}>
        <div>
          <div style={{
            fontSize: '24px',
            fontWeight: 500,
            color: '#0D0D26',
            marginBottom: '6px'
          }}>
            Users
          </div>
          <div style={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#86868A',
          }}>
            In Total
          </div>
          <div style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#111827',
            display: 'flex',
            alignItems: 'center'
          }}>
            {totalUsers.toLocaleString()}
            <span style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#069A6E',
              marginLeft: '5px',
              display: 'flex',
              alignItems: 'center',
              gap: '2px'
            }}>
              +{percentageIncrease}%
              <FaCaretUp size={14} />
            </span>
          </div>
        </div>
        <div style={{
          borderRadius: '100px',
          display: 'flex',
          gap: '12px',
          backgroundColor: '#F8F9FB',
        }}>
          {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((item) => (
            <button
              key={item}
              onClick={() => handleIntervalChange(item)}
              style={{
                padding: '6px 12px',
                borderRadius: '100px',
                backgroundColor: interval === item ? '#FFFFFF' : 'transparent',
                color: interval === item ? '#0DAC8A' : '#86868A',
                fontSize: '14px',
                fontWeight: interval === item ? 600 : 500,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div style={{
        height: '240px',
        width: '100%',
        paddingLeft: '16px'
      }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }} onMouseMove={(e) => {
            if (e && e.activeTooltipIndex !== undefined && chartData[e.activeTooltipIndex]) {
              const key = interval === 'Daily' ? 'day' : interval === 'Weekly' ? 'week' : interval === 'Monthly' ? 'month' : 'year';
              setHoveredItem(chartData[e.activeTooltipIndex][key]);
            }
          }}
            onMouseLeave={() => setHoveredItem(null)} mouseMoveThrottleTime={50}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0062FF" stopOpacity={0.08} />
                <stop offset="95%" stopColor="#0062FF" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              horizontal={true}
              vertical={false}
              strokeDasharray="4 4"
              stroke="#E2E8F0"
            />
            <XAxis
              dataKey={interval === 'Daily' ? 'day' : interval === 'Weekly' ? 'week' : interval === 'Monthly' ? 'month' : 'year'}
              axisLine={false}
              tickLine={false}
              fontSize={12}
              tick={({ x, y, payload }) => (
                <text
                  x={x}
                  y={y}
                  dy={10}
                  textAnchor="middle"
                  fill={hoveredItem === payload.value ? '#0062FF' : '#86868A'}
                  style={{ fontWeight: 400, fontSize: '12px' }}
                >
                  {payload.value}
                </text>
              )}
              padding={{ left: 40, right: 40 }}
              interval={0}
              domain={['dataMin', 'dataMax']}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              fontSize={12}
              tick={{ fill: '#86868A', fontWeight: 400, fontSize: '12px' }}
              tickCount={6}
              width={40}
              dx={-10}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: '#0062FF',
                strokeWidth: 1,
                strokeDasharray: '4 4'
              }}
            />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#0062FF"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorUsers)"
              dot={false}
              activeDot={{
                r: 6,
                fill: '#0062FF',
                stroke: '#fff',
                strokeWidth: 3
              }}
              onMouseMove={(data) => {
                if (data && data.activePayload && data.activePayload.length > 0) {
                  const key = interval === 'Daily' ? 'day' : interval === 'Weekly' ? 'week' : interval === 'Monthly' ? 'month' : 'year';
                  setHoveredItem(data.activePayload[0].payload[key]);
                }
              }}
              onMouseLeave={() => setHoveredItem(null)}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}