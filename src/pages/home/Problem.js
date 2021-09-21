import { GlobeAltIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

import PhytoplanktonImage from '../../images/phytoplankton-2.jpg';

function Page() {
  return (
    <React.Fragment>
      <div className="relative bg-white md:py-4 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-blue-500 uppercase">A Nature Based Approach</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            The solution to the climate emergency is in the ocean
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Oceans cover more than 70% of the Earth's surface and hold the majority
            of the world's carbon. By using their natural ability to absorb
            CO<sub>2</sub> we can bring our climate back into balance and avert
            disaster.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 text-gray-400 bg-white rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Largest Carbon Sink</h3>
                    <p className="mt-5 text-base text-gray-500 text-left">
                      The ocean holds an estimated 38,000 billion tons of CO<sub>2</sub>{' '} in marine
                      sediments and sedimentary rock - far more than all forests and soils combined.
                      Adding only a small percentage would solve our climate crisis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 text-gray-400 bg-white rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Fewer Challenges to Scale</h3>
                    <p className="mt-5 text-base text-gray-500 text-left">
                      Ocean based carbon sequestration does not require land, external energy inputs,
                      specific geological features, or artificial markets for carbon goods. Land based
                      approaches just don’t compare.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 text-gray-400 bg-white rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Abundant Energy</h3>
                    <p className="mt-5 text-base text-gray-500 text-left">
                      Ocean waves are an abundant and reliable source of energy that can be used to
                      drive the process of capturing and sinking CO<sub>2</sub>{' '} into the deep ocean.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:gap-8">
              <div className="pt-6 flex items-center justify-center lg:justify-end">
                <div className="h-96 w-96 m-4">
                  <div className="overflow-hidden border-gray-800 border-4 h-full w-full rounded-full">
                    <img className={'h-full'} src={PhytoplanktonImage} alt={"Phytoplankton are the foundation of the ocean food chain and the source of the oxygen we breathe. They also happen to consume carbon dioxide as they grow. Click here to learn more about how they can help us out."} />
                  </div>
                </div>
              </div>
              <div className="pt-6 pb-12 text-left">
                <div className="max-w-md lg:pt-8">
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Phytoplankton</h3>
                  <p className="mt-3 text-lg text-gray-500">
                    Phytoplankton are the foundation of the ocean food chain and the source
                    of most of the oxygen we breathe. They also happen to consume vast amounts of 
                    carbon dioxide as they grow.
                  </p>
                  <p className="mt-3 text-sm text-gray-500">
                    Learn more about <Link to="#">phytoplankton</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Page;
