import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <Skeleton className="h-16 w-3/4 bg-gray-800" />
                <Skeleton className="h-24 w-full bg-gray-800" />
                <div className="flex gap-4">
                  <Skeleton className="h-12 w-32 bg-gray-800" />
                  <Skeleton className="h-12 w-32 bg-gray-800" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Skeleton className="h-80 w-full rounded-xl bg-gray-800" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto bg-gray-800 mb-4" />
            <Skeleton className="h-8 w-full max-w-3xl mx-auto bg-gray-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-64 w-full rounded-xl bg-gray-800" />
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
