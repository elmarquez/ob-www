import React from 'react';
import { Link } from 'react-router-dom';
import { ContentLayout } from '../../components/layout';

import BBCWorldNewsLogo from '../../images/bbc-world-news.png';

const announcements = [
  {
    id: 1,
    title: 'Lovelock urges ocean climate fix',
    preview:
      "By Richard Black Environment correspondent, BBC News website Two of Britain's leading environmental thinkers say it is time to develop a quick technical fix for climate change. Writing in the journal Nature, Science Museum head Chris Rapley and Gaia theorist James Lovelock suggest looking at boosting ocean take-up of CO2.",
  },
  {
    id: 2,
    title: 'New password policy',
    preview:
      'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  },
  {
    id: 3,
    title: 'Office closed on July 2nd',
    preview:
      'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
  },
];

function Page() {
  return (
    <ContentLayout>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-blue-500 font-semibold tracking-wide uppercase">
                Press
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Recent Press and Publications
              </span>
            </h1>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <div className="flow-root mt-6">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-indigo-500 flex items-start">
                    <div className={"w-12 mr-12"}>
                      <img src={BBCWorldNewsLogo} alt="BBC World News" className={"h-12"} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm font-semibold text-gray-800">
                        <a href="#" className="focus:outline-none">"{announcement.title}"</a>
                      </h3>
                      <p className="mt-1 text-gray-600 line-clamp-2">{announcement.preview}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default Page;
