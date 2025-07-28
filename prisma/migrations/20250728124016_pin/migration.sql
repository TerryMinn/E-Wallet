/*
  Warnings:

  - Added the required column `pin` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "pin" INTEGER NOT NULL;
