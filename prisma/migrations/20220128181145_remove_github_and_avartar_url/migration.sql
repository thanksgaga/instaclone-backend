/*
  Warnings:

  - You are about to drop the column `avatarURL` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `githubUsername` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatarURL",
DROP COLUMN "githubUsername",
DROP COLUMN "location",
DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT;
