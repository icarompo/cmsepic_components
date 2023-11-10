

// eslint-disable-next-line react/prop-types
const Section = ({ title, color }) => {
  const sectionStyle = {
    height: "100vh",
    backgroundColor: `#${color}10`, // Ajuste a opacidade conforme necessário
    border: `3px solid transparent`,
    borderBottomColor: `var(--${color})`,
  };

  return (
    <section className="w-screen" style={sectionStyle}>
      <h2 className="text-4xl font-bold text-center mt-10">{title}</h2>
      {/* Seu conteúdo da seção vai aqui */}
    </section>
  );
};

export default Section;
