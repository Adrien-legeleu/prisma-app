import { getAllTasks } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";

export default async function TaskTab() {
  const tasks = await getAllTasks();
  return (
    <div>
      {tasks.length === 0 ? (
        <p>Aucun tache</p>
      ) : (
        <table className="max-w-[700px] m-auto border-collapse border border-gray-200">
          <thead>
            <th className="border-gray-300 px-4 py-2">ID</th>
            <th className="border-gray-300 px-4 py-2">Task</th>
            <th className="border-gray-300 px-4 py-2">Complete</th>
            <th className="border-gray-300 px-4 py-2">Actions</th>
          </thead>
          <tbody>
            {tasks.map((task) => {
              return (
                <tr key={task.id}>
                  <td className="border-gray-300 px-4 py-2">{task.id}</td>
                  <td className="border-gray-300 px-4 py-2">{task.content}</td>
                  <td className="border-gray-300 px-4 py-2">
                    {task.completed ? "True" : "False"}
                  </td>
                  <td className="flex gap-2 px-4 py-2">
                    <Link href={`task/${task.id}`}>
                      <UpdateButton />
                    </Link>
                    <DeleteButton id={task.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
