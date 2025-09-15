import { Building2, FileText, Upload, CheckCircle, BookOpen, Settings, Bell, Search, Camera } from "lucide-react";
import { Link, useLocation, Outlet } from "react-router-dom";
import Button from "./uiComponents/button";
import Input from "./uiComponents/input";
import Sidebar from "./Sidebar";
import { useState } from "react";
import NotificationTray from "./NotificationCard";

// ye sabjagah rehega man lo Ek trahah ka wrapper man lo 
const Layout = () => {

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    console.log(isOpen);
    const navItems = [
        { path: "/dashboard", label: "Dashboard", icon: FileText },
        { path: "/dashboard/uploads", label: "Uploads", icon: Upload },
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
                        {/* ------------------Logo and Brand-----------*/}
                        <div className="logo-brand flex items-center space-x-3 ">
                            <div className="flex items-center justify-center w-10 h-10 bg-linear-to-r from-cyan-500 to-blue-500 shadow-amber-400 rounded-lg">
                                <Building2 className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-blue-500">KMRL</h1>
                                <p className="text-xs text-gray-500">Document Management</p>
                            </div>
                        </div>



                        {/* Navigation */}
                        <nav className=" md:flex items-center space-x-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                console.log(Icon);
                                return (
                                    <Link key={item.path} to={item.path}>
                                        <Button
                                            variant={isActive(item.path) ? "default" : "ghost"}
                                            className={`flex items-center space-x-2 ${isActive(item.path)
                                                ? "bg-blue-500/80 text-primary-foreground shadow-xl"
                                                : "hover:bg-gray-400/10 cursor-pointer"
                                                }`}
                                        >
                                            <Icon />
                                            <span>{item.label}</span>
                                        </Button>
                                    </Link>
                                );
                            })}
                        </nav>
                        <div className="flex items-center space-x-3">

                            <div className="relative hidden sm:block cursor-pointer">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground " />
                                <Input
                                    placeholder="Search documents..."
                                    className="pl-10 w-64"
                                />
                            </div>



                            <Button variant="ghost" size="icon"
                                onClick={() => setIsNotificationOpen((prev) => !prev)}
                                className="relative cursor-pointer">
                                {isNotificationOpen && <NotificationTray />}
                                <span>
                                    <Bell className="h-5 w-5" />
                                    <span className="absolute top-2 right-1 h-2 w-2 bg-green-500 rounded-full"></span>
                                </span>
                            </Button>
                            <Button variant="ghost" size="icon"
                                className=""
                                onClick={() => setIsOpen((prev) => !prev)} >
                                {isOpen && <Sidebar></Sidebar>}
                                <span className="cursor-pointer">
                                    <Settings className="h-5 w-5 " />
                                </span>
                            </Button>

                        </div>

                    </div>
                </div>
            </header>



            {/* Main Content 
            ->Jo bhi layout ke ander rehega wo render hoga jisko chahenge 
            ->Children likhnse kam nahi karega
            <- yaha routes ke children render honge

            */}
            <main className="px-6 py-6">
                <Outlet />
            </main>
        </div>

    )
}

export default Layout