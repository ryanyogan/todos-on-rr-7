import { CheckCircle, Circle, PlusCircle, Trash2 } from "react-feather";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todo List - RR7" },
    { name: "description", content: "Todo List in RR7" },
  ];
}

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export default function Home() {
  const tasks: Task[] = [];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-3xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Todo List</h1>
          <p className="text-gray-600">
            Stay organized and boost your productivity
          </p>
        </div>

        {/* Add Todo Form */}
        <form className="relative">
          <input
            type="text"
            placeholder="Add a new task..."
            className="w-full px-6 py-4 text-lg rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <PlusCircle size={24} />
          </button>
        </form>

        {/* Filters */}
        <div className="flex justify-center space-x-4">
          {["all", "active", "completed"].map((filterType) => (
            <button
              key={filterType}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                "all" === filterType
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filterType}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {tasks.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No tasks found. Add one to get started!
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {tasks.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center gap-4 px-6 py-4 group hover:bg-gray-50 transition-colors"
                >
                  <button
                    className={`flex-shrink-0 ${
                      todo.completed
                        ? "text-green-500"
                        : "text-gray-400 hover:text-blue-500"
                    }`}
                  >
                    {todo.completed ? (
                      <CheckCircle size={24} />
                    ) : (
                      <Circle size={24} />
                    )}
                  </button>
                  <span
                    className={`flex-grow text-lg ${
                      todo.completed
                        ? "text-gray-400 line-through"
                        : "text-gray-700"
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all">
                    <Trash2 size={20} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {tasks.length > 0 && (
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>10 items left</span>
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
              Clear completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
