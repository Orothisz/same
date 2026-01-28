export const metadata = {
  title: "Sameha Land",
  description: "A small world built slowly, softly, and only for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Subtle polish for Apple devices */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Disable ugly tap highlights */}
        <style>{`
          * {
            -webkit-tap-highlight-color: transparent;
          }
        `}</style>
      </head>

      <body>
        {/* App root */}
        <div id="app-root">{children}</div>
      </body>
    </html>
  );
}
