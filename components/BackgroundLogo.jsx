// /components/BackgroundLogo.jsx
export default function BackgroundLogo() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      <img
        src="/logo.webp"
        alt="Psicopiloto logo"
        className="max-w-[500px] w-2/3 h-auto"
      />
    </div>
  );
}
