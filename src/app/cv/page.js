import React from "react";

const Page = () => {
  const numbers = Array.from({ length: 56 }, (_, index) => index + 1);

  return (
    <div className="w-full bg-black100 flex flex-col justify-center items-center py-[50px]">
      <div className="relative">
        <div
          id="CV"
          className="relative flex flex-row w-[800px] h-auto bg-[#EBEDE9] p-4 border-4 border-greenGrey gap-3"
        >
          <div
            id="left"
            className="flex flex-col text-sm text-black200 opacity-30"
          >
            {numbers.map((number) => (
              <span key={number}>{number} </span>
            ))}
          </div>
          <div id="right" className="flex flex-col w-full gap-3 justify-center leading-6">
            <div id="top-section" className="flex flex-row justify-between">
              <div>
                <h1 className="text-black100 text-4xl font-bold">ANTON DVARAVENKA</h1>
                <h2 className="text-[#58641D] text-2xl font-bold">FRONT-END DEVELOPER</h2>
                <p className="text-black100 text-1xl font-bold">LIVERPOOL, UK</p>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <a href="#" className="font-bold">linkedin</a>
                <a href="#" className="font-bold">mail</a>
              </div>
            </div>
            <div id="experience-section" className="flex flex-col gap-3">
              <span className="flex flex-col gap-1">
                <h3 className="text-[#B23A48] font-bold text-[18px]">
                  <span className="text-[#58641D]">/</span>EXPERIENCE
                </h3>
                <div id="work-title" className="flex flex-row justify-between">
                  <h4 className="text-[#58641D] font-bold">Pronetix, St. Helens</h4>
                  <p className="text-[#58641D] font-bold">06/2022-05/2024</p>
                </div>
                <p className="font-semibold">(wordpress/front-end developer)</p>
                <ul className="list-disc pl-5">
                  <li>
                    Developed custom responsive themes from scratch for the
                    company’s corporate websites, utilizing ACF, custom post
                    types, and REST API.
                  </li>
                  <li>
                    Developed a cost-saving calculator and a CO2 emissions
                    reduction calculator using JavaScript, MySQL, and WordPress
                    hooks, leading to a 15% reduction in CO2 emissions for client
                    companies.
                  </li>
                  <li>
                    Collaborated with a designer to implement new designs, cutting
                    implementation time by 30% via a structured task management
                    system in Jira and ensuring pixel-perfect Figma accuracy.
                  </li>
                  <li>
                    Participated in the large-scale frontend development of an
                    indoor hospital navigation web portal using React,
                    TailwindCSS, and DaisyUI, with Git used as the version control
                    system.
                  </li>
                  <li>
                    Conducted regular cross-platform testing using both manual
                    methods and automated tests written in Python and Selenium,
                    greatly reducing post-launch bug reports.
                  </li>
                  <li>
                    Worked on optimizing the website for SEO and configured GA and
                    GTM, improving conversion rates by 20% through accurate
                    tracking and data-driven insights.
                  </li>
                </ul>
              </span>
              <span className="flex flex-col gap-1">
                <div id="work-title" className="flex flex-row justify-between">
                  <h4 className="text-[#58641D] font-bold">FREELANCE, International </h4>
                  <p className="text-[#58641D] font-bold">02/2021-05/2022</p>
                </div>
                <p className="font-semibold">(wordpress/front-end developer)</p>
                <ul className="list-disc pl-5">
                  <li>
                    Developing websites for small and medium-sized businesses was
                    my primary focus during my freelance work.
                  </li>
                </ul>
              </span>
              <span className="flex flex-col gap-1">
                <div id="work-title" className="flex flex-row justify-between">
                  <h4 className="text-[#58641D] font-bold">DELO RUK, MINSK </h4>
                  <p className="text-[#58641D] font-bold">01/2018-12/2021</p>
                </div>
                <p className="font-semibold">(wordpress developer)</p>
                <ul className="list-disc pl-5">
                  <li>
                    Defined the target audience, analyzed business needs, and
                    formulated functional requirements for the online store.
                    Developed the site using WordPress with Elementor and
                    WooCommerce, achieving readiness for payment acceptance in
                    just 3 weeks from initial concept.
                  </li>
                  <li>
                    Integrated payment gateways and configured anti-fraud systems
                    on the website, ensuring uninterrupted and secure payment
                    processing. These measures significantly enhanced transaction
                    protection against fraud and guaranteed users a high level of
                    trust in the payment process.
                  </li>
                  <li>
                    Set up custom events for tracking in Google Analytics, closely
                    collaborated with the marketing department, conducted A/B
                    testing, and optimised the store. Achieving a conversion rate
                    of 4.5%, which is 1.5% higher than the industry average.
                  </li>
                </ul>
              </span>
            </div>
            <div id="skill-section" className="flex flex-col gap-1">
              <h3 className="text-[#B23A48] font-bold text-[18px]">
                <span className="text-[#58641D]">/</span>SKILL
              </h3>
              <p>
                <span className="font-semibold">Front-end:</span> HTML, CSS, TailwindCSS, Bootstrap, JavaScript,
                React, Next.js, Gatsby
              </p>
              <p>
                <span className="font-semibold">Back-end:</span> PHP, Wordpress Core, WooCommerce, MySQL
              </p>
              <p>
                <span className="font-semibold">Testing:</span> Python + Selenium
              </p>
              <p>
                <span className="font-semibold">Other:</span> Figma, UX/UI, Responsive Web Design, SEO,
                Performance Optimization
              </p>
            </div>
            <div id="educational" className="flex flex-col gap-1">
              <h3 className="text-[#B23A48] font-bold text-[18px]">
                <span className="text-[#58641D]">/</span>EDUCATIONAL
              </h3>
              <p>
                Academy of Public Administration under the aegis of the President
                of the Republic of Belarus - Bachelor of Laws (LLB)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
