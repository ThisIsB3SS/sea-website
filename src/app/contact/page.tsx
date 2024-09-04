'use client';
import { useSubmit } from '@formspree/react';
import { useForm } from 'react-hook-form';
// import { useEffect } from 'react';
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
    process.env.NEXT_PUBLIC_REACT_APP_REACT_HOOK_FORM_ID ,
    {
      onError(errs : any) {
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
            message: errs.map((e : any) => e.message).join(', '),
          });
        }
      },
    },
  );

  return (
    // Main container // Modified to have full height
    <main className=" flex flex-col w-full h-full items-center justify-start px-12 bg-gradient-to-tr from-blue-700 via-blue-300 to-emerald-500 ">
      <div className="contact_form_title mb-auto flex  flex-col gap-6 p-2 lg:gap-0 xl:flex-row items-center justify-center">
        <h1 className=" mt-32 text-pretty text-3xl lg:text-6xl font-montserrat font-bold text-white">
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
              ? 'animate-move-up-and-down z-50 h-24 w-auto sm:h-20 md:h-32  lg:h-48  xl:h-60  mt-20 z-1'
              : 'animate-rotate-yoyo h-24 w-auto sm:h-20 md:h-32  lg:h-48  xl:h-60  lg:mt-20 z-1'
          }
        />
     
      </div>

      {/* Text content */}
      <div className="flex flex-col w-full  sm:w-3/4 gap-2 mt-10">
        {isSubmitSuccessful ? null : (
          <div className="flex flex-col sm:flex-row justify-between w-full ">
            <h2 className="text-2xl md:text-3xl text-blue-800  font-semibold  ">
              Un Nouveau Projet ?
            </h2>

            <h3 className="text-2xl md:text-3xl font-pinkerston font-semibold text-white">
              Parlons en <span className="font-montserrat">!</span>
            </h3>
          </div>
        )}

        <div
          className={
            isSubmitSuccessful ? '' : 'border border-t-1 border-x-0 border-b-0'
          }
        >
          {isSubmitSuccessful ? (
            <div className="flex flex-col items-center mb-10 gap-10">
            
              <h2 className="text-lg text-pretty text-white sm:text-xl lg:text-3xl font-montserrat font-bold text-center mt-10 animate__animated animate__headShake">
                Message bien reçu, nous vous répondrons bientôt !
              </h2>
              <a
                href="/"
                className="button text-xl flex place-items-center text-blue-800 group-hover:text-white hover:decoration-white hover:scale-105 transition-all ease duration-300"
                aria-label="Bouton de retour à l'accueil du site"
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
                  placeholder="Indiquez ici toute information nécessaire à votre projet."
                  required
                  aria-required="true"
                  className=" h-full w-full p-4 rounded-lg bg-white bg-opacity-50 border border-white placeholder-black placeholder-opacity-70 text-black"
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
              <div className="btn_container group flex justify-center items-center mt-10 mb-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button group  text-2xl flex justify-center items-center text-nowrap 
                  "
                  aria-label="Bouton d`envoi du formulaire de contact"
                >
                  {isSubmitting ? (
                    'Envoi en cours ...'
                  ) : (
                    <div className="flex justify-center items-center text-nowrap gap-1  text-blue-800 group-hover:text-white transition-all duration-300 ease-in-out">
                      Envoyer
                    </div>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
