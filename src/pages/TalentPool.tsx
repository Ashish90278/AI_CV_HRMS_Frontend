import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { talentPoolFolders, talentPoolSubFolders } from "@/data/mockData";
import { useNavigate, useParams } from "react-router-dom";

export default function TalentPool() {
  const { folderId } = useParams();
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState(folderId ? "subfolder" : "main");

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const handleFolderClick = (folder: any) => {
    if (folder.type === "default" && folder.id === 1) {
      navigate("/talent-pool/1");
      setCurrentView("subfolder");
    }
  };

  const renderMainView = () => (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Talent Pool</h1>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create New Folder
        </Button>
      </div>

      {/* Folder Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {talentPoolFolders.map((folder) => (
          <Card 
            key={folder.id} 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleFolderClick(folder)}
          >
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">{folder.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {folder.description}
              </p>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-foreground">
                  {formatNumber(folder.candidateCount)} Candidates
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSubFolderView = () => (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <Button 
            variant="ghost" 
            onClick={() => {
              navigate("/talent-pool");
              setCurrentView("main");
            }}
            className="mb-2"
          >
            ← Back to Talent Pool
          </Button>
          <h1 className="text-2xl font-bold">Default Folder</h1>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create New Folder
        </Button>
      </div>

      {/* Sub Folder Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {talentPoolSubFolders.map((folder) => (
          <Card key={folder.id} className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">{folder.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {folder.description}
              </p>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-foreground">
                  {formatNumber(folder.candidateCount)} Candidates
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return currentView === "main" ? renderMainView() : renderSubFolderView();
}