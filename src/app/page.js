import { prisma } from "@/utils/prisma";

export default async function Home() {
  const data = await prisma.note.findMany();

  return (
    <h1>
      {data.map((note) => {
        return <div key={note.id}>{note.title}</div>;
      })}
    </h1>
  );
}
