import {
  Clock,
  AlertCircle,
  GraduationCap,
  FileCheck,
  TrendingUp,
  Calendar,
  Users,
  BarChart3
} from "lucide-react";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import UploadWiget from "../../components/UploadWiget/UploadWiget";
import { Card, CardHeader, CardFooter, CardContent, CardTitle } from "../../components/uiComponents/card";
import Button from "../../components/uiComponents/button";
import Badge from "../../components/uiComponents/badgesButton";


const Dashboard = () => {



  const recentUploads = [
    {
      id: 1,
      name: "Safety Guidelines Q3 2024.pdf",
      source: "SharePoint",
      department: "Safety",
      date: "2 hours ago",
      status: "pending"
    },
    {
      id: 2,
      name: "Employee Handbook Update.docx",
      source: "Gmail",
      department: "HR",
      date: "5 hours ago",
      status: "approved"
    },
    {
      id: 3,
      name: "Maintenance Report Oct.pdf",
      source: "Maximo",
      department: "Engineering",
      date: "1 day ago",
      status: "reviewed"
    },
    {
      id: 4,
      name: "Training Schedule Nov.xlsx",
      source: "WhatsApp",
      department: "Training",
      date: "2 days ago",
      status: "pending"
    },
  ];


  // Function to determine badge color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 cursor-pointer";
      case "approved":
        return "bg-green-100 text-green-800 cursor-pointer";
      case "rejected":
        return "bg-red-100 text-red-800 cursor-pointer";
      default:
        return "bg-gray-100 text-gray-800 cursor-pointer";
    }
  };






  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-gray-500/70">Monitor your document management and compliance status</p>
      </div>


      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Pending Approvals"
          value={12}
          description="+3 from yesterday"
          icon={Clock}
          trend="up"
        />
        <SummaryCard
          title="Regulatory Updates"
          value={8}
          description="New this week"
          icon={AlertCircle}
          trend="neutral"
        />
        <SummaryCard
          title="Training Notices"
          value={25}
          description="Active programs"
          icon={GraduationCap}
          trend="up"
        />
        <SummaryCard
          title="Active Contracts"
          value={156}
          description="Expiring soon: 8"
          icon={FileCheck}
          trend="neutral"
        />
      </div>


      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upload Widget */}
        <div className="lg:col-span-2">
          <UploadWiget />
        </div>


        {/* Quick Stats */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Quick Stats</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Documents Today</span>
                <span className="font-semibold">47</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Processing</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Compliance Rate</span>
                <span className="font-semibold text-green-500">94%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Active Users</span>
                <span className="font-semibold">89</span>
              </div>
            </div>
            <Button className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-green-600/30 hover:bg-primary-hover shadow-primary">
              View Detailed Report
            </Button>
          </CardContent>
        </Card>

      </div>




      {/* Recent Uploads */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Recent Uploads</span>
            </div>
            <Button variant="outline" size="sm" className="cursor-pointer">View All</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentUploads.map((upload) => (
              <div key={upload.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-200/30 to-blue-200/50 rounded-lg hover:bg-gray-300 transition-colors">
                <div className="space-y-1">
                  <p className="font-medium">{upload.name}</p>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span>Source: {upload.source}</span>
                    <span>•</span>
                    <span>Dept: {upload.department}</span>
                    <span>•</span>
                    <span>{upload.date}</span>
                  </div>
                </div>
                <Badge className={getStatusColor(upload.status)}>
                  {upload.status.charAt(0).toUpperCase() + upload.status.slice(1)}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>









    </div>
  )
}

export default Dashboard