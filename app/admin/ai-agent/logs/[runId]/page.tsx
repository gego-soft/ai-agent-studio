import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { mockAuditLogs } from "@/lib/mockData";

export default async function LogDetailPage({
  params,
}: {
  params: Promise<{ runId: string }>;
}) {
  const { runId } = await params;
  const log = mockAuditLogs.find((l) => l.id === runId) || mockAuditLogs[0];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Log Details</h1>
          <p className="text-gray-600 mt-1">Execution run: {runId}</p>
        </div>
        <Button variant="outline">Retry</Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Execution Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Task:</span>
                <span className="text-sm font-medium">{log.taskName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">User:</span>
                <span className="text-sm font-medium">{log.userName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Timestamp:</span>
                <span className="text-sm font-medium">
                  {new Date(log.timestamp).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Result:</span>
                <Badge variant={log.result === "success" ? "success" : "danger"}>
                  {log.result}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Saved:</span>
                <Badge variant={log.saved ? "success" : "default"}>
                  {log.saved ? "Yes" : "No"}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Tokens In:</span>
                <span className="text-sm font-medium">{log.tokensIn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Tokens Out:</span>
                <span className="text-sm font-medium">{log.tokensOut}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Duration:</span>
                <span className="text-sm font-medium">{log.duration}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Cost Estimate:</span>
                <span className="text-sm font-medium">$0.00</span>
              </div>
            </CardContent>
          </Card>

          {log.error && (
            <Card>
              <CardHeader>
                <CardTitle>Error</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
                  {log.error}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Inputs Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded font-mono">
                Input data (masked for privacy)
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Context Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {["Demographics", "Diagnosis", "Medications"].map((source) => (
                  <div key={source} className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly className="rounded" />
                    <span className="text-sm text-gray-700">{source}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Output</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded min-h-[200px]">
                {log.result === "success" ? (
                  "Generated output text would appear here..."
                ) : (
                  "No output generated due to error"
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
