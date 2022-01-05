import React from 'react'
import Link from 'next/link'

export default function NewsletterSignupForm(props) {
    return (
        <>
            <form action="https://oceanblooms.us20.list-manage.com/subscribe/post?u=25a3c31d6c3021fe3aa02394a&amp;id=3668d07097" className="sm:max-w-xl sm:mx-auto lg:mx-0 validate" id="mc-embedded-subscribe-form" method="post" name="mc-embedded-subscribe-form" noValidate target="_blank">
                <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input id="mce-EMAIL" name="EMAIL" type="email" placeholder="Enter your email" required className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900" />
                    </div>
                    <div aria-hidden="true" className="trap">
                        <input type="text" name="b_25a3c31d6c3021fe3aa02394a_3668d07097" onChange={(e) => console.log(e)} tabIndex="-1" value="" />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button type="submit" className="block w-full py-3 px-4 rounded-md shadow bg-blue-500 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Subscribe</button>
                    </div>
                </div>
                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    Subscribe to our newsletter for updates. By providing your email, you agree to our{" "}
                    <Link href="#" className="font-medium text-white">terms of service</Link>.
                </p>
            </form>
        </>
    )
}
