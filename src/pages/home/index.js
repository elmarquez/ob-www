import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';

import Connect from './Connect';
import HeroBlock from './Hero';
import Learn from './Learn';
import Media from './Media';
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
    <div id="wefunder-sticky-footer" className="fixed inset-x-0 bottom-0">
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-nowrap">
            <div className="hidden md:block">
              <span className="flex p-2 rounded-lg bg-indigo-800 flex-shrink-0">
                <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <p className="ml-3 font-medium text-white overflow-hidden flex flex-grow flex-nowrap items-center justify-between md:flex">
              <span className="md:hidden lg:hidden truncate whitespace-nowrap">Become an investor today</span>
              <span className="hidden md:block lg:hidden truncate whitespace-nowrap">Become an investor today through our WeFunder campaign</span>
              <span className="hidden lg:block truncate whitespace-nowrap">Big news! You can become an investor today through our WeFunder campaign</span>
            </p>
            <a
              href="https://wefunder.com/gigaton-carbon-capture"
              className="flex flex-shrink-0 flex-grow-0 items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:text-indigo-800"
            >
              Learn more
            </a>
            <div className="flex-shrink-0 ml-2">
              <div
                id="dismiss-sticky-footer-button"
                className="flex -mr-1 p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <header className={'relative hero-background-cover-image'}>
        <NavBar dark={true} />
        <HeroBlock />
      </header>
      <main className={'flex flex-col'}>
        <Media />
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
