import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, Search, MoreHorizontal, Mail, MessageCircle, User, Calendar, Filter } from "lucide-react";
import { candidatesData } from "@/data/mockData";

export default function CandidateSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const getMatchLevelColor = (level: string) => {
    switch (level) {
      case "High Match":
        return "bg-blue-100 text-blue-800";
      case "Medium Match":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "recommended":
        return "text-blue-600";
      case "sourced":
        return "text-orange-600";
      case "applied":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const filteredCandidates = candidatesData.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "all" || candidate.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getCountByStatus = (status: string) => {
    return candidatesData.filter(c => c.status === status).length;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-card border-r p-6">
          <div className="space-y-6">
            {/* Search */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Job Related"
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Human Research and Labour Complains"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="space-y-4">
              <h3 className="font-semibold">Filters</h3>
              
              {/* Resume Match Level */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Resume Match Level</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">High</span>
                    </div>
                    <span className="text-sm text-muted-foreground">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Low</span>
                    </div>
                    <span className="text-sm text-muted-foreground">7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <span className="text-sm">Irrelevant</span>
                    </div>
                    <span className="text-sm text-muted-foreground">12</span>
                  </div>
                </div>
              </div>

              {/* Current CTC */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Current CTC</h4>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="flex space-x-2">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Min" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 LPA</SelectItem>
                      <SelectItem value="10">10 LPA</SelectItem>
                      <SelectItem value="15">15 LPA</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Max" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 LPA</SelectItem>
                      <SelectItem value="20">20 LPA</SelectItem>
                      <SelectItem value="25">25 LPA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Total Experience */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Total Experience</h4>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Recruiter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Recruiter</h4>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sarah">Sarah Wilson</SelectItem>
                    <SelectItem value="john">John Smith</SelectItem>
                    <SelectItem value="mike">Mike Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Resume age */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Resume age</h4>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <Input placeholder="Created From" />
              </div>

              {/* Education */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Education</h4>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="graduation">Graduation</SelectItem>
                    <SelectItem value="post-graduation">Post Graduation</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Age */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Age</h4>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="flex space-x-2">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Min" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="22">22</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="30">30</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Max" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="35">35</SelectItem>
                      <SelectItem value="40">40</SelectItem>
                      <SelectItem value="45">45</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Residential FM Operations Lead</h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4 mr-2" />
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
              </Button>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ChevronDown className="h-4 w-4 mr-2" />
                Add Candidate
              </Button>
            </div>
          </div>

          {/* Search and Compare */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-96">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Compare</span>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Status Tabs */}
          <div className="flex space-x-8 mb-6">
            <Card className="flex-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox />
                    <h3 className="font-semibold">Recommended</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{getCountByStatus("recommended")}</span>
                </div>
                <Button variant="ghost" className="w-full justify-start p-0">
                  <ChevronDown className="h-4 w-4 mr-2" />
                  Collapse
                </Button>
                
                <div className="space-y-3 mt-4">
                  {filteredCandidates
                    .filter(c => c.status === "recommended")
                    .map((candidate) => (
                    <div key={candidate.id} className="border rounded-lg p-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Checkbox />
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{candidate.name}</span>
                              {candidate.isOnline && (
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              )}
                              <MessageCircle className="h-4 w-4 text-green-600" />
                            </div>
                            <div className="text-sm text-muted-foreground">{candidate.timeAgo}</div>
                            <div className="flex space-x-2 mt-2">
                              <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                <span className="sr-only">Action</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                <span className="sr-only">Action</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                <span className="sr-only">Action</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                <span className="sr-only">Action</span>
                              </Button>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="secondary" className={getMatchLevelColor(candidate.matchLevel)}>
                                {candidate.matchLevel}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox />
                    <h3 className="font-semibold">Sourced</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{getCountByStatus("sourced")}</span>
                </div>
                <Button variant="ghost" className="w-full justify-start p-0">
                  <ChevronDown className="h-4 w-4 mr-2" />
                  Collapse
                </Button>
                
                <div className="space-y-3 mt-4">
                  {filteredCandidates
                    .filter(c => c.status === "sourced")
                    .map((candidate) => (
                    <div key={candidate.id} className="border rounded-lg p-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Checkbox />
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{candidate.name}</span>
                              {candidate.isOnline && (
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              )}
                              <MessageCircle className="h-4 w-4 text-green-600" />
                            </div>
                            <div className="text-sm text-muted-foreground">{candidate.timeAgo}</div>
                            <div className="flex space-x-2 mt-2">
                              <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                <span className="sr-only">Action</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                <span className="sr-only">Action</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                <span className="sr-only">Action</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                <span className="sr-only">Action</span>
                              </Button>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="secondary" className={getMatchLevelColor(candidate.matchLevel)}>
                                {candidate.matchLevel}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox />
                    <h3 className="font-semibold">Applied</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{getCountByStatus("applied")}</span>
                </div>
                <Button variant="ghost" className="w-full justify-start p-0">
                  <ChevronDown className="h-4 w-4 mr-2" />
                  Collapse
                </Button>
                
                <div className="space-y-3 mt-4">
                  {filteredCandidates
                    .filter(c => c.status === "applied")
                    .map((candidate) => (
                    <div key={candidate.id} className="border rounded-lg p-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Checkbox />
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{candidate.name}</span>
                              {candidate.isOnline && (
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              )}
                              <MessageCircle className="h-4 w-4 text-green-600" />
                            </div>
                            <div className="text-sm text-muted-foreground">{candidate.timeAgo}</div>
                            <div className="flex space-x-2 mt-2">
                              <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                <span className="sr-only">Action</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                <span className="sr-only">Action</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                <span className="sr-only">Action</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                                <span className="sr-only">Action</span>
                              </Button>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="secondary" className={getMatchLevelColor(candidate.matchLevel)}>
                                {candidate.matchLevel}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}