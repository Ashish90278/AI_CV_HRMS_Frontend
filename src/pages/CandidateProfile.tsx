import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, 
  User, 
  Bell, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Download,
  RotateCcw,
  Maximize2,
  ChevronDown
} from "lucide-react";
import { candidateDetailData } from "@/data/mockData";

export default function CandidateProfile() {
  const [activeTab, setActiveTab] = useState("resume");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Interview Process":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search candidates..."
                className="pl-10 w-80"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Candidate Header */}
      <div className="border-b bg-card px-6 py-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-lg">
                {candidateDetailData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">{candidateDetailData.name}</h1>
                <User className="h-4 w-4 text-muted-foreground" />
                <Mail className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Mail className="h-4 w-4" />
                  <span>{candidateDetailData.email}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="h-4 w-4" />
                  <span>{candidateDetailData.phone}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span>Experience: {candidateDetailData.experience}</span>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{candidateDetailData.location}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-muted-foreground mb-2">Age: {candidateDetailData.age} Years</div>
            <div className="flex items-center space-x-8 mb-4">
              <div className="text-center">
                <div className="relative w-16 h-16 mb-2">
                  <Progress value={candidateDetailData.jobHopper} className="w-16 h-16" />
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                    {candidateDetailData.jobHopper}%
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Job Hopper</div>
              </div>
              <div className="text-center">
                <div className="relative w-16 h-16 mb-2">
                  <Progress value={candidateDetailData.completeness} className="w-16 h-16" />
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                    {candidateDetailData.completeness}%
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Completeness</div>
              </div>
              <div className="text-center">
                <div className="relative w-16 h-16 mb-2">
                  <Progress value={candidateDetailData.assessment} className="w-16 h-16" />
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                    {candidateDetailData.assessment}%
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Assessment</div>
              </div>
              <div className="text-center">
                <div className="relative w-16 h-16 mb-2">
                  <Progress value={candidateDetailData.matchScore} className="w-16 h-16" />
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                    {candidateDetailData.matchScore}%
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Match Score</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className={getStatusColor(candidateDetailData.stage)}>
                {candidateDetailData.stage}
              </Badge>
              <span className="text-sm text-muted-foreground">Stage {candidateDetailData.stageNumber}</span>
            </div>
          </div>
        </div>

        {/* Candidate Details */}
        <div className="mt-6 grid grid-cols-4 gap-6 text-sm">
          <div>
            <span className="text-muted-foreground">Recruiter: </span>
            <span className="text-blue-600">{candidateDetailData.recruiter}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Resume Age: </span>
            <span>{candidateDetailData.resumeAge}</span>
          </div>
          <div>
            <span className="text-muted-foreground">{candidateDetailData.source}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Hired Previously: </span>
            <Badge variant="destructive" className="text-xs">
              {candidateDetailData.hiredPreviously}
            </Badge>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-between">
          <div></div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">Scheduled Interview</Button>
            <Button variant="outline">
              Move Candidates
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="destructive">Reject</Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between border-b">
            <TabsList className="grid grid-cols-7 bg-transparent">
              {candidateDetailData.tabs.map((tab) => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  className="relative data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
                >
                  {tab.label}
                  {tab.hasNotification && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button className="bg-blue-600 hover:bg-blue-700">Update Resume</Button>
          </div>

          <TabsContent value="resume" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span>Automatic Zoom</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">📄</div>
                    <div>Resume preview would appear here</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forms" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-muted-foreground py-12">
                  Forms content would appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comments" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-muted-foreground py-12">
                  Comments content would appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-muted-foreground py-12">
                  Feedback content would appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tests" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-muted-foreground py-12">
                  Tests content would appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-review" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-muted-foreground py-12">
                  AI Review content would appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attachments" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-muted-foreground py-12">
                  Attachments content would appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}