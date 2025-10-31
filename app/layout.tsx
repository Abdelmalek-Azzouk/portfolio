export const metadata = {
  title: "My AI Portfolio",
  description: "Showcasing my AI & ML projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">{children}</body>
    </html>
  );
}
