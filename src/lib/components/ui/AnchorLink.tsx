import clsx from "clsx";
import type { ReactNode } from "react";

type AnchorLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

const AnchorLink = ({ href, children, className }: AnchorLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={clsx("", className)}
    >
      {children}
    </a>
  );
};

export default AnchorLink;
