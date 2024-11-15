import { useState } from "react";

const Form = () => {
  const [date, setDate] = useState({});
  const handleClick = (e) => {
    e.preventDefault();
    console.log(date);
  };

  return (
    <>
      <form
        action=""
        className="bg-white ml-5 text-black max-w-[700px] md:p-6 lg:p-12 rounded-[24px]  p-5   "
      >
        <h3 className="text-base md:text-xl">I’m interested in...</h3>

        <div className="text-xs flex flex-wrap gap-2 md:gap-4">
          <button className="bg-[#A91079] text-xs md:text-xl md:p-4 text-white rounded-lg border-none py-3 px-2 ">
            UI/UX design
          </button>

          <button className="bg-white text-xs border-solid md:text-xl md:p-4 border-slate-400 border-2  text-slate-400 rounded-lg  py-[10px] px-2 ">
            web design
          </button>

          <button className="bg-white text-xs border-solid md:text-xl md:p-4 border-slate-400 border-2  text-slate-400 rounded-lg  py-[10px] px-2 ">
            other
          </button>

          <button className="bg-white text-xs border-solid md:text-xl md:p-4 border-slate-400 border-2  text-slate-400 rounded-lg  py-[10px] px-2 ">
            python
          </button>

          <button className="bg-white text-xs border-solid md:text-xl md:p-4 border-slate-400 border-2  text-slate-400 rounded-lg  py-[10px] px-2 ">
            design system
          </button>
          <button className="bg-white text-xs border-solid md:text-xl md:p-4 border-slate-400 border-2  text-slate-400 rounded-lg  py-[10px] px-2 ">
            graphic design
          </button>
        </div>
        <div className="mt-14 md:mt-16">
          <input
            onChange={(e) =>
              setDate({ ...date, [e.target.name]: e.target.value })
            }
            name="name"
            type="text"
            placeholder="Your name"
            className=" border-x-0 outline-none md:text-xl text-base pb-2 border-b-2 border-t-0 border-solid border-[#a91079] p-0 w-full"
          />
        </div>

        <div>
          <input
            onChange={(e) =>
              setDate({ ...date, [e.target.name]: e.target.value })
            }
            name="email"
            type="text"
            placeholder="Your email"
            className="mt-8 outline-none md:mt-16 border-x-0 md:text-xl text-base pb-2 border-b-2 border-t-0 border-solid p-0 border-[#a91079] w-full"
          />
        </div>

        <div>
          <input
            onChange={(e) =>
              setDate({ ...date, [e.target.name]: e.target.value })
            }
            name="message"
            type="text"
            placeholder="Your message"
            className="mt-8 outline-none md:mt-16 border-x-0 md:text-xl text-base pb-2 border-b-2 border-t-0 border-solid p-0 border-[#a91079] w-full"
          />
        </div>

        <button
          onClick={(e) => handleClick(e)}
          className="flex items-center gap-4 rounded-2xl bg-[#a91079] text-base md:py-6 md:px-16 py-[10px] px-6 border-none text-white mt-32 mdd:mt-52"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.9471 1.02859C24.0017 0.892291 24.015 0.742981 23.9855 0.599166C23.956 0.455352 23.885 0.323358 23.7812 0.219548C23.6774 0.115738 23.5454 0.0446781 23.4015 0.015177C23.2577 -0.0143242 23.1084 -0.000968961 22.9721 0.053587L1.15162 8.78209H1.15012L0.472125 9.05209C0.34371 9.10331 0.231953 9.18903 0.149198 9.29978C0.0664433 9.41053 0.0159116 9.542 0.00318483 9.67967C-0.00954198 9.81734 0.0160314 9.95584 0.0770801 10.0799C0.138129 10.2039 0.232277 10.3087 0.349125 10.3826L0.964125 10.7726L0.965625 10.7756L8.45812 15.5426L13.2251 23.0351L13.2281 23.0381L13.6181 23.6531C13.6923 23.7695 13.7971 23.8632 13.921 23.9238C14.045 23.9845 14.1833 24.0098 14.3207 23.9969C14.4581 23.984 14.5892 23.9335 14.6998 23.8509C14.8103 23.7683 14.8959 23.6567 14.9471 23.5286L23.9471 1.02859ZM21.1976 3.86359L9.95662 15.1046L9.63412 14.5976C9.57503 14.5045 9.49616 14.4257 9.40312 14.3666L8.89612 14.0441L20.1371 2.80309L21.9041 2.09659L21.1991 3.86359H21.1976Z"
              fill="#EEEEEE"
            />
          </svg>
          Send Message
        </button>
      </form>
    </>
  );
};

export default Form;
