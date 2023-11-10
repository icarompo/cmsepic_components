import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("Inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let found = false;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (!found && window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("data-title"));
          found = true;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="w-screen h-24 shadow-lg flex flex-row gap-3 items-center pl-5 fixed top-0 bg-white z-50">
      <img src="https://dronesdebaixocusto-images.s3.us-east-2.amazonaws.com/img/logos/logo.png" className="w-[142px] h-auto drop-shadow-xl" alt="Logo" />
      <menu className="w-full justify-end flex flex-row gap-5 pr-24">
        <option onClick={() => scrollToSection("Inicio")} className={`text-l font-medium ${activeSection === "Inicio" && "border-b-[3px] border-epic_blue"} text-gray-500 hover:text-gray-700`}>Início</option>
        <option onClick={() => scrollToSection("Iniciativas")} className={`text-l font-medium ${activeSection === "Iniciativas" && "border-b-[3px] border-epic_green"} text-gray-500 hover:text-gray-700`}>Iniciativas</option>
        <option onClick={() => scrollToSection("SobreNos")} className={`text-l font-medium ${activeSection === "Sobre nós" && "border-b-[3px] border-epic_yellow"} text-gray-500 hover:text-gray-700`}>Sobre nós</option>
        <option onClick={() => scrollToSection("Contato")} className={`text-l font-medium ${activeSection === "Contato" && "border-b-[3px] border-epic_red"} text-gray-500 hover:text-gray-700`}>Contato</option>
      </menu>
    </header>
  );
};

export default Header;
