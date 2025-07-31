import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, X, Plus } from "lucide-react";

export default function AddCandidate() {
  const [selectedTags, setSelectedTags] = useState(["React", "Node.js", "Full Stack"]);
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (newTag.trim() && !selectedTags.includes(newTag.trim())) {
      setSelectedTags([...selectedTags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <span>Dashboard</span>
          <span>›</span>
          <span>Candidates</span>
          <span>›</span>
          <span className="text-foreground">Add New</span>
        </div>

        <h1 className="text-2xl font-bold mb-8">Add New Candidate</h1>

        <div className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-3">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
                <div>
                  <Label htmlFor="altPhone">Alternate Phone Number</Label>
                  <Input id="altPhone" placeholder="Enter phone number" />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter city" />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="Enter state" />
                </div>
                <div>
                  <Label htmlFor="challenged">Physically Challenged</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="notWorking">Not Working</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="language">Language Known</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="industry">Present Industry</Label>
                  <Input id="industry" placeholder="Enter present industry" />
                </div>
                <div>
                  <Label htmlFor="engaged">Engaged</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="age">Completed Age</Label>
                  <Input id="age" placeholder="Enter Age" />
                </div>
                <div className="md:col-span-3">
                  <Label htmlFor="linkedin">LinkedIn Link</Label>
                  <Input id="linkedin" placeholder="Enter URL" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upload Resume */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4 mb-6">
                <Button variant="outline">Upload Resume</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Upload Resume</Button>
              </div>
              
              <div className="space-y-4">
                <Label>Resume</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <div className="text-lg mb-2">Drag & drop your resume or click to browse</div>
                  <div className="text-sm text-muted-foreground mb-4">Supported formats: PDF, DOCX</div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Upload Resume</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Details */}
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="appliedFor">Applied For</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select job position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Senior Frontend Developer</SelectItem>
                    <SelectItem value="backend">Senior Backend Developer</SelectItem>
                    <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="currentCTC">Fixed Annual CTC</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-muted-foreground">₹</span>
                    <Input id="currentCTC" placeholder="Enter current CTC" className="pl-8" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="expectedCTC">Expected CTC</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-muted-foreground">₹</span>
                    <Input id="expectedCTC" placeholder="Enter expected CTC" className="pl-8" />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="noticePeriod">Notice Period</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select notice period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="15days">15 Days</SelectItem>
                    <SelectItem value="30days">30 Days</SelectItem>
                    <SelectItem value="60days">60 Days</SelectItem>
                    <SelectItem value="90days">90 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Education & Experience */}
          <Card>
            <CardHeader>
              <CardTitle>Education & Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="basicQualification">Basic Qualification</Label>
                  <Input id="basicQualification" placeholder="Enter highest qualification" />
                </div>
                <div>
                  <Label htmlFor="totalExperience">Total Experience</Label>
                  <Input id="totalExperience" placeholder="Enter total experience" />
                </div>
                <div>
                  <Label htmlFor="highestQualification">Highest Qualification</Label>
                  <Input id="highestQualification" placeholder="Enter highest qualification" />
                </div>
              </div>

              <div>
                <Label htmlFor="skills">Skills</Label>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {selectedTags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="px-3 py-1">
                        {tag}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-2 h-auto p-0 text-muted-foreground hover:text-foreground"
                          onClick={() => removeTag(tag)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter skills (separated by commas)"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTag()}
                    />
                    <Button onClick={addTag} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Add tags (press Enter to add)
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="certifications">Certifications</Label>
                <Input id="certifications" placeholder="Enter Certifications (optional)" />
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="recruiterNotes">Recruiter Notes</Label>
                <Textarea 
                  id="recruiterNotes" 
                  placeholder="Enter any additional notes..."
                  rows={4}
                />
              </div>

              <div>
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      {tag}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2 h-auto p-0 text-muted-foreground hover:text-foreground"
                        onClick={() => removeTag(tag)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add tags (press Enter to add)"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  />
                  <Button onClick={addTag} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="addAnother" />
              <Label htmlFor="addAnother" className="text-sm">
                Add another candidate after saving
              </Label>
              <Button variant="link" className="text-blue-600 p-0 h-auto">
                Import Bulk Candidates
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Save Candidate</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}