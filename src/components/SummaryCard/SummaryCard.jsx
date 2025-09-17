import React, { useState } from 'react';
import { Card } from '../uiComponents/card';
import { TrendingUp, TrendingDown, ArrowRight, Minus } from 'lucide-react';

const SummaryCard = ({
    title,
    value,
    description,
    icon: Icon,
    trend = "neutral",
    className = "",
    percentage,
    detailsText = "View details"
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const getTrendColor = () => {
        switch (trend) {
            case "up": return "text-emerald-600";
            case "down": return "text-rose-600";
            default: return "text-slate-600";
        }
    };

    const getTrendIcon = () => {
        switch (trend) {
            case "up": return <TrendingUp className="h-3 w-3 mr-1" />;
            case "down": return <TrendingDown className="h-3 w-3 mr-1" />;
            default: return <Minus className="h-3 w-3 mr-1" />;
        }
    };

    const getCardBg = () => {
        switch (trend) {
            case "up":
                return "bg-gradient-to-br from-emerald-50 to-teal-100 border-l-4 border-emerald-500";
            case "down":
                return "bg-gradient-to-br from-rose-50 to-pink-100 border-l-4 border-rose-500";
            default:
                return "bg-gradient-to-br from-blue-50 to-indigo-100 border-l-4 border-blue-500";
        }
    };

    const getIconBg = () => {
        switch (trend) {
            case "up": return "bg-emerald-100 text-emerald-600";
            case "down": return "bg-rose-100 text-rose-600";
            default: return "bg-blue-100 text-blue-600";
        }
    };

    return (
        <Card
            className={`${getCardBg()} shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-5 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                    <div className={`${getIconBg()} p-3 rounded-full`}>
                        {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <div className={`flex items-center text-xs font-medium ${getTrendColor()}`}>
                        {getTrendIcon()}
                        {percentage && <span>{percentage}</span>}
                    </div>
                </div>

                <div className="space-y-1">
                    <p className="text-sm font-medium text-slate-600">{title}</p>
                    <p className="text-3xl font-bold text-slate-800">{value}</p>
                    <p className={`text-sm ${getTrendColor()} flex items-center`}>
                        {description}
                    </p>
                </div>

                <div className={`mt-4 pt-3 border-t border-slate-200 text-xs font-medium flex items-center justify-end text-slate-600 hover:text-slate-900 transition-colors cursor-pointer ${isHovered ? 'text-slate-900' : ''}`}>
                    {detailsText}
                    <ArrowRight className="ml-1 h-3 w-3" />
                </div>
            </div>
        </Card>
    );
}

export default SummaryCard;
