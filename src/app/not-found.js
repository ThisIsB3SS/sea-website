import Image from 'next/image';
import Link from 'next/link';
export default function Custom404() {
  return (
    <main className="w-full min-h-screen flex flex-col  items-center justify-center p-0 gap-0 bg-gradient-to-tr from-blue-700 via-blue-300 to-emerald-500">
      <div className="flex flex-col justify-center items-center mt-32 gap-10">
        <h1 className="mt-24 text-4xl lg:text-6xl font-pinkerston font-bold text-white text-wrap">
          Oups !
        </h1>
        <p className="text-xl sm:text-2xl lg:text-4xl">
          La page que vous cherchez n'existe pas.
        </p>
      </div>
      <div className="image_container animate-rotate-yoyo mt-8">
        <div className="image_container_inner -rotate-12">
          <Image
            src="/assets/404.svg"
            alt="404"
            width={500}
            height={500}
            className=" animate-move-up-and-down h-40 md:h-60 lg:h-full"
          />
        </div>
      </div>
      <Link
        href="/"
        className='button underline underline-offset-4 mb-10 text-xl text-center hover:text-white hover:decoration-white hover:scale-105 transition-all ease duration-300"
'
      >
        Retour à l'accueil
      </Link>
    </main>
  );
}
