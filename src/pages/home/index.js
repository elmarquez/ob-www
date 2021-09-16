import { Popover, Transition } from '@headlessui/react';
import { CheckIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

import Footer from '../../components/footer';
import Header from '../../components/header';

function renderDevelopment() {
  const metrics = [
    { id: 1, stat: '4+', emphasis: 'Million dollars', rest: 'research funding from major institutions including Los Alamos and Sandia National Labs.' },
    { id: 2, stat: '15', emphasis: 'Years', rest: 'of engineering development, lab and ocean field trials.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
  ]
  return (
    <div className="relative bg-gray-900">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold text-indigo-300 tracking-wide uppercase">Artifical Upwelling Pump (AUP)</h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            A nature based approach to carbon capture. Research tested, field proven.
          </p>
          <p className="mt-5 text-lg text-gray-300">
            Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare
            feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus
            nibh integer quis. Eu vulputate diam sit tellus quis at.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">{item.stat}</span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function renderEmployment() {
  return (
    <div className="relative bg-gray-900">
    <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100" alt="" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"></div>
    </div>
    <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
      <div className="md:ml-auto md:w-1/2 md:pl-10">
        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
          Award winning support
        </h2>
        <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
          We’re here to help
        </p>
        <p className="mt-3 text-lg text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
        </p>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
              Visit the help center
              <svg className="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}



function renderHero() {
  return (
    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                Coming soon
              </span>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Massively scaleable, low cost carbon sequestration</span>
                <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">ship web apps</span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                Our goal is to capture gigatons of CO<sub>2</sub> and store it in the deep ocean.
                By doing this, we’ll help companies achieve net-zero emissions, slow global warming, and replenish life in the sea.
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label for="email" className="sr-only">Email address</label>
                      <input id="email" type="email" placeholder="Enter your email" className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900" />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button type="submit" className="block w-full py-3 px-4 rounded-md shadow bg-blue-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Subscribe</button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">Subscribe to our newsletter for updates. By providing your email, you agree to our <a href="#" className="font-medium text-white">terms of service</a>.</p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div id="video-wrap" className="m-8">
              <iframe src="https://player.vimeo.com/video/26936455?h=18f043df5e" width="512" height="384" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderLearningResources() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Learn</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Carbon Sequestration 101
          </p>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-cyan-600">
                  <a href="#" className="hover:underline">
                    Article
                  </a>
                </p>
                <a href="#" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Boost your conversion rate
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Roel Aufderehar" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">
                      Roel Aufderehar
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">
                      Mar 16, 2020
                    </time>
                    <span aria-hidden="true">
                      &middot;
                    </span>
                    <span>
                      6 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-cyan-600">
                  <a href="#" className="hover:underline">
                    Video
                  </a>
                </p>
                <a href="#" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    How to use search engine optimization to drive sales
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Brenna Goyette" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">
                      Brenna Goyette
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-10">
                      Mar 10, 2020
                    </time>
                    <span aria-hidden="true">
                      &middot;
                    </span>
                    <span>
                      4 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-cyan-600">
                  <a href="#" className="hover:underline">
                    Case Study
                  </a>
                </p>
                <a href="#" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Improve your customer experience
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Daniela Metz" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">
                      Daniela Metz
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-02-12">
                      Feb 12, 2020
                    </time>
                    <span aria-hidden="true">
                      &middot;
                    </span>
                    <span>
                      11 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderMission() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">The Mission</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Here's the plan. We need your help
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Push to Deploy</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">SSL Certificates</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Simple Queues</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function renderSequestrationForBusinesses() {
    const features = [
      {
        name: 'Invite team members',
        description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
      },
      {
        name: 'Notifications',
        description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
      },
      {
        name: 'List view',
        description: 'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
      },
      {
        name: 'Boards',
        description: 'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
      },
      {
        name: 'Keyboard shortcuts',
        description: 'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
      },
      {
        name: 'Reporting',
        description: 'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
      },
      {
        name: 'Calendars',
        description: 'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
      },
      {
        name: 'Mobile app',
        description: 'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
      },
    ]

    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Purchase Carbon Credits</h2>
            <p className="mt-4 text-lg text-gray-500">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
  );
}

function renderWavePoweredCarbonSequestration() {
  return (
    <div className="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Wave Powered Carbon Sequestration</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            The solution to the climate emergency is in the ocean
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
      <Header />
      <main>
        {renderHero()}
        {renderWavePoweredCarbonSequestration()}
        {renderDevelopment()}
        {renderMission()}
        {renderSequestrationForBusinesses()}
        {renderLearningResources()}
        {renderEmployment()}
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
