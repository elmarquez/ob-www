import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import MarkCarneyImg from '../../public/images/united-nations-mark-carney-small.png';
import ExampleImg from '../../public/images/feature-example-2.png'

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
                    <div className="inline-flex rounded-md shadow mr-4">
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700"
                        >
                            Business Offsets
                        </Link>
                    </div>
                    <div className="inline-flex rounded-md shadow">
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700"
                        >
                            Personal Offsets
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
                            We offer an extremely cost effective solution that can get you to net-zero,
                            whether you&apos;re a global enterprise, small business, or individual.
                        </p>
                    </div>
                    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="relative">
                            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                Net-zero is the new standard
                            </h3>
                            <p className="mt-3 text-lg text-gray-500">
                                The transition to a low-carbon economy is a major business opportunity. Customers and investors will reward companies that achieve net-zero emissions.
                            </p>
                            <dl className="mt-10 space-y-10">
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Businesses Create Value by Addressing Climate Risk</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Climate change is an existential risk. Its clear that
                                        companies that work to mitigate that risk are creating
                                        new value, and will be rewarded by the market.
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Markets Have Set the New Standard</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Businesses around the world have raised the bar and are 
                                        defining new standards for energy and emissions. Businesses 
                                        that fail to keep up will lose market share.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                            <a href="https://www.un.org/en/climatechange/mark-carney-investing-net-zero-climate-solutions-creates-value-and-rewards">
                                <Image className="relative mx-auto filter drop-shadow-lg" width={490} src={MarkCarneyImg} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Better than Land Based Solutions</h3>
                                <p className="mt-3 text-lg text-gray-500">
                                    We build, deploy, and manage arrays of wave-powered pumps to sequester CO<sub>2</sub> on behalf of our customers, who can then claim carbon credits for their business.
                                </p>
                                <dl className="mt-10 space-y-10">
                                    <div className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Lowest Long Term Cost</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">
                                            Our pumps are designed to last for 80 years in the harshest marine environments.
                                            Because of the longevity of our hardware, we can deliver low-risk carbon
                                            sequestration at scale for $10/ton. Land based solutions don&apos;t compare.
                                        </dd>
                                    </div>
                                    <div className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Lower Risk</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">
                                            Ocean sequestration does not require land, energy, specific geological features,
                                            or artificial markets for carbon goods. It can&apos;t catch fire. It won&apos;t run out of
                                            scarce metals. And, once sunk, the CO<sub>2</sub> won&apos;t reemerge for more than
                                            100 years.
                                        </dd>
                                    </div>
                                    {/* <div className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Reduce Your Reporting Costs</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">
                                            Our customer dashboard and developer API not only make emissions reporting faster and cheaper,
                                            but give you up-to-the-minute data about your AUP fleet. Use our API to provide offsets data in your
                                            marketing channels and build stronger relationships with your customers.
                                        </dd>
                                    </div> */}
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
                                <Image className="relative mx-auto" width={490} src={ExampleImg} alt="" />
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
