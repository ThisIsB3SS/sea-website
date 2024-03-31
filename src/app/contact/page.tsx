'use client';
import { useSubmit } from '@formspree/react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
type Inputs = {
  email: string;
  message: string;
  name: string;
  phone: string;
};

export default function Contact() {
  const {
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
    register,
    setError,
  } = useForm<Inputs>();

  const submit = useSubmit<Inputs>(
    process.env.NEXT_PUBLIC_REACT_APP_REACT_HOOK_FORM_ID as string,
    {
      onError(errs) {
        const formErrs = errs.getFormErrors();
        for (const { code, message } of formErrs) {
          setError(`root.${code}`, {
            type: code,
            message,
          });
        }
        console.log(process.env.REACT_APP_REACT_HOOK_FORM_ID);
        const fieldErrs = errs.getAllFieldErrors();
        for (const [field, errs] of fieldErrs) {
          setError(field, {
            message: errs.map((e) => e.message).join(', '),
          });
        }
      },
    },
  );

  return (
    <main className="w-full min-h-screen flex flex-col  items-center justify-center p-12 gap-4 bg-gradient-to-tr from-blue-700 via-blue-300 to-emerald-500">
      <div className="contact_form_title flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-center">
        <h1 className="mt-24 text-2xl sm:text-4xl lg:text-6xl font-montserrat font-bold text-white text-wrap">
          {isSubmitSuccessful
            ? 'Merci de nous avoir contacté !'
            : 'Contactez-nous'}
        </h1>
        <Image
          src={
            isSubmitSuccessful
              ? '/assets/victory-hand.svg'
              : '/assets/hand-wave.png'
          }
          alt={isSubmitSuccessful ? 'See you soon image' : 'Contact-us image'}
          width={200}
          height={200}
          className={
            isSubmitSuccessful
              ? 'animate-move-up-and-down h-20 w-20 md:h-40 md:w-40 lg:h-60 lg:w-60 z-50'
              : 'animate-rotate-yoyo'
          }
        />
      </div>
      {/* Animation Fireworks */}
      {isSubmitSuccessful ? (
        <iframe
          src="https://lottie.host/embed/74241b77-4958-483d-b2dc-668f5aa16277/t44RX5krsj.json"
          height={400}
          width={400}
        />
      ) : null}{' '}
      <div className="flex flex-col w-3/4 gap-2">
        {isSubmitSuccessful ? null : (
          <h2 className="text-4xl  font-semibold  ">Un Nouveau Projet ?</h2>
        )}

        {isSubmitSuccessful ? null : (
          <h3 className="text-3xl font-pinkerston font-semibold text-white">
            Parlons en <span className="font-montserrat">!</span>
          </h3>
        )}

        <div
          className={
            isSubmitSuccessful ? '' : 'border border-t-1 border-x-0 border-b-0'
          }
        >
          {isSubmitSuccessful ? (
            <div className="flex flex-col items-center gap-10">
              <h2 className="text-xl text-nowrap sm:text-3xl lg:text-5xl font-montserrat font-bold text-center mt-10 animate__animated animate__headShake">
                Message Envoyé ! A bientôt !
              </h2>
              <a
                href="/"
                className="underline text-xl text-center hover:text-white hover:decoration-white hover:scale-105 transition-all ease duration-300"
              >
                Retour à l'accueil
              </a>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(submit)}
              className="flex flex-col gap-2"
            >
              <div className="flex gap-2 sm:gap-4">
                <div className="flex flex-col w-1/2 h-20 gap-2 mt-8">
                  <label htmlFor="name" className="text-xl sm:text-2xl">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('name')}
                    id="name"
                    placeholder="Nom"
                    aria-placeholder="Nom"
                    required
                    aria-required="true"
                    className=" h-full p-4 rounded-lg bg-white bg-opacity-50 border border-white"
                  />
                  {errors.name && (
                    <p className="error">{errors.name.message}</p>
                  )}
                </div>
                <div className="flex flex-col w-1/2 h-20 gap-2 mt-8 ">
                  <label htmlFor="phone" className="text-xl sm:text-2xl">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('phone')}
                    id="phone"
                    placeholder="Téléphone"
                    aria-placeholder="Téléphone"
                    required
                    aria-required="true"
                    className=" h-full p-4 rounded-lg bg-white bg-opacity-50 border border-white"
                  />
                  {errors.phone && (
                    <p className="error">{errors.phone.message}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full h-20 gap-2 mt-8">
                <label htmlFor="email" className="text-xl sm:text-2xl">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  aria-placeholder="E-mail"
                  required
                  aria-required="true"
                  className=" h-full w-full p-4 rounded-lg bg-white bg-opacity-50 border border-white"
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col w-full gap-2 mt-8">
                <label htmlFor="message" className="text-2xl">
                  Parlez-nous de votre projet{' '}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={10}
                  aria-placeholder="Message"
                  placeholder="Incluez ici toutes informations nécessaires à votre projet."
                  required
                  aria-required="true"
                  className=" h-full w-full p-4 rounded-lg bg-white bg-opacity-50 border border-white placeholder-black"
                />
              </div>
              {errors.root && (
                <div className="block">
                  <ul className="error">
                    {Object.values(errors.root).map((err) => {
                      if (typeof err !== 'object') {
                        return <li key={err}>{err}</li>;
                      }
                      const { type, message } = err;
                      return <li key={type}>{message}</li>;
                    })}
                  </ul>
                </div>
              )}
              <div className="btn_container flex justify-center items-center mt-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="p-1 sm:p-4 border rounded-2xl sm:rounded-full w-1/2 font-semibold text-xl sm:text-2xl hover:bg-blue-500 hover:text-white active:bg-blue-800 text-white transition-colors duration-300 ease-in-out"
                >
                  {isSubmitting ? 'En cours d`envoi...' : ' Envoyer 🚀 '}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
