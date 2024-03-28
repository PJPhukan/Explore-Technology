export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="text-center">Inner layout inside the first</div>
      {children}
    </>
  );
}
