export function Footer() {
  return (
    <footer className="border-t border-blue-800/30 bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Taufik Pragusga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}