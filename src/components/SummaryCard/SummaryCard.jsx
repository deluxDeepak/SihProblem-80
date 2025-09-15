import React from 'react';
import { Card } from '../uiComponents/card';

const SummaryCard = ({ title, value, description, icon: Icon, trend = "neutral", className = "" }) => {

    const getTrendColor = () => {
        switch (trend) {
            case "up": return "text-green-500";
            case "down": return "text-red-500";
            default: return "text-gray-500/80";
        }
    };

    return (
        <Card className={`bg-gradient-to-r from-blue-200/30 to-blue-500/10 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}>

            <div className="flex items-center justify-between p-4 bg-card rounded-lg shadow">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500/80">{title}</p>
                    <p className="text-3xl font-bold text-black">{value}</p>
                    <p className={`text-sm ${getTrendColor()}`}>{description}</p>
                </div>

                <div className="flex items-center justify-center w-12 h-12 bg-blue-950/10 rounded-lg">
                    {Icon && <Icon className="h-6 w-6 text-blue-400" />}
                </div>
            </div>
        </Card>
    );
}

export default SummaryCard;
