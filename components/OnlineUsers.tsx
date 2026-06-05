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
]

export default function OnlineUsers() {

  return (

    <section className="py-20 px-6 bg-white dark:bg-black transition-colors duration-500">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4 text-black dark:text-white">
          Foreigners Online Now
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-center mb-14 text-lg">
          Meet active chatters from different countries worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {users.map((user, index) => (

            <div
              key={index}
           className="
  bg-gray-100 dark:bg-zinc-900
  border border-gray-200 dark:border-zinc-800
  rounded-3xl
  transition-colors duration-500
"
            >

              <div className="relative">

                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-80 object-cover"
                />

                <div className="
                  absolute
                  top-4
                  right-4
                  bg-black/70
                  px-4
                  py-2
                  rounded-full
                  flex
                  items-center
                  gap-2
                ">

                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                  <span className="text-sm font-medium text-white">
                    {user.status}
                  </span>

                </div>

              </div>

              <div className="p-5">

                <div className="flex items-center justify-between mb-2">

                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    {user.name}, {user.age}
                  </h3>

                  <span className="text-3xl">
                    {user.flag}
                  </span>

                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {user.country}
                </p>

                <div className="
                  flex
                  items-center
                  justify-between
                  text-sm
                  text-gray-700 dark:text-gray-300
text-gray-500 dark:text-gray-400
                  border-t
                  border-gray-200
                  dark:border-zinc-800
                  pt-3
                ">

                  <span>{user.lastSeen}</span>

                  <span className="text-green-500">
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