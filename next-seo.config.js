/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nextarter-tailwind",
  titleTemplate: "%s | nextarter-tailwind",
  defaultTitle: "nextarter-tailwind",
  description: "Next.js + TailwindCSS (daisyUI & headless UI) + TypeScript template",
  canonical: "https://nextarter-tailwind.sznm.dev",
  openGraph: {
    url: "https://nextarter-tailwind.sznm.dev",
    title: "nextarter-tailwind",
    description: "Next.js + TailwindCSS (daisyUI & headless UI) + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-tailwind**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-tailwind.sznm.dev og-image",
      },
    ],
    site_name: "nextarter-tailwind",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
