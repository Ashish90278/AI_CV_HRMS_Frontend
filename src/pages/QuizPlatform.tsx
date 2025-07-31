import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Edit, Trash2, Copy, Calendar, Clock, CheckCircle, Bell } from "lucide-react";
import { quizData, quizQuestionsData } from "@/data/mockData";

export default function QuizPlatform() {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  
  const quiz = quizData.find(q => q.id === parseInt(id || "0"));
  const questions = quizQuestionsData.filter(q => q.quizId === parseInt(id || "0"));

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const filteredQuestions = questions.filter(question =>
    question.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "MCQ":
        return <div className="w-3 h-3 rounded-full border-2 border-blue-500" />;
      case "Short":
        return <div className="w-6 h-0.5 bg-green-500" />;
      case "Y/N":
        return <div className="w-3 h-3 bg-purple-500" />;
      default:
        return null;
    }
  };

  const getBasicsColor = (basics: string) => {
    switch (basics) {
      case "Technical":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "Problem Solving":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Experience":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100";
      case "Opinion":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Quiz Platform</h1>
          <Bell className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      {/* Quiz Info Header */}
      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">{quiz.title}</h2>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium">Function:</span>
                <span>Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Role:</span>
                <span>Senior Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>60 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Jan 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Edit className="w-4 h-4" />
              Edit Quiz Info
            </Button>
            <Button variant="outline" className="gap-2">
              Change Status
            </Button>
            <Button variant="outline" className="gap-2">
              <Copy className="w-4 h-4" />
              Clone Quiz
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Sort by</SelectItem>
                <SelectItem value="score">Score</SelectItem>
                <SelectItem value="type">Type</SelectItem>
                <SelectItem value="basics">Basics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Questions Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Question</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Basics</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredQuestions.map((question) => (
                <TableRow key={question.id}>
                  <TableCell className="max-w-md">
                    <p className="truncate">{question.question}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(question.type)}
                      <span>{question.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>{question.score}</TableCell>
                  <TableCell>
                    <Badge className={getBasicsColor(question.basics)}>
                      {question.basics}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}