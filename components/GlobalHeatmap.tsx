export default function GlobalHeatmap() {
  const countries = [
    '🇺🇸 USA',
    '🇬🇧 UK',
    '🇩🇪 Germany',
    '🇰🇪 Kenya',
    '🇳🇬 Nigeria',
    '🇿🇦 South Africa',
    '🇹🇿 Tanzania',
    '🇺🇬 Uganda',
    '🇨🇲 Cameroon',
    '🇨🇦 Canada',
  ]

  return (
    <section className="py-16 bg-white dark:bg-zinc-950 transition-colors duration-700">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16 text-black dark:text-white transition-colors duration-500">
          Global User Activity
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {countries.map((country, index) => (
            <div
              key={index}
             className="
  bg-gray-100 dark:bg-gray-100 dark:bg-zinc-900 transition-colors duration-500
  border border-gray-200 dark:border-zinc-800
  rounded-2xl p-6 text-center
  hover:scale-105 transition-all duration-300
"
            >
              <div className="text-4xl mb-3">
                {country.split(' ')[0]}
              </div>

              <p className="font-semibold text-gray-700 dark:text-gray-300">
                {country.split(' ').slice(1).join(' ')}
              </p>

              <div className="mt-4 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}