import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Upload,
  FileText,
  Sparkles,
  X,
  Clock,
  Eye,
} from "lucide-react";
import { jobFormData } from "@/data/mockData";
import { toast } from "@/components/ui/use-toast";

import ReactSelect from "react-select";



export default function JobCreate() {
  const  languageoptions = [
    { value: "No", label: "No" },
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Both", label: "Both" },
  ];
  const  educationOptions = [
    { value: "Bachelor's Degree", label: "Bachelor's Degree" },
    { value: "Master's Degree", label: "Master's Degree" },
    { value: "PhD", label: "PhD" },
  ];
  const navigate = useNavigate();
  const [form, setForm] = useState({
    jobTitle: "",
    roleLevel: "",
    client: "",
    function: "",
    city: "",
    location: "",
    deploymentType: "",
    travelling: "",
    clientRecruiter: "",
    jobType: "",
    // createdBy: "", // Set this to the logged-in user's ID
    requiredSkills: "",
    gender: "",
    noticePeriod: "",
    salaryRange: {
      type: "Monthly", // or "Annual"
      min: NaN,
      max: NaN,
      currency: "INR",
    },
    workExperience: 0,
    experienceLevel: "",
    employmentType: "",
    differentlyAble: "",
    languageKnown: [],
    education: [],
    numberOfOpenings: 1,
    relocationAllowed: "",
    ageRange: {
      min: NaN,
      max: NaN,
    },
    status: "Draft", // or "Published", "Archived"
    // ...add other fields as needed
  });
  const [activeTab, setActiveTab] = useState("basic");

  const handleInputChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // const addSkill = (skill: string) => {
  //   if (skill && !form.requiredSkills.includes(skill)) {
  //     setForm((prev) => ({
  //       ...prev,
  //       requiredSkills: [...prev.requiredSkills, skill],
  //     }));
  //   }
  // };

  // const removeSkill = (skillToRemove: string) => {
  //   setForm((prev) => ({
  //     ...prev,
  //     requiredSkills: prev.requiredSkills.filter((skill) => skill !== skillToRemove),
  //   }));
  // };

  const handleSaveDraft = async() => {
    // Handle save as draft
    try {
      const response = await fetch("http://localhost:5001/api/v1/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to create job");
      }

      toast({
        title: "Job Created",
        description: "The job has been successfully created.",
      });

      navigate("/job");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong.",
        variant: "destructive",
      });
    }
    navigate("/job");
  };

  const handlePreview = () => {
    // Handle preview
    console.log("Preview job:", form);
  };

  // Add this function to handle job submission
  const handleSubmitJob = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/v1/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to create job");
      }

      toast({
        title: "Job Created",
        description: "The job has been successfully created.",
      });

      navigate("/job");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="details">Additional Details</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>

                  <Input
                    id="jobTitle"
                    type="text"
                    value={form.jobTitle}
                    onChange={e => setForm({ ...form, jobTitle: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="roleLevel">Role Level</Label>
                  <Select
                    value={form.roleLevel}
                    onValueChange={(value) =>
                      handleInputChange("roleLevel", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Junior</SelectItem>
                      <SelectItem value="mid">Mid-level</SelectItem>
                      <SelectItem value="senior">Senior</SelectItem>
                      <SelectItem value="lead">Lead</SelectItem>
                    </SelectContent>
                  </Select>

                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="client">Client</Label>
                  <Select
                    value={form.client}
                    onValueChange={(value) =>
                      handleInputChange("client", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="abc-company">ABC Company</SelectItem>
                      <SelectItem value="xyz-corp">XYZ Corp</SelectItem>
                    </SelectContent>
                  </Select>


                </div>
                <div className="space-y-2">
                  <Label htmlFor="function">Function</Label>
                  <Select
                    value={form.function}
                    onValueChange={(value) =>
                      handleInputChange("function", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <div className="relative">
                    <Input
                      id="city"
                      placeholder="City Name"
                      value={form.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                    />
                    <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <Input
                      id="location"
                      placeholder="Location"
                      value={form.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                    />
                    <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="deploymentType">Deployment Type</Label>
                  <Select
                    value={form.deploymentType}
                    onValueChange={(value) =>
                      handleInputChange("deploymentType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="permanent">Permanent</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="travelling">Travelling</Label>
                  <Select
                    value={form.travelling}
                    onValueChange={(value) =>
                      handleInputChange("travelling", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-travel">No Travel</SelectItem>
                      <SelectItem value="minimal">Minimal Travel</SelectItem>
                      <SelectItem value="frequent">Frequent Travel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="clientRecruiter">Client Recruiter</Label>
                <Input
                  id="clientRecruiter"
                  placeholder="Recruiter Name"
                  value={form.clientRecruiter}
                  onChange={(e) =>
                    handleInputChange("clientRecruiter", e.target.value)
                  }
                />
              </div>

              <div className="space-y-4">
                <Label>Job Type</Label>
                <div className="flex gap-2">
                  {["In-office", "Hybrid", "Remote"].map((type) => (
                    <Button
                      key={type}
                      variant={
                        form.jobType === type ? "default" : "outline"
                      }
                      onClick={() => handleInputChange("jobType", type)}
                      className={
                        form.jobType === type
                          ? "bg-blue-600 hover:bg-blue-700"
                          : ""
                      }
                    >
                      {type}
                    </Button>
                  ))}
                </div>
                {form.jobType === "Remote" && (
                  <p className="text-sm text-muted-foreground">
                    Remote jobs require employees to operate away from an
                    office.
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <Label>Job Description</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <CardContent className="p-4 text-center">
                      <FileText className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <h3 className="font-medium mb-1">Paste Existing JD</h3>
                      <p className="text-xs text-muted-foreground">
                        Copy and paste your existing job description
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <CardContent className="p-4 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <h3 className="font-medium mb-1">Upload Document</h3>
                      <p className="text-xs text-muted-foreground">
                        Upload PDF or DOCX files
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <CardContent className="p-4 text-center">
                      <Sparkles className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <h3 className="font-medium mb-1">AI Generate</h3>
                      <p className="text-xs text-muted-foreground">
                        Let AI help create your job description
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Showing Job description here...
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Label>AI Assistant</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Describe the role you're hiring for..."
                    className="flex-1"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Generate with AI
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <Label>Skills</Label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* {form.requiredSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1"
                    >
                      {skill}
                      <X
                        className="h-3 w-3 ml-2 cursor-pointer"
                        onClick={() => removeSkill(skill)}
                      />
                    </Badge>
                  ))} */}
                  <Select
                    value={form.requiredSkills}
                    onValueChange={(value) =>
                      handleInputChange("requiredSkills", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NodeJs">NodeJs</SelectItem>
                      <SelectItem value="React">React</SelectItem>
                      <SelectItem value="Python">Python</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* <Input placeholder="Add your Skills Here" /> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={form.gender}
                    onValueChange={(value) =>
                      handleInputChange("gender", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="noticePeriod">Notice Period</Label>
                  <Select
                    value={form.noticePeriod}
                    onValueChange={(value) =>
                      handleInputChange("noticePeriod", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="15-days">15 Days</SelectItem>
                      <SelectItem value="1-month">1 Month</SelectItem>
                      <SelectItem value="2-months">2 Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Employment Details</Label>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Salary Range</Label>
                    <div className="flex gap-2 items-center">
                      <Button
                        variant={
                          form.salaryRange.type === "Monthly"
                            ? "default"
                            : "outline"
                        }
                        onClick={() =>
                          handleInputChange("salaryRange", {
                            ...form.salaryRange,
                            type: "Monthly",
                          })
                        }
                      >
                        Monthly
                      </Button>
                      <Button
                        variant={
                          form.salaryRange.type === "Annual"
                            ? "default"
                            : "outline"
                        }
                        onClick={() =>
                          handleInputChange("salaryRange", {
                            ...form.salaryRange,
                            type: "Annual",
                          })
                        }
                        className={
                          form.salaryRange.type === "Annual"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : ""
                        }
                      >
                        Annual
                      </Button>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span>₹</span>
                      <Input
                        type="number"
                        value={form.salaryRange.min}
                        onChange={(e) =>
                          handleInputChange("salaryRange", {
                            ...form.salaryRange,
                            min: parseInt(e.target.value),
                          })
                        }
                      />
                      <span>to</span>
                      <span>₹</span>
                      <Input
                        type="number"
                        value={form.salaryRange.max}
                        onChange={(e) =>
                          handleInputChange("salaryRange", {
                            ...form.salaryRange,
                            max: parseInt(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="workExperience">
                        Work Experience (in years)
                      </Label>
                      <Input
                        id="workExperience"
                        value={form.workExperience}
                        onChange={(e) =>
                          handleInputChange("workExperience", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experienceLevel">Experience Level</Label>
                      <Select
                        value={form.experienceLevel}
                        onValueChange={(value) =>
                          handleInputChange("experienceLevel", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Experience Level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level</SelectItem>
                          <SelectItem value="mid">Mid Level</SelectItem>
                          <SelectItem value="senior">Senior Level</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="employmentType">Employment Type</Label>
                      <Select
                        value={form.employmentType}
                        onValueChange={(value) =>
                          handleInputChange("employmentType", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full-time">Full-time</SelectItem>
                          <SelectItem value="Part-time">Part-time</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="differentlyAble">Differently Able</Label>
                      <Select
                        value={form.differentlyAble}
                        onValueChange={(value) =>
                          handleInputChange("differentlyAble", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="No">No</SelectItem>
                          <SelectItem value="Yes">Yes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="languageKnown">Language Known</Label>
                    {/* <Select
                      value={form.languageKnown}
                      onValueChange={(value) =>
                        handleInputChange("languageKnown", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="No">No</SelectItem>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Hindi">Hindi</SelectItem>
                        <SelectItem value="Both">Both</SelectItem>
                      </SelectContent>
                    </Select> */}
                    <ReactSelect
                      isMulti
                      options={ languageoptions}
                      value={ languageoptions.filter((opt: any) => form.languageKnown.includes(opt.value))}
                      onChange={(selected: any) =>
                        handleInputChange("languageKnown", selected.map((opt: any) => opt.value))
                      }
                    />

                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Optional Details</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="education">Education</Label>
                    <ReactSelect
                      isMulti
                      options={educationOptions}
                      value={educationOptions.filter((opt: any) => form.education.includes(opt.value))}
                      onChange={(selected : any) =>
                        handleInputChange("education", selected.map((opt: any) => opt.value))
                      }
                    />

                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="numberOfOpenings">
                      Number of Openings (optional)
                    </Label>
                    <Input
                      id="numberOfOpenings"
                      type="number"
                      value={form.numberOfOpenings}
                      onChange={(e) =>
                        handleInputChange(
                          "numberOfOpenings",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="relocationAllowed">
                      Relocation Allowed
                    </Label>
                    <Select
                      value={form.relocationAllowed}
                      onValueChange={(value) =>
                        handleInputChange("relocationAllowed", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Age</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="number"
                        value={form.ageRange.min}
                        onChange={(e) =>
                          handleInputChange("ageRange", {
                            ...form.ageRange,
                            min: parseInt(e.target.value),
                          })
                        }
                        placeholder="20 Years"
                      />
                      <span>to</span>
                      <Input
                        type="number"
                        value={form.ageRange.max}
                        onChange={(e) =>
                          handleInputChange("ageRange", {
                            ...form.ageRange,
                            max: parseInt(e.target.value),
                          })
                        }
                        placeholder="24 Years"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-between pt-6 border-t">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Last saved 2 minutes ago</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate("/job")}>
            Cancel
          </Button>
          <Button variant="outline" onClick={handleSaveDraft}>
            Save as Draft
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handlePreview}
          >
            Preview & Proceed
          </Button>
          
          
          <Button
            className="bg-green-700 hover:bg-green-800"
            onClick={handleSubmitJob}
          >
            Submit Job
          </Button>
        </div>
      </div>
    </div>
  );
}
