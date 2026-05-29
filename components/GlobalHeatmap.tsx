export default function GlobalHeatmap() {

  const countries = [
    '🇺🇸 USA',
    '🇬🇧 UK',
    '🇩🇪 Germany',
    '🇰🇪 Kenya',
    '🇳🇬 Nigeria',
    '🇿🇦 South Africa',
  ]

  return (

    <section className="py-16 bg-white dark:bg-zinc-950 transition-colors duration-500">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16 text-black dark:text-white">
          Global User Activity
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {countries.map((country, index) => (

            <div
              key={index}
              className="
                bg-gray-100
                dark:bg-zinc-900
                border
                border-gray-200
                dark:border-zinc-800
                rounded-2xl
                p-6
                text-center
                hover:scale-105
                transition-all
                duration-300
              "
            >

              <div className="text-4xl mb-4">
                {country.split(' ')[0]}
              </div>

              <p className="font-semibold text-black dark:text-white">
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