// Core data models for AI Agent Studio

export type TaskStatus = "draft" | "active" | "disabled";
export type TaskCategory = "documentation" | "clinical_assist" | "patient_communication";
export type UserRole = "admin" | "doctor" | "nurse";
export type InputType = "text" | "textarea" | "date" | "select" | "lookup" | "file";
export type OutputType = "letter" | "certificate" | "note" | "table" | "explanation";

export interface Task {
  id: string;
  name: string;
  category: TaskCategory;
  status: TaskStatus;
  visibleTo: UserRole[];
  version: string;
  lastUpdated: string;
  createdBy: string;
  description?: string;
  specialty?: string;
}

export interface TaskInput {
  id: string;
  label: string;
  key: string;
  type: InputType;
  required: boolean;
  options?: string[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
  helperText?: string;
  order: number;
}

export interface PatientDataBinding {
  demographics: boolean;
  encounterNotes: boolean;
  diagnosis: boolean;
  medications: boolean;
  allergies: boolean;
  vitals: boolean;
  investigations: boolean;
  autoSummarize: boolean;
  missingDataPolicy: "warn" | "block" | "allow";
}

export interface PromptTemplate {
  systemRole: string;
  taskGoal: string;
  patientContextPlaceholder: string;
  taskInputsPlaceholder: string;
  outputRules: string;
  safetyRules: string;
}

export interface OutputFormat {
  type: OutputType;
  sections: string[];
  toneConstraints?: string;
  lengthConstraints?: string;
  disclaimers: string[];
}

export interface Guardrails {
  allowDiagnosis: boolean;
  allowPrescription: boolean;
  allowOverrideClinician: boolean;
  allowFabricateData: boolean;
  missingDataMessage: string;
  mandatoryDisclaimer: string;
}

export interface TaskDefinition extends Task {
  inputs: TaskInput[];
  patientDataBinding: PatientDataBinding;
  promptTemplate: PromptTemplate;
  outputFormat: OutputFormat;
  guardrails: Guardrails;
}

export interface TaskVersion {
  version: string;
  publishedAt: string;
  publishedBy: string;
  notes?: string;
  changes: string[];
}

export interface AuditLog {
  id: string;
  timestamp: string;
  taskId: string;
  taskName: string;
  userId: string;
  userName: string;
  result: "success" | "failed";
  saved: boolean;
  tokensIn: number;
  tokensOut: number;
  duration: number;
  error?: string;
  patientId?: string;
}

export interface Template {
  id: string;
  name: string;
  type: "prompt_block" | "output_layout" | "input_set";
  usedBy: number;
  lastUpdated: string;
  content: Record<string, unknown>;
}

export interface KPIData {
  activeTasks: number;
  draftTasks: number;
  runs7d: number;
  savedDocs7d: number;
  avgTokensPerRun: number;
}
