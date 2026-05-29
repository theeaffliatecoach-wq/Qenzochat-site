const leaders = [
  { name: 'Faith K', earnings: '$1,240' },
  { name: 'Daniel M', earnings: '$1,110' },
  { name: 'Mercy A', earnings: '$980' },
]

export default function Leaderboard() {

  return (

    <section className="py-24 bg-white dark:bg-black transition-colors duration-500">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16 text-black dark:text-white">
          Top Earners This Week
        </h2>

        <div className="space-y-6">

          {leaders.map((leader, index) => (

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
                flex
                items-center
                justify-between
              "
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center font-bold text-black">
                  #{index + 1}
                </div>

                <p className="text-xl font-semibold text-black dark:text-white">
                  {leader.name}
                </p>

              </div>

              <p className="text-green-500 text-2xl font-bold">
                {leader.earnings}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}