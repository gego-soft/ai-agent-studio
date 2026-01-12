import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { mockTasks } from "@/lib/mockData";

export default function SandboxPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Testing Sandbox</h1>
        <p className="text-gray-600 mt-1">Test tasks without touching real patient data</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left: Patient Context Editor */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Context</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mode
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="mock">Mock Patient</option>
                <option value="paste">Paste Patient Summary</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patient Summary
              </label>
              <textarea
                rows={12}
                defaultValue="45-year-old male
Chief complaint: Knee pain (2 weeks)
Diagnosis: Suspected osteoarthritis
Medications: Paracetamol PRN
Allergies: None"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              />
            </div>
            <Button variant="outline" className="w-full">Generate Mock Patient</Button>
          </CardContent>
        </Card>

        {/* Middle: Task Selection & Inputs */}
        <Card>
          <CardHeader>
            <CardTitle>Task & Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Task
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Choose a task...</option>
                {mockTasks.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Input Field 1
                </label>
                <input
                  type="text"
                  placeholder="Enter value..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Input Field 2
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter value..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="primary" className="flex-1">Run</Button>
              <Button variant="outline" className="flex-1">Regenerate</Button>
            </div>
          </CardContent>
        </Card>

        {/* Right: Output Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Output Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-gray-600 space-y-1">
              <div>Tokens: <span className="font-medium">0 / 0</span></div>
              <div>Cost: <span className="font-medium">$0.00</span></div>
              <div>Duration: <span className="font-medium">0ms</span></div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 min-h-[300px] bg-gray-50">
              <p className="text-gray-500 text-sm">Output will appear here after running a task...</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">Copy</Button>
              <Button variant="outline" size="sm" className="flex-1">Export</Button>
              <Button variant="outline" size="sm" className="flex-1">Save Example</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
