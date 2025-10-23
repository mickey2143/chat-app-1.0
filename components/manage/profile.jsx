export default function ProfileSection() {
  return (
    <section className="flex flex-col items-center text-center gap-4 p-4 rounded-xl bg-card-dark shadow-lg">
      <div className="bg-center bg-cover rounded-full h-32 w-32 border-2 border-white/20 shadow-md"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMi1x3lxhneBCB-5wLOE8n6k57pfGidJYabN1RBYqw9G9NPPueuC5eX-WpRKCiL1_3lSXWVIj_7HiwKuMOKzMsvG42XUxvU9Tm_-qpWpj2wgWRelN9pjPRrrI2gwoPf25xKKdjl0-cjXFM05fYL1qYe4tm_p0K0xZxCUox404ZncIn3s5uZoBIXsmjHLNB2lwdUePrR2pFjM4O8ywc7A7RACmHZJAq-Jexg5sPlwUrZp1VF7dMF1m3O0cIiwUfgVoDwfa7Jip6QLqS")',
        }}
      />
      <p className="text-xl font-bold text-white">Wandering Comet</p>

      <button className="flex items-center justify-center gap-2 rounded-lg bg-primary text-background-dark px-5 py-2 font-bold text-sm hover:opacity-90 transition w-full sm:w-auto">
        <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
</span>
        <span>Generate New Identity</span>
      </button>
    </section>
  );
}
