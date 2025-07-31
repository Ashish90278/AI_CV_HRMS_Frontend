import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface ChartCardProps {
  title: string;
  data: ChartData[];
  className?: string;
}

export function ChartCard({ title, data, className }: ChartCardProps) {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-end justify-between gap-2 mb-4">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2 flex-1"
            >
              <div className="text-xs text-muted-foreground">{item.value}</div>
              <div
                className="w-full rounded-t-md transition-all duration-300"
                style={{
                  backgroundColor: item.color,
                  height: `${(item.value / maxValue) * 100}%`,
                  minHeight: "20px",
                }}
              />
              <div className="text-xs text-muted-foreground text-center">
                {item.name}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-muted-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
