import Link from "next/link";

export default function ChatPage() {
  const randomIds = Array.from({ length: 5 }, () =>
    Math.random().toString(36).substring(2, 8),
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Random Links</h1>
      <div className="flex flex-col space-y-2">
        {randomIds.map((id1) => (
          <Link
            key={id1}
            href={`/x/${id1}/${randomIds[0]}`}
            className="px-4 py-2 "
          >
            x/{id1}/{randomIds[0]}
          </Link>
        ))}
      </div>
    </div>
  );
}
