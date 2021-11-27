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
        {/* <Mission /> */}
        {/* <Learn /> */}
        {/* <Connect /> */}
      </main>
      <Footer paddingBottom={48} />
    </div>
  );
}

export default HomePage;
