"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { mockTasks } from "@/lib/mockData";

const tabs = [
  { id: "info", label: "Task Info" },
  { id: "inputs", label: "Inputs" },
  { id: "patient-data", label: "Patient Data Binding" },
  { id: "prompt", label: "Prompt Template" },
  { id: "output", label: "Output Format" },
  { id: "guardrails", label: "Guardrails" },
  { id: "test", label: "Test & Preview" },
  { id: "history", label: "Version History" },
];

export default function TaskBuilderPage({
  params,
}: {
  params: { taskId: string };
}) {
  const { taskId } = params;
  const [activeTab, setActiveTab] = useState("info");
  
  const task = mockTasks.find((t) => t.id === taskId) || mockTasks[0];

  return (
    <div className="p-6 flex gap-6">
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-gray-900">{task.name}</h1>
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
          </div>
          <p className="text-gray-600">{task.description || "No description"}</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <Card>
          <CardContent className="p-6">
            {activeTab === "info" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Task Name
                  </label>
                  <input
                    type="text"
                    defaultValue={task.name}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    defaultValue={task.category}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="documentation">Documentation</option>
                    <option value="clinical_assist">Clinical Assist</option>
                    <option value="patient_communication">Patient Communication</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Visible To
                  </label>
                  <div className="flex gap-2">
                    {["admin", "doctor", "nurse"].map((role) => (
                      <label key={role} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked={task.visibleTo.includes(role as any)}
                          className="rounded"
                        />
                        <span className="text-sm text-gray-700 capitalize">{role}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "inputs" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Input Fields</h3>
                  <Button variant="primary" size="sm">Add Input</Button>
                </div>
                <p className="text-gray-600">Configure the structured inputs for this task.</p>
                <div className="border border-gray-200 rounded-lg p-4 text-center text-gray-500">
                  Input fields editor will be implemented here
                </div>
              </div>
            )}

            {activeTab === "patient-data" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Patient Data Binding</h3>
                <p className="text-gray-600">Configure which patient data is included in AI context.</p>
                <div className="space-y-3">
                  {[
                    "Demographics",
                    "Encounter Notes",
                    "Diagnosis",
                    "Medications",
                    "Allergies",
                    "Vitals",
                    "Investigations",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "prompt" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Prompt Template</h3>
                <p className="text-gray-600">Configure the structured prompt blocks.</p>
                <div className="border border-gray-200 rounded-lg p-4 text-center text-gray-500">
                  Prompt template editor will be implemented here
                </div>
              </div>
            )}

            {activeTab === "output" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Output Format</h3>
                <p className="text-gray-600">Define the output structure and constraints.</p>
                <div className="border border-gray-200 rounded-lg p-4 text-center text-gray-500">
                  Output format editor will be implemented here
                </div>
              </div>
            )}

            {activeTab === "guardrails" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Guardrails & Safety</h3>
                <p className="text-gray-600">Configure safety constraints and rules.</p>
                <div className="space-y-3">
                  {[
                    "AI must not diagnose",
                    "AI must not prescribe",
                    "AI must not override clinician judgment",
                    "AI must not fabricate missing data",
                  ].map((rule) => (
                    <label key={rule} className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-gray-700">{rule}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "test" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Test & Preview</h3>
                <p className="text-gray-600">Test the task with sample data.</p>
                <div className="border border-gray-200 rounded-lg p-4 text-center text-gray-500">
                  Testing sandbox will be implemented here
                </div>
              </div>
            )}

            {activeTab === "history" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Version History</h3>
                <p className="text-gray-600">View and manage task versions.</p>
                <div className="border border-gray-200 rounded-lg p-4 text-center text-gray-500">
                  Version history will be implemented here
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 space-y-4">
        <Card className="sticky top-6">
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                defaultValue={task.status}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="draft">Draft</option>
                <option value="active">Active</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="primary" className="w-full">Save</Button>
              <Button variant="outline" className="w-full">Save as Draft</Button>
              <Button variant="secondary" className="w-full">Publish</Button>
              <Button variant="ghost" className="w-full">Duplicate</Button>
              <Button variant="ghost" className="w-full">Export</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
