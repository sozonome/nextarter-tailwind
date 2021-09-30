const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p>
          {new Date().getFullYear()} -{" "}
          <a href="https://sznm.dev" target="_blank" rel="noopener noreferrer">
            sznm.dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
