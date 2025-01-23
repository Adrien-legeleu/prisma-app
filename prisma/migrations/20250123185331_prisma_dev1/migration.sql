-- CreateTable
CREATE TABLE "Categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "catName" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    CONSTRAINT "Categories_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Categories_taskId_key" ON "Categories"("taskId");
