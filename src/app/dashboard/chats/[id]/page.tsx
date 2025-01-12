interface ChatPageParams {
  params: { id: string };
}

export default async function ChatPage({ params }: Readonly<ChatPageParams>) {
  const { id } = await params;

  return (
    <>
      <section>
        <h2>Chat {id} Page</h2>
      </section>
    </>
  );
}
