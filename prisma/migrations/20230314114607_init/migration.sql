/*
  Warnings:

  - Added the required column `text` to the `Conversation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Conversation" ADD COLUMN     "text" TEXT NOT NULL;
