import { Building2, FileText, Upload, CheckCircle, BookOpen, Settings, Bell, Search, Menu, X } from "lucide-react";
import { Link, useLocation, Outlet } from "react-router-dom";
import Button from "./uiComponents/button";
import Input from "./uiComponents/input";
import Sidebar from "./Sidebar";
import { useState, useEffect, useRef } from "react";
import NotificationCard from "./NotificationCard";

// ye sabjagah rehega man lo Ek trahah ka wrapper man lo 
const Layout = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sidebarRef = useRef(null);
    const notificationRef = useRef(null);

    // Close sidebar or notification when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setIsNotificationOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);
    const navItems = [
        { path: "/dashboard", label: "Dashboard", icon: FileText },
        { path: "/dashboard/departments", label: "Department", icon: Upload },
        { path: "/dashboard/compliance", label: "Compliance", icon: CheckCircle },
        { path: "/dashboard/knowledge", label: "Knowledge Hub", icon: BookOpen },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="min-h-screen bg-background">
            <header className="border-b border-gray-400/50 bg-gray-100 shadow-xl">
                <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo and Brand */}
                        <div className="logo-brand flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md">
                                <Building2 className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-blue-600">KMRL</h1>
                                <p className="text-xs text-gray-500">Document Management</p>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="focus:outline-none"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </Button>
                        </div>

                        {/* Navigation - Desktop */}
                        <nav className="hidden md:flex items-center space-x-1">{
                            navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link key={item.path} to={item.path}>
                                        <Button
                                            variant={isActive(item.path) ? "default" : "ghost"}
                                            className={`flex items-center space-x-2 ${isActive(item.path)
                                                ? "bg-blue-600 text-white shadow-md"
                                                : "hover:bg-gray-100 cursor-pointer"
                                                }`}
                                        >
                                            <Icon className="h-4 w-4" />
                                            <span>{item.label}</span>
                                        </Button>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Search and Action Buttons */}
                        <div className="hidden md:flex items-center space-x-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    placeholder="Search documents..."
                                    className="pl-10 w-64 text-sm focus:border-blue-500"
                                />
                            </div>

                            {/* Notification Button */}
                            <div className="relative" ref={notificationRef}>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => {
                                        setIsNotificationOpen(!isNotificationOpen);
                                        setIsOpen(false); // Close sidebar when opening notifications
                                    }}
                                    className="relative cursor-pointer focus:outline-none hover:bg-gray-100"
                                >
                                    <Bell className="h-5 w-5" />
                                    <span className="absolute top-2 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                                </Button>
                                {isNotificationOpen && <NotificationCard />}
                            </div>

                            {/* Settings/Sidebar Button */}
                            <div className="relative" ref={sidebarRef}>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        setIsNotificationOpen(false); // Close notifications when opening sidebar
                                    }}
                                    className="focus:outline-none hover:bg-gray-100"
                                >
                                    <Settings className="h-5 w-5" />
                                </Button>
                                {isOpen && <Sidebar />}
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-200 shadow-md">
                    <div className="px-4 py-2 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link key={item.path} to={item.path} className="block">
                                    <div
                                        className={`flex items-center space-x-3 px-3 py-2 rounded-md ${isActive(item.path)
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span className="font-medium">{item.label}</span>
                                    </div>
                                </Link>
                            );
                        })}

                        {/* Mobile Search */}
                        <div className="relative mt-3 px-2">
                            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Search documents..."
                                className="w-full pl-8"
                            />
                        </div>

                        {/* Mobile Action Buttons */}
                        <div className="flex justify-between items-center px-2 pt-3 border-t border-gray-200">
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    setIsNotificationOpen(!isNotificationOpen);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="flex items-center space-x-2 text-gray-700"
                            >
                                <Bell className="h-5 w-5" />
                                <span>Notifications</span>
                            </Button>

                            <Button
                                variant="ghost"
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="flex items-center space-x-2 text-gray-700"
                            >
                                <Settings className="h-5 w-5" />
                                <span>Settings</span>
                            </Button>
                        </div>
                    </div>
                </div>
            )}



            {/* Main Content 
            ->Jo bhi layout ke ander rehega wo render hoga jisko chahenge 
            ->Children likhnse kam nahi karega
            <- yaha routes ke children render honge
            */}

            <main className={location.pathname.includes('/dashboard/departments') ? 'w-full' : 'px-4 py-4 md:px-6 md:py-6'}>
                <Outlet />
            </main>
        </div>

    )
}

export default Layout