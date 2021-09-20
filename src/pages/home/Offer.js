import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

import MarkCarneyImg from '../../images/united-nations-mark-carney-small.png';

const transferFeatures = [
    {
        id: 1,
        name: 'Competitive exchange rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        id: 2,
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        id: 3,
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
    },
]
const communicationFeatures = [
    {
        id: 1,
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AnnotationIcon,
    },
    {
        id: 2,
        name: 'Reminder emails',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: MailIcon,
    },
]

function renderRegisterForCredits() {
    return (
        <div className="bg-indigo-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                    <span className="block tracking-tight ">Preregister to Purchase Carbon Credits</span>
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
    return (
        <React.Fragment>
            <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
                <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="relative text-center">
                        <h2 className="text-base font-semibold tracking-wider text-blue-500 uppercase">Our Offer To You</h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                            Carbon Sequestration as a Service
                        </p>
                        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                            We build, deploy, and manage arrays of wave-powered pumps to sequester CO<sub>2</sub> on behalf of our customers, who can then claim carbon credits for their business.
                        </p>
                    </div>
                    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="relative">
                            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                Net-zero is the new standard
                            </h3>
                            <p className="mt-3 text-lg text-gray-500">
                                The world is transitioning to a low-carbon economy. Customers and investors are rewarding businesses that achieve net-zero emissions.
                            </p>
                            <dl className="mt-10 space-y-10">
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Businesses Create Value by Addressing Climate Risk</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">Climate change is an existential risk. Its clear that companies that work to mitigate that risk are creating new value, and will be rewarded by the market. Those who lag behind will lose relevance.</dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Carbon Markets</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                            <a href="https://www.un.org/en/climatechange/mark-carney-investing-net-zero-climate-solutions-creates-value-and-rewards">
                                <img className="relative mx-auto filter drop-shadow-lg" width={490} src={MarkCarneyImg} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Transparent and cost-effective solution</h3>
                                <p className="mt-3 text-lg text-gray-500">
                                    Our wave powered pumps are extremely cost effective and can scale to meet your needs, 
                                    whether you're offsetting a small business or a global enterprise.
                                </p>
                                <dl className="mt-10 space-y-10">
                                    <div className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Low Cost</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">Ocean sequestration does not require land, energy, specific geological features, or artificial markets for carbon goods. It can't catch fire. It won't reemerge for another 100 years</dd>
                                    </div>
                                    <div className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Low Risk</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">Ocean sequestration does not require land, energy, specific geological features, or artificial markets for carbon goods. It can't catch fire. It won't run out of scarce metals. And, once sunk, the CO<sub>2</sub> won't reemerge for more than 100 years.</dd>
                                    </div>
                                    <div className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Integrations for Marketing and Management</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">We provide a customer dashboard and developer API that not only gives your business that ability to manage your 
                                          reporting processes, but enables you to see up to the minute data about your AUP fleet, and integrate real time data feeds 
                                          into your marketing channels. You'll be able to build new relationships with your market.</dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                                <svg
                                    className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                                    width={784}
                                    height={404}
                                    fill="none"
                                    viewBox="0 0 784 404"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <pattern
                                            id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                                            x={0}
                                            y={0}
                                            width={20}
                                            height={20}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                                </svg>
                                <img
                                    className="relative mx-auto"
                                    width={490}
                                    src="https://tailwindui.com/img/features/feature-example-2.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {renderRegisterForCredits()}
        </React.Fragment>
    );
}

export default Page;
