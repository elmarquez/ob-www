import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { blog, company, contact, error, home, legal, science, technology } from './pages';

const Routes = () => (
  <HashRouter>
    <Route path='/' component={home} exact={true} />
    <Route path='/blog' component={blog.ListPage} />
    <Route path='/blog/:article' component={blog.PostPage} />
    <Route path='/company/about' component={company.AboutPage} />
    <Route path='/company/jobs' component={company.JobsPage} />
    <Route path='/company/press' component={company.PressPage} />
    <Route path='/legal/privacy' component={legal.PrivacyPage} />
    <Route path='/legal/terms' component={legal.TermsPage} />
    <Route path='*' component={error.NotFound} />
  </HashRouter>
);

export default Routes;
