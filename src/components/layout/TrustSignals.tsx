const trustPoints = ['100% Free Tools', 'No Signup Required', 'Fast & Secure'];

export function TrustSignals() {
  return (
    <section className="border-b bg-muted/30">
      <div className="container mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 text-sm font-medium text-foreground sm:px-6 lg:px-8">
        {trustPoints.map((point) => (
          <span key={point} className="inline-flex items-center gap-2">
            <span className="text-emerald-600" aria-hidden="true">
              ✔
            </span>
            {point}
          </span>
        ))}
      </div>
    </section>
  );
}
