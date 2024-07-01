"use client"
import {  Link } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white w-full mt-auto">
      <div className="w-full">
        <FooterCopyright />
      </div>
    </footer>
  );
  };

  const FooterInfo = () => (
    <div>
      <a href="https://now.cyberfolks.pl/demo/CP97GNGSF1VW/" className="text-2xl font-bold mb-6">
        OcieplimyCiDom
      </a>
      <p className="text-gray-400 mb-8">
        Nasza firma specjalizuje się w ekologicznym ocieplaniu domów za pomocą innowacyjnych technologii i zaawansowanej inżynierii. Zapewniamy kompleksowe zarządzanie i odporność strukturalną, wykorzystując metodę nadmuchową z rockwool.
      </p>
      <FooterContact />
    </div>
  );

const FooterContact = () => (
  <div>
    <ContactItem href="tel:+48 123 456 789" icon="phone">
      +48 123 456 789
    </ContactItem>
    <ContactItem href="mailto:kochiris94@gmail.com" icon="email">
      kochiris94@gmail.com
    </ContactItem>
    <ContactItem href="#" icon="address">
      Przedmiejska, Wrocław
    </ContactItem>
    <ContactHours />
  </div>
);

const ContactItem = ({ href, icon, children }) => (
    <a href={href} className="flex items-center mb-6 text-blue-500">
      <Icon type={icon} className="mr-4" />
      <span className="text-white">{children}</span>
    </a>
  );

  const ContactHours = () => (
    <div className="flex items-start">
      <Icon type="hours" className="mr-4" />
      <div>
        <p className="text-white mb-3">Pon - Pt: 9:00 - 17:00</p>
        <p className="text-white mb-3">Sobota: Zamknięte</p>
        <p className="text-white mb-3">Niedziela: Zamknięte</p>
      </div>
    </div>
  );

  const FooterMenu = () => (
    <div>
      <p className="text-lg font-extrabold mb-10">Odkryj nas</p>
      <ul className="space-y-6">
        {['O nas', 'Nasza oferta', 'Portfolio', 'Blog', 'Kontakt'].map((item) => (
          <li key={item}>
            <a href={`https://now.cyberfolks.pl/demo/CP97GNGSF1VW/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 text-lg font-extrabold">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <FooterSocials />
    </div>
  );

const FooterSocials = () => (
  <div className="flex space-x-5 mt-8 pt-8">
    {['#', '#', '#', '#'].map((href, index) => (
      <Link key={index} href={href} className="opacity-70">
        <Icon type="social" />
      </Link>
    ))}
  </div>
);

const FooterBlog = () => (
    <div>
      <p className="text-lg font-extrabold mb-10">Najnowsze wpisy</p>
      {[
        {
          href: 'https://now.cyberfolks.pl/demo/CP97GNGSF1VW/blog/innowacyjne-technologie-w-budownictwie-jak',
          src: 'https://static.cyberfolks.pl/img/cpx/construction company-6474478-hi_res.webp',
          alt: 'Innowacyjne technologie w budownictwie: Jak zwiększyć efektywność budowy?',
          text: 'Innowacyjne technologie w budownictwie: Jak zwiększyć efektywność budowy?'
        },
        {
          href: 'https://now.cyberfolks.pl/demo/CP97GNGSF1VW/blog/innowacyjne-metody-zarzadzania-kosztami-w',
          src: 'https://static.cyberfolks.pl/img/cpx/construction company-3680959-hi_res.webp',
          alt: 'Innowacyjne Metody Zarządzania Kosztami w Branży Budowlanej',
          text: 'Innowacyjne Metody Zarządzania Kosztami w Branży Budowlanej'
        },
        {
          href: 'https://now.cyberfolks.pl/demo/CP97GNGSF1VW/blog/5-kluczowych-zasad-bezpieczenstwa-na-placu',
          src: 'https://static.cyberfolks.pl/img/cpx/construction company-335685-hi_res.webp',
          alt: '5 kluczowych zasad bezpieczeństwa na placu budowy',
          text: '5 kluczowych zasad bezpieczeństwa na placu budowy'
        }
      ].map(({ href, src, alt, text }) => (
        <a key={href} href={href} className="flex mb-6 space-x-4">
          <img src={src} alt={alt} className="w-24 h-20" />
          <span className="text-gray-400 text-sm">{text}</span>
        </a>
      ))}
    </div>
  );

  const FooterForm = () => (
    <div>
      <p className="text-lg font-extrabold mb-10">kontaktuj się z nami</p>
      {/* <form id="footerForm" className="flex flex-col space-y-6">
        {['Imię i nazwisko', 'Adres e-mail', 'Numer telefonu', 'Nazwa firmy', 'Temat', 'Wiadomość'].map((placeholder, index) => (
          index < 5 ? (
            <input key={placeholder} type={index === 2 ? 'number' : 'text'} placeholder={placeholder} className="bg-gray-900 text-gray-500 border border-gray-700 px-4 py-3" />
          ) : (
            <textarea key={placeholder} placeholder={placeholder} className="bg-gray-900 text-gray-500 border border-gray-700 px-4 py-3" />
          )
        ))}
        <label className="text-gray-500 flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox bg-gray-900 text-gray-500 border border-gray-700" />
          <span>
            Akceptuję <a href="#" className="text-gray-500">politykę prywatności</a>.
          </span>
        </label>
        <button className="bg-orange-600 text-white border border-orange-600 py-3 px-8 mt-8">
          Wyślij wiadomość
        </button>
      </form> */}
    </div>
  );

  const FooterCopyright = () => (
    <div className="bg-black text-gray-400 py-4 px-5 w-full">
      <div className=" mx-auto flex justify-between items-center">
        <p className="text-sm">
          © Ocieplimy Ci Dom. Wszelkie prawa zastrzeżone
        </p>
        <ul className="flex space-x-6">
          <li>
            <Link href="#" className="text-sm text-gray-400">
              Polityka prywatności
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

const Icon = ({ type, className }) => {
  const icons = {
    phone: <svg width="15" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.34 9.68l-.38.4s-.89.95-3.32-1.65C4.21 5.84 5.1 4.89 5.1 4.89l.24-.25c.58-.62.63-1.61.12-2.34L4.43.8C3.8-.1 2.58-.22 1.86.55L.57 1.93C.21 2.31-.03 2.8.002 3.35c.074 1.4.665 4.42 3.963 7.94 3.498 3.73 6.78 3.88 8.122 3.75.425-.04.794-.28 1.092-.6l1.17-1.25c.79-.84.57-2.28-.44-2.87L12.33 9.4c-.67-.39-1.48-.27-2 .28z" fill="#8C8C8C" /></svg>,
    email: <svg width="18" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path fillRule="evenodd" clipRule="evenodd" d="M8.66 9.48l-1.8-1.6-6.26 6.88h15.96l-6.15-6.91-1.75 1.61zm2.65-2.34L17.27 13.79c.03-.13.05-.26.05-.4V1.9L11.31 7.14zM0 1.87v11.51c0 .14.02.27.06.4l5.98-6.62L0 1.87zM16.78.82H.54L8.66 7.8 16.78.82z" fill="#8C8C8C" /></svg>,
    address: <svg width="13" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.33.52c-.83 0-1.66.18-2.43.52-.77.34-1.47.84-2.05 1.47C1.25 3.16.79 3.91.47 4.74c-.32.83-.48 1.72-.48 2.61C0 12.06 4.53 16.38 5.93 17.53c.12.1.26.16.41.16.15 0 .29-.05.41-.16 1.4-1.18 5.89-5.47 5.89-10.18 0-.9-.16-1.78-.48-2.61-.32-.83-.77-1.58-1.36-2.21-.58-.64-1.28-1.14-2.05-1.47-.77-.34-1.61-.51-2.45-.52zM6.33 10.17c-.53 0-1.04-.17-1.48-.48-.44-.31-.78-.76-.98-1.3-.2-.53-.26-1.13-.15-1.7.1-.56.36-1.07.73-1.47.37-.4.85-.67 1.37-.78.52-.1 1.05-.04 1.53.15.48.18.9.53 1.18.99.29.46.45 1.01.45 1.58 0 .76-.28 1.48-.79 2.02-.5.55-1.19.86-1.89.87z" fill="#8C8C8C" /></svg>,
    hours: <svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 9.03C16 13.77 12.42 17.61 8 17.61S0 13.77 0 9.03 3.58.44 8 .44 16 4.29 16 9.03z" fill="#8C8C8C" /><path fillRule="evenodd" clipRule="evenodd" d="M8 4.95c.33 0 .6.28.6.64v3.17l1.82 1.96c.23.25.23.66 0 .91-.23.25-.6.25-.82 0L7.58 9.48c-.11-.12-.18-.28-.18-.46V5.59c0-.36.27-.64.6-.64z" fill="#1F1F1F" /></svg>,
    social: <svg width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 .13C5.37.13 0 5.52 0 12.18c0 6.65 5.37 12.04 12 12.04 6.63 0 12-5.39 12-12.04C24 5.52 18.63.13 12 .13zm2.65 9.99l-.14 1.8H12.67v6.26h-2.33V11.93H9.1v-1.8h1.24V8.92c0-.53.01-1.36.39-1.87.41-.54.97-.91 1.93-.91 1.57 0 2.23.23 2.23.23l-.31 1.84s-.52-.15-1.04-.15c-.48 0-.92.17-.92.68v1.4h1.98z" fill="var(--primarycolor)" /></svg>
  };
  return icons[type] || null;
};

export default Footer;
