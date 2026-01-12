import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { mockAuditLogs } from "@/lib/mockData";
import Link from "next/link";

export default function AuditLogsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Audit & Usage Logs</h1>
        <p className="text-gray-600 mt-1">Monitor AI executions and compliance</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Tasks</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Users</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Status</option>
              <option value="success">Success</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Execution Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Timestamp</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Task</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">User</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Result</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Saved</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Tokens In/Out</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Duration</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Error</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockAuditLogs.map((log) => (
                  <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(log.timestamp).toLocaleString()}
                    </td>
                    <td className="py-3 px-4">
                      <Link
                        href={`/admin/ai-agent/logs/${log.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {log.taskName}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{log.userName}</td>
                    <td className="py-3 px-4">
                      <Badge variant={log.result === "success" ? "success" : "danger"}>
                        {log.result}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={log.saved ? "success" : "default"}>
                        {log.saved ? "Y" : "N"}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {log.tokensIn} / {log.tokensOut}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {log.duration}ms
                    </td>
                    <td className="py-3 px-4 text-sm text-red-600">
                      {log.error || "-"}
                    </td>
                    <td className="py-3 px-4">
                      <Link
                        href={`/admin/ai-agent/logs/${log.id}`}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        View
                      </Link>
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
