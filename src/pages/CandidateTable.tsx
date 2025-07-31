import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, FolderPlus } from "lucide-react";
import { candidatesData } from "@/data/mockData";

export default function CandidateTable() {
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);

  const toggleCandidate = (id: number) => {
    setSelectedCandidates(prev => 
      prev.includes(id) 
        ? prev.filter(candidateId => candidateId !== id)
        : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedCandidates.length === candidatesData.length) {
      setSelectedCandidates([]);
    } else {
      setSelectedCandidates(candidatesData.map(c => c.id));
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Sr. Manager - Company Secretary & Legal</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            Data Fields
          </Button>
          <Button variant="default" size="sm">
            Save
          </Button>
          <Button variant="outline" size="sm">
            <FolderPlus className="h-4 w-4 mr-2" />
            Create Folder
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-12">
                <Checkbox 
                  checked={selectedCandidates.length === candidatesData.length}
                  onCheckedChange={selectAll}
                />
              </TableHead>
              <TableHead className="font-semibold">
                Candidate Name
                <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0">
                  ⚙️
                </Button>
              </TableHead>
              <TableHead className="font-semibold">
                Company
                <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0">
                  ⚙️
                </Button>
              </TableHead>
              <TableHead className="font-semibold">
                Current Designation
                <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0">
                  ⚙️
                </Button>
              </TableHead>
              <TableHead className="font-semibold">
                Industry
                <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0">
                  ⚙️
                </Button>
              </TableHead>
              <TableHead className="font-semibold">
                Candidate Location
                <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0">
                  ⚙️
                </Button>
              </TableHead>
              <TableHead className="font-semibold">
                Experience
                <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0">
                  ⚙️
                </Button>
              </TableHead>
              <TableHead className="font-semibold">
                Tenure in Present Company
                <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0">
                  ⚙️
                </Button>
              </TableHead>
              <TableHead className="font-semibold">
                Highest Education
                <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0">
                  ⚙️
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidatesData.map((candidate) => (
              <TableRow key={candidate.id} className="hover:bg-gray-50">
                <TableCell>
                  <Checkbox 
                    checked={selectedCandidates.includes(candidate.id)}
                    onCheckedChange={() => toggleCandidate(candidate.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="font-medium">{candidate.name}</div>
                </TableCell>
                <TableCell>{candidate.company}</TableCell>
                <TableCell>{candidate.currentDesignation}</TableCell>
                <TableCell>{candidate.industry}</TableCell>
                <TableCell>{candidate.candidateLocation}</TableCell>
                <TableCell>{candidate.experience}</TableCell>
                <TableCell>{candidate.tenureInPresentCompany}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                    {candidate.highestEducation}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}