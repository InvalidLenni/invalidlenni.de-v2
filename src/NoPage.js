import React from 'react'
import Footer from './components/Footer'

function NoPage() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <div class="flex flex-row min-h-screen justify-center items-center">
        <div class="container flex w-screen max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:justify-items-center">
          <div class="md:justify-between md:flex">
              <div class="md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://cdn.dribbble.com/users/1166837/screenshots/5995598/404-error_dribbble_small.gif" alt="404 Error"></img>
              </div>
              <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">You have broke the internet...</div>
                  <a href="/" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Just kidding, the page was not found.</a>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <a href="/" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Home</a>        </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}



export default NoPage