import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>Lorem ipsum dolor sit.</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
          repellendus, nam enim ut sint molestiae cum ex.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
        <div className=" mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 ">
          <Member id="dogo1" name="dogo1" socialId="@dogo1" />
          <Member id="dogo1" name="dogo2" socialId="@dogo2" />
          <Member id="dogo1" name="dogo3" socialId="@dogo3" />
          <Member id="dogo1" name="dogo4" socialId="@dogo4" />
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
