import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

const main = async () => {
  const feedback = await prisma.feedback.createMany({
    data: [
      { name: "some-1", email: "first@first", feedbackType: "IDEA", message: "1 msg" },
      { name: "some-2", email: "sec@sec", feedbackType: "FEEDBACK", message: "2 msg" },
    ],
  });
};

main()
  .catch(err=>console.log(err))
  .finally(async()=>await prisma.$disconnect)
