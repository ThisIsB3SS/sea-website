import '../../styles/custom.css';

export function CtaSection() {
  return (
    <div className="hero_cta_section group z-10 box-content lg:p-16 mt-8 sm:mt-20 mb-10 mx-auto  animate__animated animate__fadeIn">
      <a
        href="contact"
        className="flex justify-center items-center text-center"
      >
        <div className=" flex flex-col p-6  sm:w-auto sm:flex-row sm:p-10 gap-4 justify-around items-center   border border-gray-50 shadow-md rounded-3xl sm:rounded-full bg-white bg-opacity-50 backdrop-blur-xl transition-all duration-300 ease-in-out  hover:border-blue-700">
          <h2 className="font-montserrat text-pretty text-xl xl:text-2xl italic text-slate-800  ">
            Création, Développement,
            <br /> Stratégie Web & Mobile{' '}
          </h2>
          <div className=" flex flex-col sm:flex-row overflow-hidden justify-center items-center gap-5 mt-2 lg:mt-0 group ">
            <h2 className="text-nowrap w-0 h-0 sm:h-auto opacity-0 group-hover:animate-fullHeight sm:group-hover:animate-fullWidth group-hover:w-fit  group-hover:opacity-100 text-lg lg:text-2xl font-bold  text-blue-500 group-hover:text-blue-700 transition-all duration-1600 ease-in-out">
              Contactez-nous{' '}
            </h2>

            <span className="mt-2 sm:mt-0 w-10 h-10 p-2 flex content-center items-center bg-white rounded-full animate-pulse rotate-90 -translate-y-5 group-hover:translate-y-0 sm:translate-y-0  sm:rotate-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9911 7.97552C19.9906 7.74852 19.9419 7.52422 19.8484 7.31738C19.7548 7.11055 19.6185 6.92588 19.4485 6.77552L11.9958 0.216184C11.8033 0.0585898 11.5571 -0.0181116 11.3092 0.00224426C11.0612 0.0226001 10.8308 0.138423 10.6666 0.325304C10.5024 0.512185 10.4171 0.755526 10.4288 1.00404C10.4404 1.25256 10.5481 1.48684 10.7291 1.65752L16.4871 6.72418C16.5124 6.74659 16.5303 6.77613 16.5383 6.80891C16.5464 6.84168 16.5444 6.87614 16.5325 6.90772C16.5205 6.93931 16.4993 6.96652 16.4716 6.98577C16.4438 7.00502 16.4109 7.01539 16.3771 7.01552H0.967813C0.713205 7.01552 0.469025 7.11666 0.28899 7.29669C0.108955 7.47673 0.0078125 7.72091 0.0078125 7.97552C0.0078125 8.23012 0.108955 8.4743 0.28899 8.65434C0.469025 8.83437 0.713205 8.93552 0.967813 8.93552H16.3751C16.4089 8.93584 16.4417 8.94636 16.4694 8.9657C16.4971 8.98503 16.5182 9.01227 16.5301 9.04385C16.542 9.07543 16.5441 9.10987 16.5361 9.14265C16.528 9.17542 16.5103 9.20501 16.4851 9.22752L10.7271 14.2942C10.6264 14.3755 10.5432 14.4764 10.4825 14.5907C10.4218 14.705 10.3848 14.8304 10.3738 14.9594C10.3628 15.0884 10.378 15.2183 10.4185 15.3412C10.459 15.4642 10.5239 15.5777 10.6094 15.6749C10.6949 15.7721 10.7991 15.851 10.9159 15.9069C11.0326 15.9628 11.1595 15.9945 11.2888 16.0001C11.4181 16.0057 11.5473 15.9851 11.6684 15.9395C11.7896 15.8939 11.9003 15.8243 11.9938 15.7348L19.4478 9.17552C19.6181 9.02527 19.7545 8.84063 19.8482 8.63379C19.9418 8.42694 19.9906 8.20258 19.9911 7.97552Z"
                  fill="#0C0414"
                />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
