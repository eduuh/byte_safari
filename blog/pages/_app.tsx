import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { NextPageWithLayout } from './page';
import { ThemeProvider } from 'next-themes';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <ThemeProvider enableSystem={true} attribute="class">
        <div className="flex-container">
          <div className="container">
            {getLayout(<Component {...pageProps} />)}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
