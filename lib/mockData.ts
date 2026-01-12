import { Task, KPIData, AuditLog, Template } from "@/types";

export const mockKPIData: KPIData = {
  activeTasks: 12,
  draftTasks: 3,
  runs7d: 247,
  savedDocs7d: 189,
  avgTokensPerRun: 1250,
};

export const mockTasks: Task[] = [
  {
    id: "1",
    name: "Referral Letter",
    category: "documentation",
    status: "active",
    visibleTo: ["doctor"],
    version: "2.1",
    lastUpdated: "2024-01-15T10:30:00Z",
    createdBy: "admin",
    description: "Generate referral letters for specialists",
    specialty: "general",
  },
  {
    id: "2",
    name: "Medical Certificate",
    category: "documentation",
    status: "active",
    visibleTo: ["doctor"],
    version: "1.5",
    lastUpdated: "2024-01-14T14:20:00Z",
    createdBy: "admin",
    description: "Create medical certificates for patients",
  },
  {
    id: "3",
    name: "SOAP Note",
    category: "clinical_assist",
    status: "active",
    visibleTo: ["doctor", "nurse"],
    version: "3.0",
    lastUpdated: "2024-01-13T09:15:00Z",
    createdBy: "admin",
    description: "Generate structured SOAP notes",
  },
  {
    id: "4",
    name: "Patient Discharge Summary",
    category: "documentation",
    status: "draft",
    visibleTo: ["doctor"],
    version: "0.9",
    lastUpdated: "2024-01-12T16:45:00Z",
    createdBy: "admin",
    description: "Create discharge summaries",
  },
  {
    id: "5",
    name: "Medication Explanation",
    category: "patient_communication",
    status: "active",
    visibleTo: ["doctor", "nurse"],
    version: "1.2",
    lastUpdated: "2024-01-11T11:30:00Z",
    createdBy: "admin",
    description: "Explain medications to patients",
  },
];

export const mockRecentTasks: Task[] = [
  mockTasks[0],
  mockTasks[1],
  mockTasks[2],
];

export const mockMostUsedTasks: Task[] = [
  mockTasks[0],
  mockTasks[2],
  mockTasks[4],
];

export const mockAuditLogs: AuditLog[] = [
  {
    id: "log-1",
    timestamp: "2024-01-15T10:30:00Z",
    taskId: "1",
    taskName: "Referral Letter",
    userId: "user-1",
    userName: "Dr. Smith",
    result: "success",
    saved: true,
    tokensIn: 850,
    tokensOut: 420,
    duration: 1250,
  },
  {
    id: "log-2",
    timestamp: "2024-01-15T09:15:00Z",
    taskId: "2",
    taskName: "Medical Certificate",
    userId: "user-2",
    userName: "Dr. Jones",
    result: "success",
    saved: true,
    tokensIn: 620,
    tokensOut: 380,
    duration: 980,
  },
  {
    id: "log-3",
    timestamp: "2024-01-14T16:20:00Z",
    taskId: "3",
    taskName: "SOAP Note",
    userId: "user-1",
    userName: "Dr. Smith",
    result: "failed",
    saved: false,
    tokensIn: 1200,
    tokensOut: 0,
    duration: 500,
    error: "Invalid patient context",
  },
];

export const mockTemplates: Template[] = [
  {
    id: "tpl-1",
    name: "Standard Referral Prompt",
    type: "prompt_block",
    usedBy: 3,
    lastUpdated: "2024-01-10T10:00:00Z",
    content: {},
  },
  {
    id: "tpl-2",
    name: "Letter Output Layout",
    type: "output_layout",
    usedBy: 5,
    lastUpdated: "2024-01-08T14:30:00Z",
    content: {},
  },
  {
    id: "tpl-3",
    name: "Patient Input Set",
    type: "input_set",
    usedBy: 2,
    lastUpdated: "2024-01-05T09:15:00Z",
    content: {},
  },
];
