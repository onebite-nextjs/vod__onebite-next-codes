export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;

  return <div>book/[id] 페이지 {id}</div>;
}
