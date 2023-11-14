
const Header = () => {

  return (
    <header className="w-screen h-24 shadow-lg flex flex-row gap-3 items-center pl-5 fixed top-0 bg-white z-50">
      <img src="https://dronesdebaixocusto-images.s3.us-east-2.amazonaws.com/img/logos/logo.png" className="w-[142px] h-auto drop-shadow-xl" alt="Logo" />
      <menu className="w-full justify-end flex flex-row gap-5 pr-24">
        <option className={`text-l font-medium border-b-[3px] border-gray-500 hover:border-epic_blue text-gray-500 hover:text-gray-700`}>Início</option>
        <option className={`text-l font-medium border-b-[3px] border-gray-500 hover:border-epic_green text-gray-500 hover:text-gray-700`}>Iniciativas</option>
        <option className={`text-l font-medium border-b-[3px] border-gray-500 hover:border-epic_yellow text-gray-500 hover:text-gray-700`}>Sobre nós</option>
        <option className={`text-l font-medium border-b-[3px] border-gray-500 hover:border-epic_red text-gray-500 hover:text-gray-700`}>Contato</option>
      </menu>
    </header>
  );
};

export default Header;