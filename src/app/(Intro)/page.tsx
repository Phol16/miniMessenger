import Image from 'next/image';
import AuthForm from './components/AuthForm';

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
          src='https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=SkrugJTOEVMAX865AQz&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfBZgOUAZSw-w8_UGQcSxDKJALr1K7OXFnENMS75AO8llQ&oe=645DC9A7'
          alt='messengerPhoto'
          width={700}
          height={0}
          className='h-auto'
        />
      </aside>
    </main>
  );
}
