import Search from '@/components/Search';
import React from 'react';
import EmptyState from '@/components/EmptyState';
import UserList from './components/UserList';
import getUsers from '../actions/getUsers';

const Home = async () => {
  const users = await getUsers();
  return (
    <div className=' rounded-lg flex border-[1px] h-full'>
      <aside className='flex-[1] border-r-[1px] flex flex-col h-full'>
        <section className='flex-[1] border-b-[1px]'>
          <Search />
        </section>
        <section className='flex-[10] py-3'>
          <UserList items={users} />
        </section>
      </aside>
      <main className='flex-[3]'>
        <EmptyState />
      </main>
    </div>
  );
};

export default Home;
