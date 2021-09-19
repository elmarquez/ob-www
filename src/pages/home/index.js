import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';

import Connect from './Connect';
import HeroBlock from './Hero';
import Learn from './Learn';
import Mission from './Mission';
import Offer from './Offer';
import Problem from './Problem';
import Solution from './Solution';

import Footer from '../../components/footer';
import NavBar from '../../components/header/NavBar';


function renderCustomerDashboard() {
  return (
    <div className="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Transparency</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Transparency and openness are key to winning the battle against climate change
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <img className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

function renderStickyFooter() {
  return (
    <div className="fixed inset-x-0 bottom-0">
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">Invest in us through our WeFunder page!</span>
                <span className="hidden md:inline">Big news! You can become an investor today by visiting our WeFunder campaign.</span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="https://wefunder.com/gigaton-carbon-capture"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:text-indigo-600"
              >
                Learn more
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <a href="#" className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <header className={'relative hero-background-cover-image'}>
        <NavBar dark={true} />
        <HeroBlock />
      </header>
      <main className={'flex flex-col'}>
        <Problem />
        <Solution />
        <Offer />
        <Mission />
        <Learn />
        <Connect />
      </main>
      <Footer paddingBottom={48} />
      {renderStickyFooter()}
    </div>
  );
}

export default HomePage;
