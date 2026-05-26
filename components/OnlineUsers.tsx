'use client'

const users = [
  {
    name: 'Sophie',
    country: 'France',
    flag: '🇫🇷',
    age: 24,
    image: '/users/sophie.jpg',
    status: 'Typing...',
    lastSeen: 'Active now',
  },
  {
    name: 'Michael',
    country: 'USA',
    flag: '🇺🇸',
    age: 31,
    image: '/users/michael.jpg',
    status: 'Online',
    lastSeen: '2 mins ago',
  },
  {
    name: 'Aaliyah',
    country: 'Canada',
    flag: '🇨🇦',
    age: 27,
    image: '/users/aaliyah.jpg',
    status: 'Typing...',
    lastSeen: 'Active now',
  },
  {
    name: 'Emma',
    country: 'UK',
    flag: '🇬🇧',
    age: 22,
    image: '/users/emma.jpg',
    status: 'Online',
    lastSeen: '5 mins ago',
  },
  {
    name: 'Daniel',
    country: 'Germany',
    flag: '🇩🇪',
    age: 29,
    image: '/users/daniel.jpg',
    status: 'Typing...',
    lastSeen: 'Active now',
  },
  {
    name: 'Camila',
    country: 'Brazil',
    flag: '🇧🇷',
    age: 26,
    image: '/users/camila.jpg',
    status: 'Online',
    lastSeen: '1 min ago',
  },
]

export default function OnlineUsers() {

  return (

    <section className="py-20 px-6 bg-black">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Foreigners Online Now
        </h2>

        <p className="text-gray-400 text-center mb-14 text-lg">
          Meet active chatters from different countries worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {users.map((user, index) => (

            <div
              key={index}
              className="
                bg-zinc-900
                border border-zinc-800
                rounded-3xl
                overflow-hidden
                hover:border-green-500
                hover:scale-[1.02]
                transition-all
                duration-300
                shadow-2xl
              "
            >

              <div className="relative">

                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-80 object-cover"
                />

                {/* ONLINE BADGE */}
                <div className="
                  absolute
                  top-4
                  right-4
                  bg-black/70
                  backdrop-blur-md
                  px-4
                  py-2
                  rounded-full
                  flex
                  items-center
                  gap-2
                ">

                  <div className="
                    w-3
                    h-3
                    bg-green-500
                    rounded-full
                    animate-pulse
                  "></div>

                  <span className="text-sm font-medium text-white">
                    {user.status}
                  </span>

                </div>

              </div>

              <div className="p-5">

                <div className="flex items-center justify-between mb-2">

                  <h3 className="text-2xl font-bold text-white">
                    {user.name}, {user.age}
                  </h3>

                  <span className="text-3xl">
                    {user.flag}
                  </span>

                </div>

                <p className="text-gray-400 mb-3">
                  {user.country}
                </p>

                <div className="
                  flex
                  items-center
                  justify-between
                  text-sm
                  text-gray-500
                  border-t
                  border-zinc-800
                  pt-3
                ">

                  <span>
                    {user.lastSeen}
                  </span>

                  <span className="text-green-400">
                    Available to chat
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}