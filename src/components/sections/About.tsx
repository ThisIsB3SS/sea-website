export function About() {
  return (
    <div className="About_section w-full flex flex-col justify-center items-center px-6 md:px-20 mt-10 md:mt-20">
      
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
      <div className="About_content_2 w-full flex flex-col items-center justify-center text-justify ml-0 md:pl-60 gap-6 mt-4">
        <p className="text-xl">
          Dans l'univers digital actuel, l'excellence ne s'improvise pas. Elle
          résulte d'une parfaite harmonie entre innovation, design intuitif et
          technologie avancée. <br />{' '}
          <span className="font-montserrat font-bold">SEA Webstudio</span>{' '}
          incarne cette synergie en offrant des services intégrés de conception,
          développement et stratégie web. <br />{' '}
        </p>
        <span className="font-montserrat text-3xl text-white">
          {' '}
          Notre
          <span className="font-pinkerston text-4xl text-white">
            {' '}
            Mission
          </span>{' '}
        </span>

        <p className="text-xl">
          Accélérer votre croissance en ligne en créant des solutions sur-mesure
          qui captivent votre audience et dynamisent votre activité.
        </p>
        <button>
          <a
            href="/contact"
            className="border rounded-lg border-white px-4
          text-black bg-white hover:bg-transparent hover:border hover:border-white hover:text-white transition-all duration-300 ease-in-out"
          >
            Nous contacter
          </a>
        </button>
      </div>
    </div>
  );
}
