import Image from 'next/image';
import aboutImage from '/public/assets/about-image.svg';
import useContactModalStore from '@/store/useContactModalStore';
export function About() {
  const { openModal } = useContactModalStore();
  return (
    <div className="About_section w-full flex flex-col justify-center items-center px-6 md:px-20 mt-10 md:mt-20 animate__animated animate__slideInLeft">
      <div className="About_content_1  w-full">
        <h2 className="About_title text-2xl md:text-3xl  font-montserrat font-thin italic text-blue-800">
          SEA WEBSTUDIO
        </h2>
        <div className="About_slogan ">
          <h3 className="text-4xl sm:text-6xl md:text-7xl md:w-full text-white flex flex-col gap-4">
            <span>
              Design <span className="font-pinkerston">Innovant</span> & Code{' '}
              <span className="font-pinkerston">Scalable</span>. Rapidité &{' '}
              <span className="font-pinkerston">Flexibilité</span>
            </span>
          </h3>
        </div>
      </div>
      <div className="About_content_2 w-full flex flex-col xl:flex-row items-center justify-center text-justify  lg:pl-40 lg:gap-12 xl:gap-40 mt-12">
        <Image
          src={aboutImage}
          alt="about"
          className="bg-transparent w-1/3 lg:w-1/4 xl:w-1/6 order-1 "
        />
        <div className="about_text flex flex-col items-center justify-center gap-4 order-2 xl:w-1/2">
          <span className="font-montserrat text-3xl text-white">
            {' '}
            Notre
            <span className="font-pinkerston text-4xl text-white">
              {' '}
              Mission
            </span>{' '}
          </span>
          <p className="text-2xl text-pretty ">
            Dans l'univers digital actuel, l'excellence ne s'improvise pas. Elle
            résulte d'une parfaite harmonie entre innovation, design intuitif et
            technologie avancée. <br />{' '}
            <span className="font-bold">SEA Webstudio</span> incarne cette
            synergie en offrant des services intégrés de{' '}
            <span className="font-bold">
              conception, développement et stratégie web
            </span>
            . Accélérez votre croissance en ligne en créant des solutions
            sur-mesure qui captivent votre audience et dynamisent votre
            activité.
          </p>
          <button className="button group text-blue-800 group-hover:text-white transition-all duration-200" onClick={openModal}>
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
}
