import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2eceobfoOr4lbidqtp17iD56GQz",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
