import { getTask, updateTask } from "@/lib/actions";
import Link from "next/link";

interface Params {
  id: string;
  content: string;
  completed: boolean;
}
interface UpdatPageProps {
  params: Params;
}

export default async function page({ params }: UpdatPageProps) {
  const task = await getTask(params.id);
  if (!task) {
    return (
      <div className="h-screen w-full fles items-center justify-center flex-col">
        <p>Task not found</p>
        <Link href={"/"}>Retour</Link>
      </div>
    );
  }
  const { id, content, completed } = task;
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col pt-10">
      <Link href="/">Retour</Link>
      <form
        action={updateTask}
        className="maw-w-[700px] flex items-center flex-col jsutify-center my-2"
      >
        <input type="hidden" name="id" value={id} />
        <input
          type="text"
          name="task"
          required
          defaultValue={content}
          placeholder="MAjouter une tache"
          className="h-[40px] border border-gray-300 p-2"
        />
        <div className="flex items-center gap-2">
          <label htmlFor="completed">Completed</label>
          <input
            type="checkbox"
            name="completed"
            id=""
            className="border border-gray-300"
            defaultChecked={completed}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-green-500 hover:bg-green-600 p-2"
        >
          Update
        </button>
      </form>
    </div>
  );
}
