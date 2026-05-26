export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-6xl font-bold mb-10">
        QenzoChat Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Users
          </h2>

          <p className="text-gray-400">
            User analytics and registrations.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Revenue
          </h2>

          <p className="text-gray-400">
            Stripe payments and subscriptions.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Referrals
          </h2>

          <p className="text-gray-400">
            Referral commissions and tracking.
          </p>
        </div>

      </div>

    </main>
  )
}