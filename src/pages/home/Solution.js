import { Link } from 'react-router-dom';

import AupPhoto from '../../images/aup.png';
import DiatomsSquare from '../../images/diatoms-square.jpg';

function Page() {
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
                            src={AupPhoto}
                            alt="Artifical upwelling pump being prepared for deployment"
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
                    <h2 className="text-sm font-semibold text-blue-500 tracking-wide uppercase">Artifical Upwelling Pumps (AUP)</h2>
                    <p className="mt-3 text-3xl font-extrabold text-white">
                        Wave powered pumps offer a simple, reliable and highly scaleable
                        solution to capturing gigatons of CO<sub>2</sub>
                    </p>
                    <p className="mt-5 text-lg text-gray-300">
                        Our pumps bring nutrient rich water up from 500m below the ocean surface, causing
                        massive <Link to={'/science/phytoplankton'} className={'text-purple-400 underline'}>phytoplankton</Link>{' '}
                        blooms. Like trees, plankton absorb CO<sub>2</sub> when they grow. When they die, they
                        sink to the bottom of the ocean, locking that CO<sub>2</sub> up for 100 years or more.
                    </p>
                    <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                        <p>
                            <span className="block text-2xl font-bold text-white">15</span>
                            <span className="mt-1 block text-base text-gray-300">
                                <span className="font-medium text-white">Years of R&D</span> in labs and the open ocean have gone into the development of the AUP. Our pumps are designed to last for 80 years in the open ocean and endure the harshest weather.
                            </span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">$4 million</span>
                            <span className="mt-1 block text-base text-gray-300">
                                <span className="font-medium text-white">Research funding</span> raised from major institutions including Los Alamos and Sandia National Labs, Texas A&M, and the Oregon Wave Trust for laboratory and field testing.
                            </span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">250 tons</span>
                            <span className="mt-1 block text-base text-gray-300">
                                <span className="font-medium text-white">CO<sub>2</sub> captured per pump, per year</span>. When deployed at scale, our pumps will provide carbon sequestration at $10 per ton.
                            </span>
                        </p>
                        {/* <div>
                            <img src={DiatomsSquare} alt="Phytoplankton" className={'rounded-full'} />
                            <span className={"text-xs pt-4 mt-4 text-gray-400"}>Phytoplankton are the foundation of the ocean food chain and produce more than 60% of the oxygen that we breathe</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
