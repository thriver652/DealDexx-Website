import "./globals.css";

export const metadata = {
  title: "DealDexx - Revolutionizing E-commerce",
  description:
    "Your one-stop platform for shopping, food delivery, and groceries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
