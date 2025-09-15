import React from 'react'
import {
  BookOpen,
  Filter,
  FileText,
  Video,
  Link,
  Search,
  Download,
  Star,
  Clock,
  Users
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from '../../components/uiComponents/card';
import Button from '../../components/uiComponents/button';
import Badge from '../../components/uiComponents/badgesButton';
// import Search from '../../components/uiComponents/search';
import Input from '../../components/uiComponents/input';


const Knowledge = () => {
  const categories = ["All", "Policies", "Procedures", "Training", "Safety", "Technical"];

  const knowledgeItems = [
    {
      id: 1,
      title: "KMRL Safety Protocols 2024",
      description: "Comprehensive safety guidelines and emergency procedures for metro operations",
      category: "Safety",
      type: "document",
      format: "PDF",
      size: "4.2 MB",
      downloads: 127,
      rating: 4.8,
      lastUpdated: "2024-10-15",
      author: "Safety Department"
    },
    {
      id: 2,
      title: "Employee Onboarding Process",
      description: "Step-by-step guide for new employee integration and training",
      category: "Procedures",
      type: "document",
      format: "DOCX",
      size: "2.1 MB",
      downloads: 89,
      rating: 4.6,
      lastUpdated: "2024-10-12",
      author: "HR Department"
    },
    {
      id: 3,
      title: "Metro Operations Training Video",
      description: "Interactive training module for metro control room operations",
      category: "Training",
      type: "video",
      format: "MP4",
      size: "156 MB",
      downloads: 45,
      rating: 4.9,
      lastUpdated: "2024-10-10",
      author: "Training Division"
    },
    {
      id: 4,
      title: "Technical Maintenance Manual",
      description: "Detailed maintenance procedures for metro rolling stock and infrastructure",
      category: "Technical",
      type: "document",
      format: "PDF",
      size: "12.8 MB",
      downloads: 203,
      rating: 4.7,
      lastUpdated: "2024-10-08",
      author: "Engineering Department"
    },
    {
      id: 5,
      title: "Customer Service Guidelines",
      description: "Best practices for passenger assistance and service excellence",
      category: "Policies",
      type: "link",
      format: "Web Link",
      size: "-",
      downloads: 156,
      rating: 4.5,
      lastUpdated: "2024-10-05",
      author: "Customer Relations"
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "video": return Video;
      case "link": return Link;
      default: return FileText;
    }
  };





  // Output Colors(based on your mapping)
  // Safety → 🔴 light red bg(bg - destructive / 10 text - destructive)
  // Training → 🟦 light accent bg(bg - accent / 10 text - accent)
  // Technical → 🔵 light primary bg(bg - primary / 10 text - primary)
  // Policies → 🟢 green bg(bg - success / 10 text - success)
  // Procedures → 🟡 yellow bg(bg - warning / 10 text - warning)
  // Default / Other → ⚪ muted gray(bg - muted text - muted - foreground)
  const getCategoryColor = (category) => {
    switch (category) {
      case "Safety": return "bg-red-500/10 text-red-500";
      case "Training": return "bg-blue-500/10 text-500";
      case "Technical": return "bg-blue-600/10 text-600";
      case "Policies": return "bg-green-500/10 text-green-500";
      case "Procedures": return "bg-yellow-500/10 text-yellow-500";
      default: return "bg-white ";
    }
  };





  return (
    <div className='space-y-6'>
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Knowledge Hub</h1>
        <p className="text-muted-foreground">Access training materials, policies, and technical documentation</p>
      </div>


      {/* Search and Filters */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 top-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search knowledge base..."
                className="pl-10"
              />
            </div>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span>All Categories</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {categories.map((category) => (
                  <DropdownMenuItem key={category}>
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
        </CardContent>
      </Card>



      {/* Knowledge Items Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {knowledgeItems.map((item) => {
          const TypeIcon = getTypeIcon(item.type);

          return (
            <Card key={item.id} className=" shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-950/10  rounded-lg">
                      <TypeIcon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Metadata */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-blue-400" />
                      <span>{new Date(item.lastUpdated).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="h-3 w-3" />
                      <span>{item.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current text-yellow-300" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <span className="text-xs">{item.format} • {item.size}</span>
                </div>




                {/* Tags and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {item.author}
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="hover:bg-gradient-to-r  from-green-400/30 to-blue-300 cursor-pointer">
                      Preview
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-green-600/30 hover:bg-gray-800 cursor-pointer">
                      <Download className="h-4 w-4 mr-1" />
                      Access
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>








    </div>
  )
}

export default Knowledge