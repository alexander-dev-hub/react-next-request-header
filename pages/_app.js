
import React from 'react';

const MyApp = ({ Component, pageProps, router }) => {

    console.log('_app.js => render');
    return <Component {...pageProps} key={router.route}/>
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  console.log('_app.js => getInitialProps');
  let pageProps;
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default MyApp;
