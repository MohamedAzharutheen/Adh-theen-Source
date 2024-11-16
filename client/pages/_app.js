// pages/_app.js
import '@/styles/globals.css'; // Your global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min').catch((error) => {
      console.error('Failed to load Bootstrap JS:', error);
    });
  }, []);

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
