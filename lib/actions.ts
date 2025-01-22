"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { redirect } from "next/navigation";

export const getAllTasks = async () => {
  const allTasks = await prisma.task.findMany({
    orderBy: { creaedAt: "desc" },
  });
  return allTasks;
};

export const createTask = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const task = formData.get("task") as string;
  await prisma.task.create({
    data: {
      content: task,
    },
  });
  revalidatePath("/");
};

export const deleteTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/");
};

export const getTask = async (id: string) => {
  const updateTask = prisma.task.findUnique({
    where: { id },
  });
  return updateTask;
};

export const updateTask = async (formData: FormData) => {
  try {
    const id = formData.get("id") as string;
    const task = formData.get("task") as string;
    const complteted = formData.get("completed");
    if (task !== null) {
      await prisma.task.update({
        where: { id },
        data: {
          content: task,
          completed: complteted === "on",
        },
      });
    }
  } catch (error) {
    console.error("error lors de la modifcation");
  } finally {
    redirect("/");
  }
};
