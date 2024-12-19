'use client';
import testimonials from '../../../public/data/testimonials.json';
import keywords from '../../../public/data/keywords.json';
import { QuoteIconStart, QuoteIconEnd } from '../icons/QuoteIcon';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons';

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % testimonials.length);
  };
  const handlePrev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };
  const autoPlay = setTimeout(() => {
    handleNext();
  }, 5000);

  const element = testimonials[index];
  const testimonialsCodeur = async () => {
    try {
      const response = await fetch(
        'https://www.codeur.com/-sebastien_sq/evaluations.json',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            Accept: '*/*',
            'max-age': '0',
            private: 'true',
            'must-revalidate': 'true',
            'cache-control': 'no-cache',
            'x-requested-for': 'XMLHttpRequest',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Safari/537.36',
            connection: 'keep-alive',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
          },
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };
  useEffect(() => {
    testimonialsCodeur();
  }, []);
  return (
    <div className="Testimonials_section w-full flex flex-col justify-center items-center px-6 md:px-20 mt-10 md:mt-20">
      <div className="Testimonials_content_1  w-full">
        <h2 className="About_title text-2xl md:text-3xl  font-montserrat font-thin italic text-blue-800">
          Ce qu'ils disent de nous
        </h2>
        <div className="Testimonials_slogan ">
          <h3 className="text-4xl sm:text-6xl md:text-7xl md:w-full text-white flex flex-col gap-4">
            <span>
              Les <span className="font-pinkerston">Témoignages</span>
            </span>
          </h3>
        </div>
        <div
          className="Testimonials_carousel "
          id="Carousel-Témoignages"
          aria-live="polite"
        >
          <div className="Testimonials_carousel_item flex flex-col items-center gap-6">
            <p className="message text-xl italic w-5/6 text-pretty">
              <QuoteIconStart />{' '}
              {element.message.split(' ').map((word, index) => {
                const cleanedWord = word.toLowerCase().replace(/[\., ]+$/, '');
                return keywords.includes(cleanedWord) ? (
                  <span key={index} className="font-bold shadow-2xl">
                    {word}{' '}
                  </span>
                ) : (
                  <span key={index}>{word} </span>
                );
              })}
              <QuoteIconEnd />
            </p>
            <div className="Testimonials_carousel_item_author flex flex-row gap-6 justify-center items-center">
              <Image
                className="avatar rounded-full"
                alt={`${element.auteur} avatar`}
                src={`${element.avatar}`}
                width={150}
                height={150}
                objectPosition="center"
              />
              <div className="author_infos flex flex-col sm:items-center gap-2">
                <h4 className="auteur  text-2xl font-bold">{element.auteur}</h4>
                <h5 className="poste  text-xl font-semibold">
                  {element.poste}
                </h5>
                <button className="button ">
                  <a
                    href={element.link}
                    className="lien mt-2 text-lg  p-2  max-w-fit  transition-all duration-300 ease-in-out  text-blue-800 hover:text-white hover:scale-110"
                    aria-label={`Lien vers le site de ${element.auteur}`}
                  >
                    Son site
                  </a>
                </button>
                {/* Uniquement pour Gabrielle Alya */}
                {element.album ? (
                  <button className="button">
                    <a
                      href={element.album}
                      className="lien mt-2 text-lg  p-2  max-w-fit  transition-all duration-300 ease-in-out   text-blue-600 hover:text-white hover:scale-110"
                      aria-label="Lien vers l'album de Gabrielle Alya"
                    >
                      Son album
                    </a>
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="button_wrapper flex flex-row justify-center mt-10 md:mt-0 md:float-right md:relative">
          <button
            className="button prev_btn mr-2  "
            onClick={handlePrev}
            aria-controls="Carousel-Témoignages"
            aria-label="Bouton Précédent du caroussel"
          >
            <ArrowLeftIcon />
          </button>
          <button
            className="button next_btn "
            onClick={handleNext}
            aria-controls="Carousel-Témoignages"
            aria-label="Bouton Suivant du caroussel"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
