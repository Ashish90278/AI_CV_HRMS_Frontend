import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronLeft, ChevronRight, Sparkles, Edit, RefreshCw, Trash2, FileText } from "lucide-react";

export default function QuizCreate() {
  const [selectedCreationType, setSelectedCreationType] = useState("ai");
  const [jobRole, setJobRole] = useState("");
  const [functionDept, setFunctionDept] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [questionType, setQuestionType] = useState("Technical");

  const aiQuestions = [
    {
      id: 1,
      question: "What is the difference between stack and queue data structures?",
      options: [
        "FIFO vs LIFO",
        "Same structure",
        "Different memory allocation",
        "Linear vs non-linear"
      ]
    }
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground">
        <span>Dashboard</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span>Quiz Management</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-foreground">Create New Quiz</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create New Quiz</h1>
      </div>

      {/* Creation Type Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className={`cursor-pointer transition-all ${selectedCreationType === 'ai' ? 'border-primary bg-primary/5' : 'hover:border-primary/50'}`}
              onClick={() => setSelectedCreationType('ai')}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">AI-Powered Creation</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Let AI generate questions based on your requirements
            </p>
            <Button variant="link" className="p-0 h-auto text-primary">
              Learn more
            </Button>
          </CardContent>
        </Card>

        <Card className={`cursor-pointer transition-all ${selectedCreationType === 'manual' ? 'border-primary bg-primary/5' : 'hover:border-primary/50'}`}
              onClick={() => setSelectedCreationType('manual')}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Edit className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Manual Creation</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Create questions manually with full control
            </p>
            <Button variant="link" className="p-0 h-auto text-primary">
              Learn more
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quiz Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Quiz Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="jobRole">Job Role</Label>
              <Input 
                id="jobRole" 
                placeholder="e.g. Software Engineer"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="functionDept">Function/Department</Label>
              <Input 
                id="functionDept" 
                placeholder="e.g. Engineering"
                value={functionDept}
                onChange={(e) => setFunctionDept(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="timeLimit">Time Limit (minutes)</Label>
              <Input 
                id="timeLimit" 
                placeholder="e.g. 30"
                value={timeLimit}
                onChange={(e) => setTimeLimit(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="questionType">Question Type</Label>
              <Select value={questionType} onValueChange={setQuestionType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Technical">Technical</SelectItem>
                  <SelectItem value="Behavioral">Behavioral</SelectItem>
                  <SelectItem value="Situational">Situational</SelectItem>
                  <SelectItem value="Mixed">Mixed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Generated Questions */}
      {selectedCreationType === 'ai' && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>AI Generated Questions</CardTitle>
              <Button variant="outline" className="gap-2">
                <RefreshCw className="w-4 h-4" />
                Generate More
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {aiQuestions.map((question, index) => (
              <div key={question.id} className="border rounded-lg p-4 mb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium mb-2">Question {index + 1}</h4>
                    <p className="text-sm">{question.question}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <RadioGroup className="space-y-2">
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center space-x-2">
                      <RadioGroupItem value={`option-${optionIndex}`} id={`q${question.id}-option-${optionIndex}`} />
                      <Label htmlFor={`q${question.id}-option-${optionIndex}`} className="text-sm">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1">
          Save as Draft
        </Button>
        <Button className="flex-1">
          Create Quiz
        </Button>
      </div>
    </div>
  );
}