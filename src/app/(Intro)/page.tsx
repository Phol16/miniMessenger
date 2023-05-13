import Image from 'next/image';
import AuthForm from './components/AuthForm';
import image from '../../../public/photo.png'

export default function Intro() {
  return (
    <main className='max-w-6xl m-auto px-5 py-10 grid sm:grid-cols-[repeat(auto-fit,minmax(480px,auto))] justify-items-center items-center'>
      <aside className='flex flex-col gap-4 p-5 w-fit'>
        <h1 className='text-center lg:text-left text-5xl md:text-6xl lg:max-w-xs font-bold leading-[80px] md:leading-[90px] messenger w-fit '>
          Hang out <br /> anytime, anywhere
        </h1>
        <section className='self-center flex flex-col gap-4'>
          <p className='max-w-[450px]'>
            Messenger makes it easy and fun to stay close to your favorite
            people.
          </p>
          <AuthForm />
        </section>
      </aside>
      <aside className='max-w-xl'>
        <Image
          src={image}
          alt='messengerPhoto'
          width={700}
          height={0}
          className='h-auto'
        />
      </aside>
    </main>
  );
}
