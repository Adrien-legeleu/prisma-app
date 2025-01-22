import { deleteTask } from "@/lib/actions";

interface DeleteButtonProps {
  id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="text-white bg-red-500 hover:bg-red-600 p-2"
      >
        Delete
      </button>
    </form>
  );
}
