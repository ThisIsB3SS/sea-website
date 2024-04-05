import services from '../../../public/data/services.json';
// Définition du type de données
type Service = {
  title: string;
  description: string;
  image: string;
};

export function Services() {
  // typage du tableau json
  const typeServices: Service[] = services;
  return (
    <div className="w-full flex flex-col justify-center items-center px-6 md:px-20 my-10 md:my-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
        Nos Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        {typeServices.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border rounded-2xl hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
