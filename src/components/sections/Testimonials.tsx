'use client';
import { testimonials } from './Testimonials.json';
import { QuoteIconStart, QuoteIconEnd } from '../icons/QuoteIcon';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons';
import { Arrow } from '@radix-ui/react-dropdown-menu';

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

  return (
    <div className="Testimonials_section w-full flex flex-col justify-center items-center px-6 md:px-20 mt-10 md:mt-20">
      <div className="Testimonials_content_1  w-full">
        <h2 className="About_title text-2xl md:text-3xl  font-montserrat font-thin italic text-blue-800">
          Ils parlent de nous
        </h2>
        <div className="Testimonials_slogan ">
          <h3 className="text-4xl sm:text-6xl md:text-7xl md:w-full text-white flex flex-col gap-4">
            <span>
              Les <span className="font-pinkerston">Témoignages</span>
            </span>
          </h3>
        </div>
        <div className="Testimonials_carousel ">
          <div className="Testimonials_carousel_item flex flex-col items-center gap-6">
            <p className="message text-xl italic w-5/6 text-pretty">
              <QuoteIconStart /> {element.message} <QuoteIconEnd />
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
              <div className="author_infos flex flex-col items-center gap-2">
                <h4 className="auteur  text-2xl font-bold">{element.auteur}</h4>
                <h5 className="poste  text-xl font-semibold">
                  {element.poste}
                </h5>
                <a
                  href={element.link}
                  className="lien mt-2 text-lg text-center p-2  max-w-fit underline underline-offset-2 transition-all duration-300 ease-in-out   hover:text-white"
                >
                  Son site
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="button_wrapper flex flex-row justify-center mt-10 md:mt-0 md:float-right md:relative">
          <Button
            className="prev_btn bg-white mr-2 rounded-full text-black hover:bg-transparent hover:border hover:border-white hover:text-white "
            onClick={handlePrev}
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            className="next_btn bg-white rounded-full  text-black hover:bg-transparent hover:border hover:border-white hover:text-white "
            onClick={handleNext}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
