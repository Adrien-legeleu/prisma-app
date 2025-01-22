import AddForm from "./components/AddForm";
import TaskTab from "./components/TaskTab";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <AddForm />
      <TaskTab />
    </div>
  );
}
