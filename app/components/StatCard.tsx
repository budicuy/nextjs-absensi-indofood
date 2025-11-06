"use client";

import { TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  trendUp?: boolean;
  icon: React.ReactNode;
  bgColor: string;
}

export default function StatCard({
  title,
  value,
  trend,
  trendUp = true,
  icon,
  bgColor,
}: StatCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${bgColor} p-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
    >
      {/* Background Pattern */}
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-white opacity-10" />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-medium opacity-90">{title}</h3>
          <div className="rounded-full bg-white bg-opacity-20 p-2">{icon}</div>
        </div>

        <div className="mb-2">
          <p className="text-4xl font-bold">{value}</p>
        </div>

        {trend && (
          <div className="flex items-center gap-1 text-sm">
            <TrendingUp className={`h-4 w-4 ${trendUp ? "" : "rotate-180"}`} />
            <span className="font-medium">{trend}</span>
            <span className="opacity-75">from last month</span>
          </div>
        )}
      </div>
    </div>
  );
}
