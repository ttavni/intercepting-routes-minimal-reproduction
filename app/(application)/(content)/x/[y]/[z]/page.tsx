export default async function XPage({
  params,
}: {
  params: Promise<{ y: string; z: string }>;
}) {
  const { y, z } = await params;

  return (
    <div>
      <h1>Page</h1>
      <p>y: {y}</p>
      <p>z: {z}</p>
    </div>
  );
}
