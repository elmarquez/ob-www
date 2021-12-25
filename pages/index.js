import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script'

import Footer from '../components/footer';
import NavBar from '../components/header/NavBar';
import Hero from '../components/home/hero';
import Connect from '../components/home/connect';
import Learn from '../components/home/learn';
import Media from '../components/home/Media';
import Mission from '../components/home/Mission';
import Offer from '../components/home/Offer';
import Problem from '../components/home/Problem';
import Solution from '../components/home/Solution';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ocean Blooms - fighting climate change</title>
      </Head>
      <div className={'relative overflow-hidden'}>
        <header className={'relative hero-background-cover-image'}>
          <NavBar dark={true} />
          <Hero />
        </header>
        <main className={'flex flex-col'}>
          <Media />
          {/* <Problem /> */}
          {/* <Solution /> */}
          {/* <Offer /> */}
          {/* <Mission /> */}
          {/* <Learn /> */}
          {/* <Connect /> */}
        </main>
        <Footer paddingBottom={48} />
      </div>
      <Script
        id="__piwiki_init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(window, document, dataLayerName, id) {
            window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
            function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
            var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
            var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
            tags.async=!0,tags.src="https://oceanblooms.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
            !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
            })(window, document, 'dataLayer', '1a991f51-c1ad-4987-8674-98526e2f5da3');`,
        }}
      />
      <noscript>
        <iframe src="https://oceanblooms.containers.piwik.pro/1a991f51-c1ad-4987-8674-98526e2f5da3/noscript.html" height="0" width="0" style={{"display":"none","visibility":"hidden"}}></iframe>
      </noscript>
    </>
  )
}
