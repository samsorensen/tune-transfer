export function Stats() {
  return (
    <section className="py-20 px-4 bg-white border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">0</div>
            <div className="text-gray-600">Songs Transferred</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600 mb-2">0</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">0%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
