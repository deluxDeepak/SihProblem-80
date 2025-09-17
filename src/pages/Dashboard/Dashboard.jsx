import {
  Clock,
  AlertCircle,
  GraduationCap,
  FileCheck,
  TrendingUp,
  Calendar,
  Users,
  BarChart3,
  ArrowRight,
  Building2
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
      name: "Safety Guidelines Q3 2025.pdf",
      source: "SharePoint",
      department: "Safety",
      date: "2 hours ago",
      status: "pending",
      user: "Rahul Sharma",
      size: "4.2 MB",
      priority: "high"
    },
    {
      id: 2,
      name: "Employee Handbook Update.docx",
      source: "Gmail",
      department: "HR",
      date: "5 hours ago",
      status: "approved",
      user: "Priya Patel",
      size: "2.8 MB",
      priority: "medium"
    },
    {
      id: 3,
      name: "Maintenance Report Oct.pdf",
      source: "Maximo",
      department: "Engineering",
      date: "1 day ago",
      status: "reviewed",
      user: "Aditya Kumar",
      size: "8.1 MB",
      priority: "low"
    },
    {
      id: 4,
      name: "Training Schedule Nov.xlsx",
      source: "WhatsApp",
      department: "Training",
      date: "2 days ago",
      status: "pending",
      user: "Meera Joshi",
      size: "1.5 MB",
      priority: "medium"
    },
    {
      id: 5,
      name: "Station Inspection Report - Aluva.pdf",
      source: "Email",
      department: "Operations",
      date: "3 days ago",
      status: "approved",
      user: "Vijay Menon",
      size: "6.3 MB",
      priority: "high"
    },
    {
      id: 6,
      name: "Budget Forecast 2026.xlsx",
      source: "OneDrive",
      department: "Finance",
      date: "4 days ago",
      status: "rejected",
      user: "Sanjay Gupta",
      size: "3.7 MB",
      priority: "high"
    },
  ];


  // Function to determine badge color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "approved":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "rejected":
        return "bg-rose-100 text-rose-800 border-rose-300";
      case "reviewed":
        return "bg-blue-100 text-blue-800 border-blue-300";
      default:
        return "bg-slate-100 text-slate-800 border-slate-300";
    }
  };

  // Function to determine priority badge color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-rose-100 text-rose-800 border-rose-300";
      case "medium":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "low":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      default:
        return "bg-slate-100 text-slate-800 border-slate-300";
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
          percentage="23%"
          detailsText="View pending items"
        />
        <SummaryCard
          title="Regulatory Updates"
          value={8}
          description="New this week"
          icon={AlertCircle}
          trend="neutral"
          percentage="0%"
          detailsText="Review updates"
        />
        <SummaryCard
          title="Training Compliance"
          value="94%"
          description="5% improvement"
          icon={GraduationCap}
          trend="up"
          percentage="+5%"
          detailsText="Training dashboard"
        />
        <SummaryCard
          title="Active Contracts"
          value={156}
          description="Down by 3"
          icon={FileCheck}
          trend="down"
          percentage="-2%"
          detailsText="Contract details"
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
      <Card className="w-full shadow-lg border border-slate-200 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span className="text-slate-800">Recent Uploads</span>
            </div>
            <Button variant="outline" size="sm" className="cursor-pointer bg-white hover:bg-blue-50 text-blue-600 border-blue-200">
              View All Documents
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-100">
            {recentUploads.slice(0, 5).map((upload) => (
              <div
                key={upload.id}
                className="hover:bg-slate-50 transition-colors group"
              >
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-start space-x-4">
                    {/* File icon based on extension */}
                    <div className={`p-2.5 rounded-md flex-shrink-0 ${upload.name.endsWith('pdf') ? 'bg-rose-50 text-rose-600' :
                        upload.name.endsWith('docx') ? 'bg-blue-50 text-blue-600' :
                          upload.name.endsWith('xlsx') ? 'bg-emerald-50 text-emerald-600' :
                            'bg-slate-50 text-slate-600'
                      }`}>
                      <FileCheck className="h-5 w-5" />
                    </div>

                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center">
                        <p className="font-medium text-slate-800 truncate mr-2">{upload.name}</p>
                        <Badge className={getPriorityColor(upload.priority) + " text-xs px-1.5 py-0.5 hidden sm:inline-flex"}>
                          {upload.priority}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {upload.user}
                        </span>
                        <span className="flex items-center">
                          <Building2 className="h-3 w-3 mr-1" />
                          {upload.department}
                        </span>
                        <span>{upload.date}</span>
                        <span>{upload.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(upload.status) + " border text-xs capitalize"}>
                      {upload.status}
                    </Badge>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="bg-slate-50 border-t border-slate-200 flex justify-between py-3">
          <div className="text-xs text-slate-500">Showing {Math.min(5, recentUploads.length)} of {recentUploads.length} documents</div>
          <div className="flex space-x-1">
            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-slate-600 hover:bg-slate-200">Previous</Button>
            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-slate-600 hover:bg-slate-200">Next</Button>
          </div>
        </CardFooter>
      </Card>


    </div>
  )
}

export default Dashboard