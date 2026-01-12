import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">AI Agent Settings</h1>
        <p className="text-gray-600 mt-1">Global configurations and preferences</p>
      </div>

      <div className="space-y-6">
        {/* Model Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Model Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Model
              </label>
              <select
                defaultValue="sonnet-3.5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="sonnet-3.5">Claude Sonnet 3.5</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Temperature
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="1"
                defaultValue="0.3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Token Limit (per task)
              </label>
              <input
                type="number"
                defaultValue="4000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Global Disclaimers */}
        <Card>
          <CardHeader>
            <CardTitle>Global Disclaimers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mandatory Disclaimer
              </label>
              <textarea
                rows={3}
                defaultValue="This document is AI-generated and must be reviewed by a licensed clinician."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* PHI Handling */}
        <Card>
          <CardHeader>
            <CardTitle>PHI Handling Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Masking Rules
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-700">Mask patient names in logs</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-700">Mask patient IDs in logs</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-700">Auto-summarize patient data</span>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Role Permissions */}
        <Card>
          <CardHeader>
            <CardTitle>Role Permissions Matrix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Task Category</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Admin</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Doctor</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Nurse</th>
                  </tr>
                </thead>
                <tbody>
                  {["Documentation", "Clinical Assist", "Patient Communication"].map((category) => (
                    <tr key={category} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm text-gray-700">{category}</td>
                      <td className="py-3 px-4">
                        <input type="checkbox" defaultChecked className="rounded" />
                      </td>
                      <td className="py-3 px-4">
                        <input type="checkbox" defaultChecked className="rounded" />
                      </td>
                      <td className="py-3 px-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Document Save Destinations */}
        <Card>
          <CardHeader>
            <CardTitle>Document Save Destinations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm text-gray-700">Save to Clinical Notes</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm text-gray-700">Save to Documents</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm text-gray-700">Save to Encounter Attachments</span>
            </label>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button variant="primary">Save Settings</Button>
        </div>
      </div>
    </div>
  );
}
