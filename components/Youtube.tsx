import React from "react";

export default function Youtube() {
  return (
    <section className="pt-20 container space-y-5 md:max-w-[70%] ">
      <h1 className="text-[#E2D398] text-[22px]">Review Chùa Bửu Long</h1>
      <div className=" w-full h-[220px] md:h-[400px]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dBsDE8yxvFc?si=qXwsbNturEHmHX7D"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
