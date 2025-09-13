"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

type Props = {
  sectionId: string;
};

export const SectionCharts: React.FC<Props> = ({ sectionId }) => {
  // Example datasets for each section
  const chartData: Record<string, any> = {
    "synth-qc": {
      bar: [
        { name: "Traditional", Accuracy: 88 },
        { name: "Synth-QC", Accuracy: 99 },
      ],
      cost: [
        { name: "Traditional Model", Cost: 100 },
        { name: "Synth-QC Model", Cost: 40 },
      ],
      line: [
        { year: 2025, value: 8 },
        { year: 2027, value: 16 },
        { year: 2029, value: 33 },
        { year: 2032, value: 62 },
      ],
      color: "#6366f1", // indigo
    },
    "deep-rad": {
      bar: [
        { name: "Centralized AI", Accuracy: 75 },
        { name: "Deep-Rad", Accuracy: 93 },
      ],
      cost: [
        { name: "Centralized", Cost: 90 },
        { name: "Deep-Rad", Cost: 50 },
      ],
      line: [
        { year: 2025, value: 12 },
        { year: 2027, value: 20 },
        { year: 2030, value: 48 },
      ],
      color: "#10b981", // emerald
    },
    "urban-flow": {
      bar: [
        { name: "Old System", Accuracy: 68 },
        { name: "Urban-Flow", Accuracy: 95 },
      ],
      cost: [
        { name: "Old", Cost: 85 },
        { name: "Urban-Flow", Cost: 45 },
      ],
      line: [
        { year: 2025, value: 10 },
        { year: 2028, value: 28 },
        { year: 2032, value: 70 },
      ],
      color: "#f59e0b", // amber
    },
    "lfa-net": {
      bar: [
        { name: "Traditional NLP", Accuracy: 72 },
        { name: "Fin-Narrate", Accuracy: 96 },
      ],
      cost: [
        { name: "Traditional", Cost: 88 },
        { name: "Fin-Narrate", Cost: 50 },
      ],
      line: [
        { year: 2025, value: 9 },
        { year: 2029, value: 34 },
        { year: 2032, value: 65 },
      ],
      color: "#ef4444", // red
    },
    "neuro-guard": {
      bar: [
        { name: "Manual", Accuracy: 60 },
        { name: "Agri-Vision", Accuracy: 94 },
      ],
      cost: [
        { name: "Manual", Cost: 95 },
        { name: "Agri-Vision", Cost: 42 },
      ],
      line: [
        { year: 2025, value: 7 },
        { year: 2028, value: 25 },
        { year: 2032, value: 60 },
      ],
      color: "#3b82f6", // blue
    },
  };

  const data = chartData[sectionId];
  if (!data) return null;

  return (
    <div className="grid md:grid-cols-3 gap-6 my-12">
      {/* Detection Accuracy */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data.bar}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Accuracy" fill={data.color} />
        </BarChart>
      </ResponsiveContainer>

      {/* Cost Effectiveness */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data.cost} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Cost" fill={data.color} />
        </BarChart>
      </ResponsiveContainer>

      {/* Market Growth */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data.line}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke={data.color} strokeWidth={3} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
