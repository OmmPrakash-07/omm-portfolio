export default function Home() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center">
        <div className="glass rounded-3xl p-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Portfolio
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Omm{" "}
            <span className="gradient-text">
              Prakash
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-zinc-400">
            Full Stack Web Developer building modern web
            applications and AI-powered solutions.
          </p>
        </div>
      </div>
    </main>
  );
}