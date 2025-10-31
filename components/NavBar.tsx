export default function NavBar() {
  return (
    <nav className="w-full border-b border-black">
      <div className="container flex justify-between items-center py-4">
        <h2 className="text-2xl font-semibold">MyPortfolio</h2>
        <div className="space-x-6">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}
