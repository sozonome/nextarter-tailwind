export const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a
            href="https://agustinusnathaniel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            agustinusnathaniel.com
          </a>
        </p>
      </div>
    </footer>
  );
};
