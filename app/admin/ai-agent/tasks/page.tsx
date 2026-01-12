import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { mockTasks } from "@/lib/mockData";
import Link from "next/link";

export default function TaskLibraryPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Task Library</h1>
          <p className="text-gray-600 mt-1">Manage your AI task catalog</p>
        </div>
        <Button variant="primary">Create Task</Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search tasks..."
              className="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Categories</option>
              <option value="documentation">Documentation</option>
              <option value="clinical_assist">Clinical Assist</option>
              <option value="patient_communication">Patient Communication</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="disabled">Disabled</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Visibility</option>
              <option value="doctor">Doctor</option>
              <option value="nurse">Nurse</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Task Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Tasks</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Enable Selected</Button>
              <Button variant="outline" size="sm">Disable Selected</Button>
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Task Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Category</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Visible To</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Last Updated</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Version</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockTasks.map((task) => (
                  <tr key={task.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="py-3 px-4">
                      <Link
                        href={`/admin/ai-agent/tasks/${task.id}`}
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        📄 {task.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {task.category.replace("_", " ")}
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={
                          task.status === "active"
                            ? "success"
                            : task.status === "draft"
                            ? "warning"
                            : "default"
                        }
                      >
                        {task.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-1">
                        {task.visibleTo.map((role) => (
                          <Badge key={role} variant="info" className="text-xs">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(task.lastUpdated).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      v{task.version}
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        ⋯
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
