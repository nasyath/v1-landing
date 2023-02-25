import BaseLayout from "@/components/BaseLayout";
import useLoading from "@/hooks/useLoading";
import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import "nprogress/nprogress.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// design and code by farriq muwaffaq
export default function App({ Component, pageProps }: AppProps) {
  const loading = useLoading();
  return (
    <ChakraProvider theme={theme}>
      <BaseLayout className={inter.className}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
        </Head>
        <Component {...pageProps} />
      </BaseLayout>
    </ChakraProvider>
  );
}
