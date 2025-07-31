import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Edit2, Trash2, User, Briefcase, Phone, Mail, Building, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { clientsData, hiringManagersData } from "@/data/mockData";

export default function ClientManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const filteredClients = clientsData.filter(client =>
    client.clientName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedIndustry === "all" || client.industry === selectedIndustry)
  );

  const industries = ["all", ...Array.from(new Set(clientsData.map(client => client.industry)))];

  return (
    <div className="space-y-6 p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground">
        <span>Dashboard</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span>Management</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-foreground">Clients</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Client & Hiring Manager Management</h1>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add New Client Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Client</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="clientName">Client Name *</Label>
              <Input id="clientName" placeholder="Enter client name" />
            </div>
            
            <div>
              <Label htmlFor="industry">Industry *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Enter client name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IT">IT</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="city">City</Label>
              <div className="relative">
                <Input id="city" placeholder="Address" className="pl-8" />
                <Building className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <Label htmlFor="websiteUrl">Website URL</Label>
              <div className="relative">
                <Input id="websiteUrl" placeholder="https://" defaultValue="https://" className="pl-8" />
                <Globe className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <Label htmlFor="emailDomain">Client Email Domain</Label>
              <div className="relative">
                <Input id="emailDomain" placeholder="@example.com" className="pl-8" />
                <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <Label htmlFor="gstNumber">GST / Registration Number</Label>
              <div className="relative">
                <Input id="gstNumber" placeholder="Enter registration number" className="pl-8" />
                <Briefcase className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Button size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  Upload
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="notes">Notes / Description</Label>
              <Textarea id="notes" placeholder="Enter additional notes" rows={3} />
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="flex-1">Add Client</Button>
              <Button variant="outline" className="flex-1">Reset Form</Button>
            </div>
          </CardContent>
        </Card>

        {/* Hiring Managers Form */}
        <Card>
          <CardHeader>
            <CardTitle>Hiring Managers for Client</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <div className="relative">
                <Input id="fullName" placeholder="Enter full name" className="pl-8" />
                <User className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <Label htmlFor="designation">Designation</Label>
              <div className="relative">
                <Input id="designation" placeholder="Enter designation" className="pl-8" />
                <Briefcase className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <div className="relative">
                <Input id="phoneNumber" placeholder="Enter phone number" className="pl-8" />
                <Phone className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <div className="relative">
                <Input id="email" placeholder="Enter email address" className="pl-8" />
                <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="alternatePhone">Alternate Phone Number</Label>
              <div className="relative">
                <Input id="alternatePhone" placeholder="Enter phone number" className="pl-8" />
                <Phone className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <div className="relative">
                <Input id="linkedin" placeholder="Enter LinkedIn URL" className="pl-8" />
                <Building className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="flex-1">Add Hiring Manager</Button>
              <Button variant="outline" className="flex-1">Clear Fields</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Clients List */}
      <Card>
        <CardHeader>
          <CardTitle>Clients List</CardTitle>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search clients..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry === "all" ? "All Industries" : industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Total Hiring Managers</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.clientName}</TableCell>
                  <TableCell>{client.industry}</TableCell>
                  <TableCell>{client.location}</TableCell>
                  <TableCell>{client.totalHiringManagers}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {/* Pagination */}
          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-muted-foreground">
              Showing 1 to 3 of 3 entries
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}