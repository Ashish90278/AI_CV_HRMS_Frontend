import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { quizData } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

export default function QuizRepository() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFunction, setSelectedFunction] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const navigate = useNavigate();

  const filteredQuizzes = quizData.filter(quiz =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedFunction === "all" || quiz.function === selectedFunction) &&
    (selectedRole === "all" || quiz.role === selectedRole) &&
    (selectedStatus === "all" || quiz.status === selectedStatus)
  );

  const functions = ["all", ...Array.from(new Set(quizData.map(quiz => quiz.function)))];
  const roles = ["all", ...Array.from(new Set(quizData.map(quiz => quiz.role)))];
  const statuses = ["all", "active", "draft", "inactive"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "draft":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100";
      case "inactive":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Quiz Test Repository</h1>
        <Button onClick={() => navigate('/quiz/create')} className="gap-2">
          <Plus className="w-4 h-4" />
          Create New Quiz
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedFunction} onValueChange={setSelectedFunction}>
              <SelectTrigger>
                <SelectValue placeholder="Select Function" />
              </SelectTrigger>
              <SelectContent>
                {functions.map((func) => (
                  <SelectItem key={func} value={func}>
                    {func === "all" ? "All Functions" : func}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role === "all" ? "All Roles" : role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status === "all" ? "All Status" : status.charAt(0).toUpperCase() + status.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search quiz title..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quiz Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quiz Title</TableHead>
                <TableHead>Function</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Question Count</TableHead>
                <TableHead>Time Limit</TableHead>
                <TableHead>Completion Stats</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Avg Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredQuizzes.map((quiz) => (
                <TableRow 
                  key={quiz.id} 
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => navigate(`/quiz/platform/${quiz.id}`)}
                >
                  <TableCell className="font-medium">{quiz.title}</TableCell>
                  <TableCell>{quiz.function}</TableCell>
                  <TableCell>{quiz.role}</TableCell>
                  <TableCell>{quiz.questionCount}</TableCell>
                  <TableCell>{quiz.timeLimit}</TableCell>
                  <TableCell>{quiz.completionStats}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(quiz.status)}>
                      {quiz.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{quiz.avgScore}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t">
            <div className="flex items-center gap-2">
              <Select defaultValue="10">
                <SelectTrigger className="w-16">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-muted-foreground">
                Showing 1-5 of 5 items
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}