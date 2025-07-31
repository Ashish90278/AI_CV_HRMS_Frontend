import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  Briefcase,
  UserCheck,
  MessageSquare,
  FileText,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import Logo from "@/assets/images/Galazy.png"

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "User Management", url: "/user", icon: Briefcase },
  { title: "Job Management", url: "/job", icon: Briefcase },
  { title: "Candidates", url: "/candidates", icon: UserCheck },
  { title: "Client Management", url: "/clients", icon: Building2 },
  { title: "Admin Settings", url: "/admin", icon: Settings },
  { title: "Quiz Repository", url: "/quiz", icon: FileText },
  { title: "Talent Pool", url: "/talent-pool", icon: Users },
];

export function AppSidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-primary text-accent-foreground font-medium"
      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";

  return (
    <Sidebar>
      <SidebarContent className="bg-sidebar-background">
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">GR</span>
            </div> */}
            <img src={Logo} alt="logo" />
            {!false && (
              <span className="font-semibold text-sidebar-foreground">Galaxy Recruit</span>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!false && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}