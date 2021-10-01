/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nextdaisy-starter",
  titleTemplate: "%s | nextdaisy-starter",
  defaultTitle: "nextdaisy-starter",
  description: "Next.js + TailwindCSS (daisyUI & headless UI) + TypeScript template",
  canonical: "https://nextdaisy-starter.sznm.dev",
  openGraph: {
    url: "https://nextdaisy-starter.sznm.dev",
    title: "nextdaisy-starter",
    description: "Next.js + TailwindCSS (daisyUI & headless UI) + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextdaisy-starter**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextdaisy-starter.sznm.dev og-image",
      },
    ],
    site_name: "nextdaisy-starter",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
