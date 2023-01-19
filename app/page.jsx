export default function Home() {
  return (
    <main>  
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">TASKIFY</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Type a goal to get a detailed list of tasks to achieve it!</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-400">Your goal</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:bg-gray-900 focus:ring-2 focus:ring-pink-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>                           
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Start Tasking!</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
