import React from 'react';
import {
    MessageCircle,
    Users,
    Settings,
    Briefcase,
    DollarSign,
    Monitor,
    Shield,
    Building2,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const departments = [
    {
        id: 'all',
        name: 'All Departments',
        icon: Building2,
        color: 'text-blue-500',
        count: 24
    },
    {
        id: 'hr',
        name: 'Human Resources',
        icon: Users,
        color: 'text-red-500',
        count: 5
    },
    {
        id: 'engineering',
        name: 'Engineering',
        icon: Settings,
        color: 'text-blue-500',
        count: 8
    },
    {
        id: 'operations',
        name: 'Operations',
        icon: Briefcase,
        color: 'text-green-500',
        count: 6
    },
    {
        id: 'finance',
        name: 'Finance',
        icon: DollarSign,
        color: 'text-yellow-500',
        count: 3
    },
    {
        id: 'it',
        name: 'Information Technology',
        icon: Monitor,
        color: 'text-purple-500',
        count: 4
    },
    {
        id: 'admin',
        name: 'Administration',
        icon: Shield,
        color: 'text-department-admin',
        count: 2
    },
    {
        id:'AiChat',
        name:'AiChat',
        icon:MessageCircle,
        color:'text-blue-500',
    }
];

export function DepartmentSidebar({
    selectedDepartment,
    onDepartmentSelect,
    isCollapsed,
    onToggleCollapse
}) {
    return (
        <div
            className={`bg-gray-200/40 left-0  transition-all duration-300 flex  flex-col ${isCollapsed ? "w-16" : "w-72"
                }`}
        >

            {/* Header */}
            <div className="p-4 border-b border-gray-300 flex  items-center justify-between">
                {!isCollapsed && (
                    <div>
                        <h2 className="text-lg font-semibold text-foreground">KMRL</h2>
                        <p className="text-sm text-gray-500">Departments</p>
                    </div>
                )}
                <button
                    onClick={onToggleCollapse}
                    className="p-2 hover:bg-sidebar-hover rounded-lg transition-colors"
                >
                    {isCollapsed ? (
                        <ChevronRight className="h-4 w-4 cursor-pointer" />
                    ) : (
                        <ChevronLeft className="h-4 w-4 cursor-pointer" />
                    )}
                </button>
            </div>



            {/* Department List------- */}
            <div className="flex-1  p-2 space-y-1 overflow-y-auto">
                {departments.map((dept) => {
                    const Icon = dept.icon;
                    const isActive = selectedDepartment === dept.id;

                    return (
                        <button
                            key={dept.id}
                            onClick={() => onDepartmentSelect(dept.id)}
                            className={`w-full cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${isActive
                                ? "bg-blue-500 text-white shadow-md"
                                : "hover:bg-gray-300 text-foreground"
                                }`}
                        >
                            <Icon
                                className={`h-5 w-5  flex-shrink-0 ${isActive ? "text-white" : dept.color
                                    }`}
                            />

                            {!isCollapsed && (
                                <>
                                    <div className="flex-1 text-left">
                                        <span className="text-sm font-medium">{dept.name}</span>
                                    </div>
                                    <span
                                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${isActive
                                            ? "bg-white/20 text-white"
                                            : "bg-muted text-muted-foreground"
                                            }`}
                                    >
                                        {dept.count}
                                    </span>
                                </>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Footer */}
            {!isCollapsed && (
                <div className="p-4 border-t border-gray-300">
                    <div className="text-xs text-gray-500">
                        Kochi Metro Rail Limited
                    </div>
                </div>
            )}
        </div>
    );
}
