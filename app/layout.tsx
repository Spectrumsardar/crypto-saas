export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="absolute top-64 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/12 blur-[120px]" />
        <div className="absolute bottom-[-160px] left-[-120px] h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.95))]" />
      </div>

      {/* Container */}
      <div className="relative mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <span className="text-lg font-semibold">L</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">Licrown</div>
              <div className="text-xs text-white/60">Crypto SaaS • USDT (BEP20)</div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <a
              href="/login"
              className="rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 ring-1 ring-white/10"
            >
              Login
            </a>
            <a
              href="/signup"
              className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              Get Started
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Live deposits • Automated crediting • Admin-controlled withdrawals
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Premium <span className="text-white/60">USDT (BEP20)</span> Wallet
              <br className="hidden sm:block" />
              Platform for your SaaS
            </h1>

            <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              Secure user accounts, unique deposit address per user, automated on-chain deposit detection,
              full audit logs, and withdrawals that require admin approval.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/signup"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Create account
              </a>
              <a
                href="#how"
                className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 ring-1 ring-white/15"
              >
                How it works
              </a>
            </div>

            <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold text-white/80">Important</div>
              <div className="mt-1 text-sm text-white/70">
                Send only <span className="font-semibold text-white">USDT (BEP20)</span> on{" "}
                <span className="font-semibold text-white">BSC</span>. Wrong network may lose funds.
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-3xl bg-white/6 p-5 ring-1 ring-white/12">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Dashboard Preview</div>
              <div className="text-xs text-white/60">Dark SaaS</div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <StatCard title="Balance" value="$0.00" sub="Available USDT" />
              <StatCard title="Deposits" value="0" sub="Auto credited" />
              <StatCard title="Withdrawals" value="0" sub="Admin approved" />
              <StatCard title="Audit Logs" value="On" sub="All actions tracked" />
            </div>

            <div className="mt-4 rounded-2xl bg-black/40 p-4 ring-1 ring-white/10">
              <div className="text-xs text-white/60">Your deposit address</div>
              <div className="mt-2 flex items-center justify-between gap-3 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
                <div className="truncate text-sm text-white/85">0xYourUniqueDepositAddress...</div>
                <div className="shrink-0 rounded-lg bg-white/10 px-2 py-1 text-xs text-white/70">
                  QR
                </div>
              </div>
              <div className="mt-2 text-xs text-white/60">
                Deposits confirm after required block confirmations.
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <span className="text-sm text-white/60">Secure by design</span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <FeatureCard
              title="1) Unique deposit address"
              desc="Each user gets a dedicated BSC address. Transfers are detected via USDT Transfer logs."
            />
            <FeatureCard
              title="2) Automated crediting"
              desc="Background scanner confirms deposits after N blocks, idempotent crediting prevents duplicates."
            />
            <FeatureCard
              title="3) Manual withdrawals"
              desc="Users request withdrawals, admin approves, and owner manually signs payouts for safety."
            />
          </div>
        </section>

        {/* Pricing */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Plans</h2>
            <span className="text-sm text-white/60">Free-tier friendly</span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <PriceCard
              name="Starter"
              price="$0"
              desc="For testing & staging"
              items={[
                "Auth + User dashboard UI",
                "Deposit address display + warnings",
                "Audit-ready DB schema",
              ]}
              cta="Start free"
              href="/signup"
            />
            <PriceCard
              name="Production"
              price="Custom"
              desc="Full crypto wallet SaaS"
              items={[
                "Automated deposit scanner + confirmations",
                "Admin dashboard + approvals",
                "Full audit logs + rate limits",
              ]}
              cta="Go live"
              href="/signup"
              highlight
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 py-8 text-sm text-white/60">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Licrown. All rights reserved.</div>
            <div className="flex gap-4">
              <a className="hover:text-white" href="/terms">Terms</a>
              <a className="hover:text-white" href="/privacy">Privacy</a>
              <a className="hover:text-white" href="/support">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function StatCard({ title, value, sub }: { title: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
      <div className="text-xs text-white/60">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-white/60">{sub}</div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function PriceCard({
  name,
  price,
  desc,
  items,
  cta,
  href,
  highlight,
}: {
  name: string;
  price: string;
  desc: string;
  items: string[];
  cta: string;
  href: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl p-6 ring-1",
        highlight ? "bg-white/8 ring-white/20" : "bg-white/5 ring-white/10",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="mt-1 text-sm text-white/60">{desc}</div>
        </div>
        {highlight ? (
          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200 ring-1 ring-emerald-400/20">
            Recommended
          </span>
        ) : null}
      </div>

      <div className="mt-5 text-4xl font-semibold">{price}</div>

      <ul className="mt-5 space-y-2 text-sm text-white/70">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            <span>{it}</span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        className={[
          "mt-6 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold",
          highlight ? "bg-white text-black hover:bg-white/90" : "bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15",
        ].join(" ")}
      >
        {cta}
      </a>

      <div className="mt-3 text-xs text-white/50">
        Withdrawals require admin approval + manual signing.
      </div>
    </div>
  );
}
