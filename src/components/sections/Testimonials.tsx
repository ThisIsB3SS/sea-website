import { testimonials } from './Testimonials.json';
import { QuoteIcon } from '../icons/QuoteIcon';
import Image from 'next/image';
export function Testimonials() {
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
        <div className="Testimonials_carousel">
          {testimonials.map(
            (
              element: { message: string; auteur: string; poste: string, avatar: string},
              index: number,
            ) => {
              return (
                <div className="Testimonials_carousel_items" key={index}>
                  <p className="message">
                    <QuoteIcon /> {element.message}
                  </p>
                  <div className="Testimonials_carousel_items_author">
                    <Image className="avatar rounded-full" alt={`${element.auteur} avatar`} src={`${element.avatar}`} width={150} height={150}/>
                    <h4 className="auteur">{element.auteur}</h4>
                    <h5 className="poste">{element.poste}</h5>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
