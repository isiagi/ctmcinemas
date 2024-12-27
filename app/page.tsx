import { Film, Popcorn } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <Film className="h-20 w-20 text-red-500" />
        </div>
        <h1 className="text-4xl font-bold">CTMCinemas</h1>
        <h2 className="text-2xl font-semibold">Coming Soon</h2>
        <p className="text-gray-300">
          We&apos;re working hard to bring you the ultimate cinema experience.
          Stay tuned!
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Popcorn className="h-8 w-8 text-yellow-400" />
          <span className="text-xl font-semibold">Get ready for the show!</span>
        </div>
        {/* <div className="pt-6">
          <h3 className="text-lg font-medium mb-2">Be the first to know when we launch:</h3>
          <form className="mt-2 flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-gray-700 text-white placeholder-gray-400 border-gray-600"
              required
            />
            <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
              <Mail className="h-4 w-4 mr-2" />
              Notify Me
            </Button>
          </form>
        </div> */}
      </div>
    </div>
  );
}
