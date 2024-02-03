import React from "react";

const socialData = [
  {
    name: "GitHub Repo.",
    link: "https://github.com/imayden/Resumizer.git",
  },
  {
    name: "Ayden",
    link: "https://github.com/imayden",
  },
  {
    name: "Danny",
    link: "https://github.com/dcapua",
  },
  {
    name: "Earth",
    link: "https://github.com/earthcha",
  },
  {
    name: "Henry",
    link: "https://github.com/phhoang98a", 
  }
];
function Socials() {
  return (
    <div className="flex overflow-hidden justify-around items-center gap-x-2 gap-y-2 my-2  max-md:grid max-md:auto-cols-[1fr] max-md:gap-x-2 max-md:gap-y-2 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto]">
      {socialData.map((social) => (
        <a
          href={social.link}
          key={social.link}
          target="_blank" 
          rel="noopener noreferrer" // Secure the websites
          className="flex w-full min-h-[56px] justify-center items-center bg-[#131315] transition-[background-color] duration-300 ease-[ease-out] text-white text-lg leading-6 text-center tracking-[-0.01em] px-6 py-4 rounded-[99px]"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
}

export default Socials;
