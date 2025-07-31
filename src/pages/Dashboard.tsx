import { MetricCard } from "@/components/MetricCard";
import { ChartCard } from "@/components/ChartCard";
import { 
  dashboardStats, 
  recruitmentFunnelData, 
  applicationSourcesData, 
  clientDynamicsData,
  additionalMetrics 
} from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FileText, Star } from "lucide-react";

export default function Dashboard() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "calendar":
        return <Calendar className="h-4 w-4" />;
      case "document":
        return <FileText className="h-4 w-4" />;
      case "star":
        return <Star className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Good Morning, Admin</h1>
      </div>

      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Candidate Pool"
          value={dashboardStats.candidatePool.value}
          change={dashboardStats.candidatePool.change}
          trend={dashboardStats.candidatePool.trend as "up" | "down"}
          className="border-l-4 border-l-green-500"
        />
        <MetricCard
          title="Open Jobs"
          value={dashboardStats.openJobs.value}
          change={dashboardStats.openJobs.change}
          trend={dashboardStats.openJobs.trend as "up" | "down"}
          className="border-l-4 border-l-blue-500"
        />
        <MetricCard
          title="Total Shortlisted"
          value={dashboardStats.totalShortlisted.value}
          change={dashboardStats.totalShortlisted.change}
          trend={dashboardStats.totalShortlisted.trend as "up" | "down"}
          className="border-l-4 border-l-red-500"
        />
        <MetricCard
          title="Total Joined"
          value={dashboardStats.totalJoined.value}
          change={dashboardStats.totalJoined.change}
          trend={dashboardStats.totalJoined.trend as "up" | "down"}
          className="border-l-4 border-l-green-500"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard
          title="Recruitment Funnel"
          data={recruitmentFunnelData}
        />
        <ChartCard
          title="Application Sources"
          data={applicationSourcesData}
        />
        <ChartCard
          title="Client Dynamics"
          data={clientDynamicsData}
        />
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {additionalMetrics.map((metric) => (
          <Card key={metric.id}>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {getIcon(metric.icon)}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium text-foreground">
                    {metric.title}
                  </h3>
                  {metric.subtitle && (
                    <p className="text-xs text-muted-foreground mb-2">
                      {metric.subtitle}
                    </p>
                  )}
                  <div className="text-xl font-bold">{metric.value}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}