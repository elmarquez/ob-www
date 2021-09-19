import FsLightbox from 'fslightbox-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HeroVideoCoverImage from '../../images/home-hero-video-cover.png';

function Hero() {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                Coming soon
              </span>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl pb-8">
                <span className="block text-shadow-md">Massively scalable, low cost carbon sequestration</span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl text-shadow-md">
                Our goal is to capture gigatons of CO<sub>2</sub> and store it in the deep ocean.
                By doing this, we’ll help companies achieve net-zero emissions, slow global warming, and replenish life in the sea.
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">Email address</label>
                      <input id="email" type="email" placeholder="Enter your email" className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900" />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button type="submit" className="block w-full py-3 px-4 rounded-md shadow bg-blue-500 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Subscribe</button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">Subscribe to our newsletter for updates. By providing your email, you agree to our <Link to="#" className="font-medium text-white">terms of service</Link>.</p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 mb-16 sm:mb-48 lg:m-0 lg:relative flex flex-col justify-center items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg max-w-lg p-4 mb-8">
              <button
                type="button"
                className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setToggler(!toggler)}
              >
                <span className="sr-only">Watch our video to learn more</span>
                <img className="w-full drop-shadow-md" src={HeroVideoCoverImage} alt="Click to watch video" />
                <div className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                  <svg className="h-20 w-20 text-blue-500" fill="currentColor" viewBox="0 0 84 84">
                    <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                  </svg>
                </div>
              </button>
              <div className={'pt-4 text-xs text-gray-500 w-full text-center text-shadow'}>Watch our WeFunder pitch video</div>
              <FsLightbox
                initialAnimation="scale-in-long"
                slideChangeAnimation="scale-in"
                sources={['https://www.youtube.com/embed/hv4xDBf21_k']}
                toggler={toggler}
                type="youtube"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
