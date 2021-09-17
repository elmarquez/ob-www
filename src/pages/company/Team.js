import React from 'react';
import { Link } from 'react-router-dom';

import { ContentLayout } from '../../components/layout';
import MilestonesDiagram from '../../images/milestones.png';

const people = [
  {
    name: 'Phil Kithil',
    role: 'Founder, CEO',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Dr. Ian Walsh',
    role: 'Chief Scientist',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Salvador Garcia',
    role: 'Chief Revenue Officer',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bob Lipstein',
    role: 'Chief Financial Officer',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Phillip Fullam',
    role: 'Chief Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Amal Bhattari',
    role: 'Technical Director',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Davis M. Marques',
    role: 'Chief Technology Officer',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Nicholas Phelps',
    role: 'Mechanical Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Chris White',
    role: 'Board Member',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

function renderInvestors() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
    <div>
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Investors
      </h2>
      <p className="mt-3 max-w-3xl text-lg text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
        scelerisque amet ullamcorper eu enim et fermentum, augue.
      </p>
      <div className="mt-8 sm:flex">
        <div className="rounded-md shadow">
          <Link
            to="/contact"
            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Contact Us
          </Link>
        </div>
    </div>
    </div>
    <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img
          className="max-h-12"
          src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
          alt="Workcation"
        />
      </div>
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
      </div>
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
      </div>
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img
          className="max-h-12"
          src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
          alt="Laravel"
        />
      </div>
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img
          className="max-h-12"
          src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
          alt="StaticKit"
        />
      </div>
      <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img
          className="max-h-12"
          src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
          alt="Statamic"
        />
      </div>
    </div>
  </div>
  )
}

function renderMilestones() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 pt-8 pb-8">
      <div className="space-y-5 sm:space-y-4">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Milestones</h2>
        <p className="text-xl text-gray-500">
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
          suspendisse. Vivamus fringilla.
        </p>
      </div>
      <div className="lg:col-span-2">
        <img src={MilestonesDiagram} alt="Milestones" />
      </div>
    </div>
  );
}

function renderTeam() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 pt-8 pb-8">
      <div className="space-y-5 sm:space-y-4">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our Team</h2>
        <p className="text-xl text-gray-500">
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
          suspendisse. Vivamus fringilla.
        </p>
      </div>
      <div className="lg:col-span-2">
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.imageUrl} alt="" />
                <div className="font-medium text-lg leading-6 space-y-1">
                  <h3>{person.name}</h3>
                  <p className="text-blue-500">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TeamPage() {
  return (
    <ContentLayout>
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center pb-8">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Business tips, announcements, research publications, and educational content
            </p>
          </div>
          {renderTeam()}
          <hr className={"mt-8 pb-8"} />
          {renderMilestones()}
          <hr className={"mt-8 pb-8"} />
          {renderInvestors()}
        </div>
      </div>
    </ContentLayout>
  )
}

export default TeamPage;
