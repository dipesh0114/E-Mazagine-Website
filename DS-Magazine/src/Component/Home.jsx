import React from 'react'
import { Link , NavLink} from "react-router-dom";


function Home() {
  return (
    <div className="grid w-full min-h-screen">
      <header className="flex h-14 w-full shrink-0 items-center px-4 md:px-6">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <BookOpenIcon className="h-5 w-5" />
          <span>College Magazine</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4">
          <Link className="font-medium text-sm transition-colors hover:underline" href="#">
          <NavLink
           to="/"
          >
           Home
          </NavLink>
          </Link>
          <Link className="font-medium text-sm transition-colors hover:underline" href="#">
          <NavLink
           to="/article"
          >
           Arcticles
          </NavLink>
          </Link>
          <Link className="font-medium text-sm transition-colors hover:underline" href="#">
            Events
          </Link>
          <Link className="font-medium text-sm transition-colors hover:underline" href="#">
            About Us
          </Link>
        </nav>
      </header>
      <main className="grid gap-4 p-4 md:gap-8 lg:grid-cols-4 lg:gap-12 xl:gap-20">
        <div className="space-y-4 lg:col-span-3 lg:space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter lg:text-5xl">Welcome to the College Magazine</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Your source for the latest news, stories, and insights from campus life.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid items-start gap-2">
              <img
                alt="Featured article"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="200"
                src="/placeholder.svg"
                width="400"
              />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter lg:text-4xl">
                  The Student Experience: Life on Campus
                </h2>
                <p className="text-gray-500 dark:text-gray-400">By Emily Chen</p>
              </div>
            </div>
            <div className="grid items-start gap-2">
              <img
                alt="Featured article"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="200"
                src="/placeholder.svg"
                width="400"
              />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter lg:text-4xl">
                  The Art of Learning: Exploring Creativity in Education
                </h2>
                <p className="text-gray-500 dark:text-gray-400">By Alex Park</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 border rounded-xl bg-gray-100 p-6 md:col-span-3 dark:bg-gray-800">
          <h2 className="text-2xl font-bold md:text-4xl">
            Upcoming Events
            <span className="text-gray-500 dark:text-gray-400">/ Save the Date</span>
          </h2>
          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <img
                alt="Event image"
                className="rounded-lg overflow-hidden object-cover object-center"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="space-y-2">
                <h3 className="font-bold tracking-tighter">Music in the Park: An Outdoor Concert Experience</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Friday, May 20, 2022
                  <br />
                  6:00 PM - 9:00 PM
                  <br />
                  Courtyard Stage
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Join us for an evening of music and fun!</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                alt="Event image"
                className="rounded-lg overflow-hidden object-cover object-center"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="space-y-2">
                <h3 className="font-bold tracking-tighter">Art Exhibition: Vision and Creativity</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Saturday, June 5, 2022
                  <br />
                  3:00 PM - 7:00 PM
                  <br />
                  Gallery Hall
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore the stunning artwork created by our talented students.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 md:col-span-3">
          <div className="grid items-start gap-2">
            <img
              alt="Featured article"
              className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
              height="200"
              src="/placeholder.svg"
              width="400"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter lg:text-4xl">
                The Student Experience: Life on Campus
              </h2>
              <p className="text-gray-500 dark:text-gray-400">By Emily Chen</p>
            </div>
          </div>
          <div className="grid items-start gap-2">
            <img
              alt="Featured article"
              className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
              height="200"
              src="/placeholder.svg"
              width="400"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter lg:text-4xl">
                The Art of Learning: Exploring Creativity in Education
              </h2>
              <p className="text-gray-500 dark:text-gray-400">By Alex Park</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

export default Home