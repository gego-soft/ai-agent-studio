import { Card, CardContent } from "@/components/ui/Card";

interface KPICardProps {
  title: string;
  value: number | string;
  description: string;
}

export function KPICard({ title, value, description }: KPICardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-sm font-medium text-gray-600">{title}</div>
        <div className="mt-2 text-2xl font-bold text-gray-900">{value}</div>
        <div className="mt-1 text-xs text-gray-500">{description}</div>
      </CardContent>
    </Card>
  );
}
