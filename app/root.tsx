import type { LinksFunction, MetaFunction } from '@remix-run/deno';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import * as React from 'react';
// @ts-ignore
import styles from './styles/app.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
