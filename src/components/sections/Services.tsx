import services from '../../../public/data/services.json';
import keywords from '../../../public/data/keywords.json';

// Définition du type de données
type Service = {
  title: string;
  description: string;
  image: string;
};

export function Services() {
  // Typage du tableau json
  const typeServices: Service[] = services;
  // Initialisation d'un tableau de keywords
  const keyword: string[] = keywords;
  return (
    <div className="Services-section w-full flex flex-col justify-center items-start  px-6 md:px-20 my-10 md:my-20">
      <div className="Services_content_1  w-full">
        <h2 className="Services_title text-2xl md:text-3xl  font-montserrat font-thin italic text-blue-800">
          Ce que nous faisons
        </h2>
        <div className="Services_slogan ">
          <h3 className="text-4xl sm:text-6xl md:text-7xl md:w-full text-white flex flex-col gap-4">
            <span>
              Nos <span className="font-pinkerston">Services</span>
            </span>
          </h3>
        </div>
      </div>
      {/* Affichage des services en grid */}
      <div className="services-grid-container w-full sm:px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 ">
          {typeServices.map((service, index) => {
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-4 rounded-3xl backdrop-blur-3xl bg-white bg-opacity-20 border border-white hover:shadow-lg hover:bg-opacity-30 transition-all duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-700 group-hover:text-blue-800 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-xl text-justify text-pretty">
                  {service.description.split(' ').map((word, index) =>
                    keywords.includes(word.toLowerCase()) ? (
                      <span key={index} className=" font-bold shadow-2xl">
                        {word}{' '}
                      </span>
                    ) : (
                      <span key={index}>{word} </span>
                    ),
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
