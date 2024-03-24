import logos from '../../public/assets/logos_carousel/list_logos_carousel.json';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export function CarouselBanner() {
  return (
    <div className="carouselBanner_wrapper backdrop-blur-sm relative ">
      <h2 className="carouselBanner_title text-5xl mb-10">
        Nos outils de tous les jours
      </h2>

      {/* Liste 1 */}
      <Marquee play={true} direction="right" speed={40} loop={0} gradient={true} gradientColor={"red"} gradientWidth={"500"} className='mb-10'>
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

      {/* Liste 2 */}
      <Marquee play={true} direction="left" speed={40} loop={0} gradientColor={"black"} gradientWidth={"1000"}>
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
  );
}
