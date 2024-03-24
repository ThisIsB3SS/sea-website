import logos from '../../public/assets/logos_carousel/list_logos_carousel.json';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export function CarouselBanner() {
  return (
    <div className="carouselBanner_wrapper backdrop-blur-[2px] relative ">
      <h2 className="carouselBanner_title text-5xl font-semibold mb-10">
        Nos outils de tous les jours
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
            <ul className="carouselBanner flex items-center justify-center gap-12">
              {Object.entries(logos.list1).map(([key, value]) => (
                <li key={key} className="carouselBanner_item">
                  <Image
                    src={`/assets/logos_carousel/${value}`}
                    alt={`${key} logo`}
                    max-height={50}
                    height={50}
                    width={70}
                  />
                </li>
              ))}
            </ul>
          </Marquee>
                <div className="separator border-t-2 border-gray-800 w-2/3 relative mx-auto mb-10"></div>
          {/* Liste 2 */}
          <Marquee
            play={true}
            direction="left"
            speed={40}
            loop={0}
         
          >
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
                    max-height={50}
                    height={50}
                  />
                </li>
              ))}
            </ul>
          </Marquee>
          </div>
      </div>
    </div>
  );
}
