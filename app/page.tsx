import Link from "next/link";

export default function Home() {
  const randomId = Math.random().toString(36).substring(2, 15);

  return <Link href={`/chat/${randomId}`}>Start New Chat</Link>;
}
