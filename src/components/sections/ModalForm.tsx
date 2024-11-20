'use client';
import { useSubmit } from '@formspree/react';
import { useForm } from 'react-hook-form';
// import { useEffect } from 'react';
import Image from 'next/image';
import useContactModalStore from '@/store/useContactModalStore';
type Inputs = {
  email: string;
  message: string;
  name: string;
  phone: string;
};


export default function ModalForm() {
    const { isOpen, closeModal } = useContactModalStore();
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
  
  return    ( < div className={`${isOpen ? 'flex animate-fadeIn' : 'hidden'} flex-col fixed top-0 left-0 w-screen h-screen items-center justify-center backdrop-blur-xl z-50`}>
  <div className={`contact_form_title  w-full mt-2 flex flex-col gap-3 p-2 lg:gap-0 xl:flex-row items-center justify-center transition-all duration-500 ease-in-out`}>
    <h1 className="mt-16 lg:mt-20 text-pretty text-2xl lg:text-4xl font-montserrat font-bold text-white">
      {isSubmitSuccessful
        ? 'Merci de nous avoir contacté !'
        : 'Contactez-nous'}
    </h1>
    <button onClick={closeModal} className="absolute top-10 right-20">
      <Image
        src="/assets/close.svg"
        alt="Close"
        width={32}
        height={32}
        className=" hover:scale-110 transition-all duration-300 ease-in-out"
      />
    </button>
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
          ? 'animate-move-up-and-down z-50 h-16 w-auto sm:h-16 md:h-20 lg:h-24 xl:h-32 mt-10 z-1'
          : 'animate-rotate-yoyo h-16 w-auto sm:h-16 md:h-20 lg:h-24 xl:h-32 mt-10 z-1'
      }
    />
 
  </div>

  {/* Text content */}
  <div className="flex flex-col w-10/12 md:w-2/3 lg:w-1/2 gap-2 mt-4 mb-6">
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
              className="button group text-2xl flex justify-center items-center text-nowrap 
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
    </div>
  );
}
