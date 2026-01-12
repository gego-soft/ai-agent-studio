import Link from "next/link";
import { Task } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks available
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <Link
          key={task.id}
          href={`/admin/ai-agent/tasks/${task.id}`}
          className="block p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">{task.name}</span>
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
              <div className="text-sm text-gray-500 mt-1">
                {task.category.replace("_", " ")} • v{task.version}
              </div>
            </div>
            <div className="text-xs text-gray-400">
              {new Date(task.lastUpdated).toLocaleDateString()}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
