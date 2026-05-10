export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Visual Map of{' '}
          <span className="text-[#58a6ff]">Slow Database Queries</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your database, analyze query performance logs, and instantly see which tables are bottlenecks — rendered as an interactive D3.js heatmap with drill-down capabilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $35/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 text-xs text-[#8b949e] font-mono">query-performance-map</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { table: 'orders', ms: 1840, heat: 'bg-red-600' },
              { table: 'users', ms: 920, heat: 'bg-orange-500' },
              { table: 'products', ms: 640, heat: 'bg-yellow-500' },
              { table: 'sessions', ms: 410, heat: 'bg-yellow-400' },
              { table: 'logs', ms: 280, heat: 'bg-green-500' },
              { table: 'inventory', ms: 130, heat: 'bg-green-700' },
            ].map((row) => (
              <div key={row.table} className={`${row.heat} bg-opacity-20 border border-[#30363d] rounded-lg p-3`}>
                <p className="text-xs font-mono text-[#8b949e] mb-1">{row.table}</p>
                <p className="text-white font-bold text-sm">{row.ms}ms</p>
                <div className="mt-2 h-1 rounded-full bg-[#30363d]">
                  <div className={`h-1 rounded-full ${row.heat}`} style={{ width: `${Math.min(100, (row.ms / 1840) * 100)}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$35</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Connect unlimited databases',
              'Real-time query performance heatmaps',
              'Drill-down per table & query',
              'Slow query alerts via email',
              'Export reports as PDF/CSV',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which databases are supported?',
              a: 'PostgreSQL, MySQL, and MariaDB are fully supported. MongoDB support is on the roadmap.'
            },
            {
              q: 'Is my database data stored on your servers?',
              a: 'No. We only read query performance metadata (execution times, table names, query plans). Your actual data never leaves your infrastructure.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel anytime from your billing dashboard with no cancellation fees. Your access continues until the end of the billing period.'
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} DB Query Performance Map. All rights reserved.
      </footer>
    </main>
  )
}
