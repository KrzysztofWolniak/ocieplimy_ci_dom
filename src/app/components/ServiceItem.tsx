// components/ServiceItem.js



const ServiceItem = ({ title, description, href, bgImage }) => {
  return (
    <a
      href={href}
      className="services-front__item lazy-background visible bg-cover bg-center text-blue-600 bg-gray-900 text-base font-normal font-lato text-left leading-normal m-0 p-8 border-0 flex relative w-1/3 h-full items-end"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="services-front__item-text text-blue-600 bg-transparent text-base font-normal font-lato text-left leading-normal m-0 p-0 border-0 block relative w-full h-full">
        <p className="title text-white text-lg font-normal font-poppins leading-snug m-0 mb-4">{title}</p>
        <p className="description text-gray-400 text-sm font-normal font-lato leading-relaxed m-0 mb-8">{description}</p>
        <span className="button-arrow text-orange-600 bg-transparent text-sm font-normal font-lato text-left leading-normal m-0 p-0 border-0 flex items-center justify-normal w-full h-5">
          Zobacz więcej
          <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-3 text-orange-600">
            <path d="M8 1H1V15C1 16.1046 1.89543 17 3 17H15C16.1046 17 17 16.1046 17 15V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 12L17 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 1H17V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  );
};

export default ServiceItem;
