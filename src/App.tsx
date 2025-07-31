import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Dashboard from "./pages/Dashboard";
import JobManagement from "./pages/JobManagement";
import JobCreate from "./pages/JobCreate";
import CandidateSearch from "./pages/CandidateSearch";
import CandidateTable from "./pages/CandidateTable";
import CandidateProfile from "./pages/CandidateProfile";
import AddCandidate from "./pages/AddCandidate";
import ClientManagement from "./pages/ClientManagement";
import AdminSettings from "./pages/AdminSettings";
import QuizRepository from "./pages/QuizRepository";
import QuizCreate from "./pages/QuizCreate";
import QuizPlatform from "./pages/QuizPlatform";
import TalentPool from "./pages/TalentPool";
import NotFound from "./pages/NotFound";
import UserManagement from "./pages/UserManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-background">
            <AppSidebar />
            <main className="flex-1 flex flex-col">
              {/* Header */}
              <header className="h-16 border-b border-border bg-background flex items-center justify-between px-6">
                <div className="flex items-center gap-4">
                  <SidebarTrigger />
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search..."
                      className="pl-10 w-80"
                    />
                  </div>
                  <Button variant="ghost" size="sm">
                    <Bell className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>RB</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Rahul B</span>
                  </div>
                </div>
              </header>

              {/* Main Content */}
              <div className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/user" element={<UserManagement />} />
                  <Route path="/job" element={<JobManagement />} />
                  <Route path="/job/create" element={<JobCreate />} />
                  <Route path="/candidates" element={<CandidateSearch />} />
                  <Route path="/candidates/table" element={<CandidateTable />} />
                  <Route path="/candidates/profile/:id" element={<CandidateProfile />} />
                  <Route path="/candidates/add" element={<AddCandidate />} />
                  <Route path="/clients" element={<ClientManagement />} />
                  <Route path="/admin" element={<AdminSettings />} />
                  <Route path="/quiz" element={<QuizRepository />} />
                  <Route path="/quiz/create" element={<QuizCreate />} />
                  <Route path="/quiz/platform/:id" element={<QuizPlatform />} />
                  <Route path="/talent-pool" element={<TalentPool />} />
                  <Route path="/talent-pool/:folderId" element={<TalentPool />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
