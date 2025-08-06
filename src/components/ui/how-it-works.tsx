export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Transfer your playlists in three simple steps. No technical knowledge required.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-3">Connect Spotify</h3>
            <p className="text-gray-600">Sign in to your Spotify account and select the playlists you want to transfer.</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-3">Connect YouTube Music</h3>
            <p className="text-gray-600">Link your YouTube Music account where your playlists will be created.</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-3">Transfer Complete</h3>
            <p className="text-gray-600">Sit back and relax while we transfer your playlists. You'll get notified when it's done!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
