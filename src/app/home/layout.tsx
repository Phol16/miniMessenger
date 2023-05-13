import Sidebar from '@/components/sidebar/Sidebar';

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative sm:px-10 pb-10 max-w-6xl m-auto h-[calc(100svh_-_170px)]'>
      {/*@ts-expect-error Server Component*/}
      <Sidebar>
        <main className='h-full'>{children}</main>
      </Sidebar>
    </div>
  );
}
