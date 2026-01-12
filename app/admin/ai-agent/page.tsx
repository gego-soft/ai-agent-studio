import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { KPICard } from "@/components/admin/Dashboard/KPICard";
import { TaskList } from "@/components/admin/Dashboard/TaskList";
import { mockKPIData, mockRecentTasks, mockMostUsedTasks } from "@/lib/mockData";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Overview of AI Agent Studio</p>
        </div>
        <div className="flex gap-3">
          <Button variant="primary">Create Task</Button>
          <Button variant="outline">Open Sandbox</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <KPICard
          title="Active Tasks"
          value={mockKPIData.activeTasks}
          description="Currently active"
        />
        <KPICard
          title="Draft Tasks"
          value={mockKPIData.draftTasks}
          description="In draft"
        />
        <KPICard
          title="Runs (7d)"
          value={mockKPIData.runs7d}
          description="Last 7 days"
        />
        <KPICard
          title="Saved Docs (7d)"
          value={mockKPIData.savedDocs7d}
          description="Last 7 days"
        />
        <KPICard
          title="Avg Tokens/Run"
          value={mockKPIData.avgTokensPerRun}
          description="Average usage"
        />
      </div>

      {/* Task Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recently Edited Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskList tasks={mockRecentTasks} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Most Used Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskList tasks={mockMostUsedTasks} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
