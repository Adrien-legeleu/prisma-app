"use client";
import { createTask } from "@/lib/actions";
import React from "react";
import { useFormStatus } from "react-dom";

export default function AddForm() {
  const BtnSubmit = () => {
    const { pending } = useFormStatus();
    return (
      <button
        disabled={pending}
        type="submit"
        className="text-white bg-green-500 hover:bg-green-600 p-3"
      >
        {pending ? "création en cours" : "Ajouter"}
      </button>
    );
  };

  return (
    <form action={createTask} className="max-w-[700px] flex items-center mb-2">
      <input
        type="text"
        className="h-[50px] border border-gray-300 p-2"
        required
        name="task"
        placeholder="ajouter une tâche"
      />
      <BtnSubmit />
    </form>
  );
}
