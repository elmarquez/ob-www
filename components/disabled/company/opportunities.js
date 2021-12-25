import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '../../layout';

function JobsPage() {
  const messages = [
    {
      id: 1,
      subject: 'Velit placeat sit ducimus non sed',
      sender: 'Gloria Roberston',
      time: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
  ]

  return (
    <ContentLayout>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-blue-500 font-semibold tracking-wide uppercase">
                Opportunities
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Current Partnership and Employment Oportunities
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
              aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
              egestas fringilla sapien.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>Request for Proposals</h2>
            <ul role="list" className="divide-y divide-gray-200">
              {messages.map((message) => (
                <li
                  key={message.id}
                  className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                >
                  <div className="flex justify-between space-x-3">
                    <div className="min-w-0 flex-1">
                      <a href="#" className="block focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900 truncate">{message.sender}</p>
                        <p className="text-sm text-gray-500 truncate">{message.subject}</p>
                      </a>
                    </div>
                    <time dateTime={message.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                      {message.time}
                    </time>
                  </div>
                  <div className="mt-1">
                    <p className="line-clamp-2 text-sm text-gray-600">{message.preview}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>Employment</h2>
            <ul role="list" className="divide-y divide-gray-200">
              {messages.map((message) => (
                <li
                  key={message.id}
                  className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                >
                  <div className="flex justify-between space-x-3">
                    <div className="min-w-0 flex-1">
                      <a href="#" className="block focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900 truncate">{message.sender}</p>
                        <p className="text-sm text-gray-500 truncate">{message.subject}</p>
                      </a>
                    </div>
                    <time dateTime={message.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                      {message.time}
                    </time>
                  </div>
                  <div className="mt-1">
                    <p className="line-clamp-2 text-sm text-gray-600">{message.preview}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>Volunteer Positions</h2>
            <ul role="list" className="divide-y divide-gray-200">
              {messages.map((message) => (
                <li
                  key={message.id}
                  className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                >
                  <div className="flex justify-between space-x-3">
                    <div className="min-w-0 flex-1">
                      <a href="#" className="block focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900 truncate">{message.sender}</p>
                        <p className="text-sm text-gray-500 truncate">{message.subject}</p>
                      </a>
                    </div>
                    <time dateTime={message.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                      {message.time}
                    </time>
                  </div>
                  <div className="mt-1">
                    <p className="line-clamp-2 text-sm text-gray-600">{message.preview}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </ContentLayout>
  );
}

export default JobsPage;
