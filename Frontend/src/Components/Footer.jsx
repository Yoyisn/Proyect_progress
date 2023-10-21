
const Footer = () => {
  return (
    <>
    <div className="border-t shadow-sm hover:shadow-lg border-gray-100 dark:border-Darkred translate-y-[-120px] pt-5">
          <ul className="flex flex-wrap gap-4 text-xs">
            <li>
              <a
                href="#"
                className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
              >
                Terms & Conditions
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
              >
                Cookies
              </a>
            </li>
          </ul>

          <p className="mt-3 pb-3 text-xs text-gray-500 dark:text-gray-400">
            &copy; 2022. Company Name. All rights reserved.
          </p>
        </div>
    </>
    
  );
};

export default Footer;