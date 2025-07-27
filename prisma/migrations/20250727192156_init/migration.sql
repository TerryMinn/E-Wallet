-- CreateTable
CREATE TABLE "TestDB" (
    "id" SERIAL NOT NULL,
    "testId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TestDB_pkey" PRIMARY KEY ("id")
);
