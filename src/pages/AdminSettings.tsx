import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Settings, Info } from "lucide-react";
import { clientsData, modulePermissions } from "@/data/mockData";

export default function AdminSettings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [selectedClient, setSelectedClient] = useState(clientsData[0]);
  const [permissions, setPermissions] = useState(modulePermissions);

  const filteredClients = clientsData.filter(client =>
    client.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const togglePermission = (permissionId: string) => {
    setPermissions(prev =>
      prev.map(permission =>
        permission.id === permissionId
          ? { ...permission, enabled: !permission.enabled }
          : permission
      )
    );
  };

  const coreFeatures = permissions.filter(p => p.category === "Core Features");
  const advancedTools = permissions.filter(p => p.category === "Advanced Tools");

  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Admin Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Select Client */}
        <Card>
          <CardHeader>
            <CardTitle>Select Client</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search clients..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="showActive"
                checked={showActiveOnly}
                onCheckedChange={(checked) => setShowActiveOnly(checked === true)}
              />
              <label htmlFor="showActive" className="text-sm">Show Active Clients Only</label>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredClients.map((client) => (
                <div
                  key={client.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedClient.id === client.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:bg-muted"
                  }`}
                  onClick={() => setSelectedClient(client)}
                >
                  <div className="font-medium">{client.clientName}</div>
                  <div className="text-sm text-muted-foreground">{client.industry}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Module Access Permissions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Module Access Permissions for {selectedClient.clientName}</CardTitle>
            <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-800">
                Configure module visibility for this client. Changes affect what features their hiring team can access.
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Core Features */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-muted-foreground bg-muted p-3 rounded-lg">
                Core Features
              </h3>
              <div className="space-y-4">
                {coreFeatures.map((permission) => (
                  <div key={permission.id} className="flex items-center justify-between py-2">
                    <div className="flex-1">
                      <h4 className="font-medium">{permission.title}</h4>
                      <p className="text-sm text-muted-foreground">{permission.description}</p>
                    </div>
                    <Switch
                      checked={permission.enabled}
                      onCheckedChange={() => togglePermission(permission.id)}
                      className="ml-4"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Tools */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-muted-foreground bg-muted p-3 rounded-lg">
                Advanced Tools
              </h3>
              <div className="space-y-4">
                {advancedTools.map((permission) => (
                  <div key={permission.id} className="flex items-center justify-between py-2">
                    <div className="flex-1">
                      <h4 className="font-medium">{permission.title}</h4>
                      <p className="text-sm text-muted-foreground">{permission.description}</p>
                    </div>
                    <Switch
                      checked={permission.enabled}
                      onCheckedChange={() => togglePermission(permission.id)}
                      className="ml-4"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-6 border-t">
              <Button variant="outline" className="flex-1">
                Reset to Default
              </Button>
              <Button className="flex-1">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}