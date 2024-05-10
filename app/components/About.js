import React from "react";

const About = () => {
  return (
    <div className=" py-14 px-2  " id="about">
      <h2 className="text-3xl text-black font-semibold text-center mb-10 ">
        About
      </h2>
      <div className="flex flex-wrap  gap-4  items-center justify-between">
        <div className="w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(55%_-_17px)]  ">
          <img
            src={"/assets/side/Palace-Residences-at-Hills-Estate.jpg"}
            className="object-cover w-full h-[500px] rounded-2xl"
          />
        </div>
        <div className="flex flex-col text-base w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(45%_-_17px)] pr-4 gap-8 md:gap-4 md:ml-4 font-normal break-words text-wrap">
          <p className="break-all">
            Palace Residences by Emaar Properties introduces the first 5-star
            branded residence in{" "}
            <span className="font-semibold"> Dubai Hills Estate </span>,
            offering premium 1, 2, and 3-bedroom apartments. Nestled in Dubai
            Hills Park, these residences blend sleek architecture with natural
            elements, creating a serene atmosphere. Positioned between Downtown
            Dubai and Dubai Marina, residents enjoy easy access to the city's
            attractions. With schools, healthcare facilities, supermarkets, and
            recreational amenities, Dubai Hills Estate offers a thriving
            lifestyle. Investing in Palace Residences represents a smart choice,
            providing long-term value and an integrated living experience for
            residents and investors alike.
          </p>

          <p className="break-all">
            <ul className="list-disc ml-4">
              <li>World-class 18-hole championship golf course</li>
              <li>
                180,000 sqm Dubai Hills Park - a haven for recreation and
                relaxation
              </li>
              <li>
                Convenient access to education: 3 schools within close
                proximity.
              </li>
              <li>Conveniently located near major highways.</li>
              <li>Nestled within Dubai's prestigious Dubai Hills Estate</li>
              <li>
                Wake up to breathtaking panoramas of Dubai Hills Estate from
                your private balcony.
              </li>
              <li>
                Palace Residences boasts meticulous interiors and spacious
                layouts.
              </li>
              <li>
                Discover exclusive 5-star branded residences in Dubai Hills
                Estate. Choose from premium 1, 2, or 3-bedroom apartments.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
