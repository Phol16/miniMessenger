import Sidebar from '@/components/sidebar/Sidebar';
import ConversationList from './components/ConversationList';
import getConversations from '../actions/getConversation';
import getUsers from '../actions/getUsers';

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <div className='relative sm:px-10 pb-10 max-w-6xl m-auto h-[calc(100svh_-_170px)]'>
      {/*@ts-expect-error Server Component*/}
      <Sidebar>
        <aside className='flex w-full h-full border-[1px] rounded-lg'>
        <ConversationList users={users} initialItems={conversations} />
        <main className='h-full flex-[1]'>{children}</main>
        </aside>
      </Sidebar>
    </div>
  );
}
