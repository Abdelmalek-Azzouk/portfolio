export default function Footer() {
  return (
    <footer className="w-full border-t border-black mt-12">
      <div className="container text-center py-6 text-sm text-gray-700">
        © {new Date().getFullYear()} MyPortfolio — Built with Next.js
      </div>
    </footer>
  );
}
