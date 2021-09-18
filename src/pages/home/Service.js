import { CheckIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

function renderRegisterForCredits() {
    return (
        <div className="bg-indigo-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                    <span className="block">Preregister to Purchase Carbon Credits</span>
                    <span className="block text-blue-500 text-xl">Credits will be offered for sale following certification</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <Link
                            to="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-700"
                        >
                            Preregister
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Page() {
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
        <React.Fragment>
            <div className="relative bg-white py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="text-base font-semibold tracking-wider text-blue-500 uppercase">The Business</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Carbon Sequestration as a Service
                    </p>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                        Our goal is to remove one gigaton of CO<sub>2</sub> from the atmosphere each year from 2050.
                        To do that, we'll need to grow at an incredible rate.
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
            {renderRegisterForCredits()}
        </React.Fragment>
    );
}

export default Page;
