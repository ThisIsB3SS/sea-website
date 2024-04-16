import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export function CarouselBanner() {
  return (
    <div className="carouselBanner_wrapper w-full ">
      <h2 className="About_title text-2xl md:text-3xl  font-montserrat font-thin italic text-blue-800 px-6 md:px-20">
        Nos technologies
      </h2>
      <h2 className="carouselBanner_title text-4xl sm:text-6xl md:text-7xl md:w-full text-white px-6 md:px-20 mb-10">
        Nos <span className="font-pinkerston">Outils</span> Favoris
      </h2>
      <div className="carouselBanner_innerContainer">
        <div className="carouselBanner_innerContainer2">
          {/* Liste 1 */}
          <Marquee
            play={true}
            direction="right"
            speed={40}
            loop={0}
            className="mb-10"
          >
            {/* <ul className="carouselBanner flex items-center justify-center gap-12">
              {Object.entries(logos.list1).map(([index, value]) => (
                <li key={index} className="carouselBanner_item">
                  <Image
                    src={`/assets/logos_carousel/${value}`}
                    alt={`${value} logo`}
                    height={50}
                    width={70}
                    style={{ maxHeight: '50px' }}
                  />
                </li>
              ))}
            </ul> */}
            <Image
              src={'/public/assets/logos_carousel/android.svg'}
              alt="android"
              width={50}
              height={50}
            />
          </Marquee>
          <div className="separator border-t-2 border-gray-800 w-2/3 relative mx-auto mb-10"></div>
          {/* Liste 2 */}
          {/* <Marquee play={true} direction="left" speed={40} loop={0}>
            <ul className="carouselBanner flex items-center justify-center gap-12">
              {Object.entries(logos.list2).map(([key, value]) => (
                <li
                  key={key}
                  className="carouselBanner_item flex items-center justify-center"
                >
                  <Image
                    src={`/assets/logos_carousel/${value}`}
                    alt={`${key} logo`}
                    width={70}
                    height={50}
                    style={{ maxHeight: '50px' }}
                  />
                </li>
              ))}
            </ul>
          </Marquee> */}
        </div>
      </div>
    </div>
  );
}
