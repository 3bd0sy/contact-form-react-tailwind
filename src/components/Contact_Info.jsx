const Contact_Info = () => {
  return (
    <>
      <section className="text-lg md:text-xl md:m-0 mb-16 flex gap-5 flex-col items-center md:items-start">
        <div className="flex items-center pl-6 gap-4">
          <svg
            width="25"
            height="18"
            viewBox="0 0 25 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.575 2.3325C0.726227 1.66986 1.09798 1.07822 1.62938 0.654463C2.16078 0.230706 2.82033 -4.57416e-05 3.5 6.80121e-09H21.5C22.1797 -4.57416e-05 22.8392 0.230706 23.3706 0.654463C23.902 1.07822 24.2738 1.66986 24.425 2.3325L12.5 9.621L0.575 2.3325ZM0.5 4.0455V14.7015L9.2045 9.3645L0.5 4.0455ZM10.6415 10.245L0.7865 16.2855C1.02999 16.7989 1.41429 17.2326 1.89467 17.5362C2.37505 17.8397 2.93176 18.0005 3.5 18H21.5C22.0681 18.0001 22.6246 17.8389 23.1048 17.5351C23.5849 17.2313 23.9688 16.7975 24.212 16.284L14.357 10.2435L12.5 11.379L10.6415 10.2435V10.245ZM15.7955 9.366L24.5 14.7015V4.0455L15.7955 9.3645V9.366Z"
              fill="#A91079"
            />
          </svg>
          <p>SaulDesign@gmail.com</p>
        </div>
        <div className="flex items-center w-[260px] lg:w-[390px] md:w-[300px]  pl-6 gap-4 bg-[#570a57] bg-opacity-50 border-4 border-[#A91079] border-solid rounded-2xl ">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.32747 0.766507C3.58994 0.50444 3.9051 0.301144 4.25207 0.170092C4.59904 0.0390392 4.96991 -0.0167773 5.34008 0.00634104C5.71026 0.0294594 6.0713 0.130985 6.39927 0.304189C6.72724 0.477393 7.01466 0.718321 7.24247 1.01101L9.93497 4.47001C10.4285 5.10451 10.6025 5.93101 10.4075 6.71101L9.58697 9.99601C9.54455 10.1662 9.54684 10.3444 9.59363 10.5134C9.64041 10.6824 9.73009 10.8364 9.85397 10.9605L13.5395 14.646C13.6637 14.7701 13.818 14.86 13.9873 14.9068C14.1566 14.9536 14.3351 14.9557 14.5055 14.913L17.789 14.0925C18.1739 13.9963 18.5757 13.9888 18.9639 14.0706C19.3521 14.1525 19.7167 14.3215 20.03 14.565L23.489 17.256C24.7325 18.2235 24.8465 20.061 23.7335 21.1725L22.1825 22.7235C21.0725 23.8335 19.4135 24.321 17.867 23.7765C13.9087 22.3838 10.3149 20.1178 7.35197 17.1465C4.38091 14.184 2.11489 10.5907 0.721974 6.63301C0.178974 5.08801 0.666474 3.42751 1.77647 2.31751L3.32747 0.766507Z"
              fill="#A91079"
            />
          </svg>
          <p className="my-[6px] md:my-6">+123 456 789</p>
        </div>
        <div className="flex items-center pl-6  gap-4">
          <svg
            width="25"
            height="28"
            viewBox="0 0 25 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 14C13.325 14 14.0315 13.7256 14.6195 13.1768C15.2065 12.6289 15.5 11.97 15.5 11.2C15.5 10.43 15.2065 9.7706 14.6195 9.2218C14.0315 8.67393 13.325 8.4 12.5 8.4C11.675 8.4 10.969 8.67393 10.382 9.2218C9.794 9.7706 9.5 10.43 9.5 11.2C9.5 11.97 9.794 12.6289 10.382 13.1768C10.969 13.7256 11.675 14 12.5 14ZM12.5 28C8.475 24.8033 5.469 21.8339 3.482 19.0918C1.494 16.3506 0.5 13.8133 0.5 11.48C0.5 7.98 1.7065 5.19167 4.1195 3.115C6.5315 1.03833 9.325 0 12.5 0C15.675 0 18.4685 1.03833 20.8805 3.115C23.2935 5.19167 24.5 7.98 24.5 11.48C24.5 13.8133 23.5065 16.3506 21.5195 19.0918C19.5315 21.8339 16.525 24.8033 12.5 28Z"
              fill="#A91079"
            />
          </svg>
          <p>123 Street 456 House</p>
        </div>
      </section>
    </>
  );
};

export default Contact_Info;
