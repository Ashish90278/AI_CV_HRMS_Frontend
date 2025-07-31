import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Clock, Users, Eye, Share, MapPin, MoreVertical } from "lucide-react";
import { jobsData } from "@/data/mockData";

export default function JobManagement() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("All Job Types");
  const [selectedFunction, setSelectedFunction] = useState("Function");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedClient, setSelectedClient] = useState("Clients");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "HOT":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "Open":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Draft":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const handleCreateJob = () => {
    navigate("/job/create");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Job Management</h1>
          <p className="text-muted-foreground">Welcome back, John Doe</p>
        </div>
        <Button onClick={handleCreateJob} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Job
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-muted/50 p-4 rounded-lg space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs by company, department, or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-background"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <Select value={selectedJobType} onValueChange={setSelectedJobType}>
            <SelectTrigger className="w-48 bg-background">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Job Types">All Job Types</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
              <SelectItem value="In-office">In-office</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedFunction} onValueChange={setSelectedFunction}>
            <SelectTrigger className="w-48 bg-background">
              <SelectValue placeholder="Functions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Function">Functions</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedClient} onValueChange={setSelectedClient}>
            <SelectTrigger className="w-48 bg-background">
              <SelectValue placeholder="Clients" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Clients">Clients</SelectItem>
              <SelectItem value="ABC Company">ABC Company</SelectItem>
              <SelectItem value="XYZ Corp">XYZ Corp</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="gap-2">
            <Share className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobsData.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{job.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <Badge className={getStatusColor(job.status)}>
                    {job.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{job.daysPosted} Days</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>{job.cvCount} CVs</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>₹ {job.lpa} LPA</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Add Candidate
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}