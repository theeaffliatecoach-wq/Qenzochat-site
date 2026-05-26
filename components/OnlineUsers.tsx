const users = [
  {
    flag: '🇺🇸',
    name: 'Margaret USA',
    status: 'Typing...',
  },
  {
    flag: '🇬🇧',
    name: 'Robert H UK',
    status: 'Looking to talk',
  },
  {
    flag: '🇩🇪',
    name: 'Sophia Germany',
    status: 'Online now',
  },
  {
    flag: '🇨🇦',
    name: 'Daniel Canada',
    status: 'Available',
  },
]

export default function OnlineUsers() {

  return (
    <section className="py-24 bg-zinc-950 text-white">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12 text-center">
          Foreigners Online Right Now
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {users.map((user, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-center justify-between"
            >

              <div className="flex items-center gap-4">

                <span className="text-4xl">
                  {user.flag}
                </span>

                <div>

                  <h3 className="font-bold text-lg">
                    {user.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {user.status}
                  </p>

                </div>

              </div>

              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}