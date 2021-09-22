import React from "react";
import { Link } from "react-router-dom";

import DiscoveryChannelLogo from '../../images/discovery-channel.svg';
import BBCWorldNewsLogo from '../../images/bbc-world-news.png';
import IncMagazineLogo from '../../images/inc-logo.svg';
import PopularMechanicsLogo from '../../images/popular-mechanics.svg';
import ScientificAmericanLogo from '../../images/scientific-american.svg';
import VoxMediaLogo from '../../images/vox-media.png';

function Page() {
    return (
        <div className="relative mb-16 sm:mb-0 bg-gray-100 overflow-hidden">
            <div className="container mx-auto">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <Link to="/company/press"><img className="h-12" src={DiscoveryChannelLogo} alt="Discovery Channel" /></Link>
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <Link to="/company/press"><img className="h-16" src={BBCWorldNewsLogo} alt="BBC World News" /></Link>
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <Link to="/company/press"><img className="h-12" src={ScientificAmericanLogo} alt="Scientific American" /></Link>
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                            <Link to="/company/press"><img className="h-14" src={VoxMediaLogo} alt="Vox" /></Link>
                        </div>
                        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                            <Link to="/company/press"><img className="h-12" src={PopularMechanicsLogo} alt="Popular Mechanics" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
