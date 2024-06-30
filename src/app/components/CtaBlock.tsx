// components/CtaBlock.js
import { Button } from "@nextui-org/react";

const CtaBlock = () => {
  return (
    <div className="relative bg-gray-800 text-white p-8 my-8 flex justify-center items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.cyberfolks.pl/img/cpx/construction%20company-17876802-hi_res.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 text-center">
        <span className="text-orange-600 flex items-center justify-center mb-4">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <path
              d="M9.05327 18.0159C11.3705 17.9936 13.6647 17.0337 15.3144 15.4034C17.2737 13.4672 18.2828 10.6023 17.9308 7.86741C17.3276 3.18037 13.4748 0 8.99539 0C5.5923 0 2.2845 2.12887 0.833752 5.21593C-0.276941 7.57935 -0.278893 10.4325 0.833752 12.8002C2.27422 15.8654 5.52763 17.9831 8.93752 18.0159C8.9761 18.016 9.01469 18.016 9.05327 18.0159ZM8.94716 16.5146C5.48589 16.4812 2.25665 13.8046 1.6146 10.373C1.16195 7.95356 2.01647 5.3354 3.79647 3.6173C5.875 1.61105 9.14144 0.938865 11.8574 2.07613C14.2877 3.09382 16.1065 5.45618 16.4417 8.05914C16.729 10.2901 15.9283 12.6283 14.355 14.239C12.975 15.6517 11.0396 16.4953 9.04362 16.5146C9.01146 16.5147 8.97933 16.5147 8.94716 16.5146Z"
              fill="currentColor"
            />
            <path
              d="M8.99661 15.3602C12.5094 15.3602 15.357 12.5125 15.357 8.99979C15.357 5.48705 12.5094 2.6394 8.99661 2.6394C5.48387 2.6394 2.63623 5.48705 2.63623 8.99979C2.63623 12.5125 5.48387 15.3602 8.99661 15.3602Z"
              fill="currentColor"
            />
          </svg>
          Czytaj więcej
        </span>
        <h2 className="text-2xl font-bold mb-4">Ociepl swój dom ekologicznie - zamów teraz!</h2>
        <Button
          as="a"
          href="https://now.cyberfolks.pl/demo/CP97GNGSF1VW/kontakt"
          className="bg-orange-600 text-white px-5 py-3"
        >
          Czytaj więcej
        </Button>
      </div>
    </div>
  );
};

export default CtaBlock;
