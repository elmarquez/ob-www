import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '../../components/layout';

function ClimatePage() {
  return (
    <ContentLayout>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-blue-500 font-semibold tracking-wide uppercase">
                Science
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Artificial Upwelling
              </span>
            </h1>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto pb-8">
            <p>
              Since 2005, our team of engineers and ocean scientists have designed, built, and tested our climate and ocean positive technology to fertilize phytoplankton, which absorbs CO2. Our objective with the following content is to provide a scientific and technical explanation for Artificial Upwelling Pumps for Ocean Carbon Dioxide Removal (CDR).
            </p>
            <p>
              In reviewing possible risks of conducting artificial upwelling, Professor Andreas Oschlies from GEOMAR says the following: “There is essentially no environmental risk associated with small-scale field trials. For hypothetical large-scale deployment, local oxygenation of subsurface waters by translocation of surface waters and deeper waters will be accompanied with a translocation of nutrients and heat, likely leading to a cooling and enhanced biological productivity of surface waters. Enhanced productivity will eventually be followed by enhanced respiration and oxygen consumption that may to some extent offset the initial oxygen gain. Enhanced biological productivity will likely enhance the productivity of higher trophic levels including fish. There will be shifts in the ecosystem, the valuation of which is difficult, but with higher productivity in normally not over-productive waters, these will most likely be viewed positively. It cannot be ruled out that species of little commercial value or possibly even toxic algae may benefit more than others. Mechanisms of such ecological shifts are poorly understood and based on current knowledge there is little expectation that shifts will differ from natural shifts observed when moving from oligotrophic to more eutrophic conditions, such as usually found further onshore.”
            </p>
            <p>
              We aim to review the following topics in describing the science and implementation behind our technology:
            </p>
            <ul>
              <li>Physical footprint: our solution takes advantage of carbon, less constrained by arable land.</li>
              <li>Capacity: our technology has a path forward to being a meaningful part of any carbon removal solution (i.e., more than 0.5GT CO2/year by 2040). </li>
              <li>Durable: meaning it stores carbon permanently (more than 1,000 years).  </li>
              <li>Verifiable: we use scientifically rigorous and transparent methods for monitoring and verification of CO2 sequestered.</li>
              <li>Additionality: new net carbon being removed rather than taking credit for removal that would have occurred regardless.</li>
              <li>Safety and compliance: we are legally compliant, responsibly, and actively engaging with the public to determine and mitigate possible risks and negative externalities.</li>
              <li>Net-negative Lifecycle: overall, our Artificial Upwelling system results in a net reduction in atmospheric CO2            </li>
            </ul>
            <h2>Technical explanation of Artificial Upwelling</h2>
            <p>
              Carbon fixation through plant production in the ocean is driven by vertical mixing of nutrient-enriched deep water into sunlit surface layers –achieving net carbon fixation above baseline and net carbon sequestration (CO2 “offsets”). Ocean gyres, particularly the North Pacific gyre, are areas with relatively low vertical mixing and strong vertical nutrient gradients. Horizontal spatial coherence is very high in these gyres, so measuring impacts of pumped upwelling are simplified. The vast gyre areas where conditions are similar suggest scalability of wave-driven pumped upwelling is substantially driven by the number and size of pumps deployed.
            </p>
            <p>
              The key to producing net carbon sequestration in these low-nutrient, low-chlorophyll (LNLC) ocean gyres are the upwelling of deep waters containing nutrient concentrations greater than the dissolved CO2 concentration plant stoichiometry basis, i.e., the Redfield ratio.
            </p>
            <p>
              In a 2008 paper, David Karl and Ricardo Letelier calculated the net sequestration potential from pump-driven upwelling using data collected at the long-term monitoring Station ALOHA in the North Pacific gyre near Hawaii. They calculated that upwelling of waters from 200 m or deeper provides excess phosphate, which triggers a sequence of nitrate and then phosphate uptake drove blooms of phytoplankton. The secondary phosphate bloom fixes more dissolved CO2 than is upwelled, resulting in net CO2 sequestration. Using the Karl-Letelier calculations, we build our pumps with the intake at 500 m to maximize the carbon fixed per unit area relative to the vertical length of the pump.
            </p>
            <p>
              In 2007, we conducted a sea trial of a 0.75m diameter by 152m deep upwelling pump to determine the upwelling flow rate, which was substantially identical to our current design except for dimensions. With triaxial accelerometers on the valve flappers recording open/close cycles, and temperature sensors top and bottom, we determined the time for deep cold water to surface. The outlet temperature sensor showed cold water arriving at 08:45:00, about 15 minutes after the first upwelling stroke. Dividing tube volume by elapsed time gives a flow rate of 0.078 m3/s.
            </p>

            <h2>Deployment Locations</h2>
            <p>
              The initial location will be in the open ocean, approximately 200nm from Oahu, Hawaii. The initial scale will be ten pumps spaced 720m apart (equal to two per square kilometer diagonally).
            </p>
            <p>
              This location affords access to long-term baseline data from Hawaii Ocean Time Series (HOTS). The HOTS far-field data allows for robustly embedding the data from the pumping volume within a scientifically rigorous time-series data set, which allows for a better understanding of the uncertainty in the carbon sequestration calculations.
            </p>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default ClimatePage;
