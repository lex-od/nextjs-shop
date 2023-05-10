import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { IMeta } from "./Meta.interface";

const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  const fullTitle = `${title} | Next.js Shop`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={fullTitle} />
            <meta name="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>

      {children}
    </>
  );
};

export default Meta;
