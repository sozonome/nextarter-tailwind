/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nextarter-daisy",
  titleTemplate: "%s | nextarter-daisy",
  defaultTitle: "nextarter-daisy",
  description: "Next.js + TailwindCSS (daisyUI & headless UI) + TypeScript template",
  canonical: "https://nextarter-daisy.sznm.dev",
  openGraph: {
    url: "https://nextarter-daisy.sznm.dev",
    title: "nextarter-daisy",
    description: "Next.js + TailwindCSS (daisyUI & headless UI) + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-daisy**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-daisy.sznm.dev og-image",
      },
    ],
    site_name: "nextarter-daisy",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
