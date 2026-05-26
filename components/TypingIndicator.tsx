export default function TypingIndicator() {

  return (

    <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-5 py-4 rounded-2xl w-fit">

      <span className="text-gray-400">
        Foreigners are typing
      </span>

      <div className="flex gap-1">

        <span className="w-2 h-2 rounded-full bg-green-400 animate-bounce" />

        <span className="w-2 h-2 rounded-full bg-green-400 animate-bounce delay-100" />

        <span className="w-2 h-2 rounded-full bg-green-400 animate-bounce delay-200" />

      </div>

    </div>

  )
}