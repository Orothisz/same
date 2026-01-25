export const metadata = {
  title: "Sameha Land 💗",
  description: "100 Days of Love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
