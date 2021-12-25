import Image from 'next/image'
import Link from 'next/link';

function SiteHero() {
  return (
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="px-5 pt-4 flex items-center justify-between">
          <div>
            <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg" alt="" />
          </div>
          <div className="-mr-2">
            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="pt-5 pb-6">
          <div className="px-2 space-y-1">
            <Link href="/climate-emergency" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Climate Emergency</Link>
            <Link href="/technology" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Technology</Link>
            <Link href="/science" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Science</Link>
            <Link href="/carbon-credits" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Carbon Credits</Link>
          </div>
          <div className="mt-6 px-5">
            <Link href="/" className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700">Register for a developer account</Link>
          </div>
          <div className="mt-6 px-5">
            <p className="text-center text-base font-medium text-gray-500">Existing customer? <Link href="/login" className="text-gray-900 hover:underline">Log in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteHero;
