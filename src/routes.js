import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { blog, company, contact, dashboard, error, home, legal, science, technology } from './pages';

const Routes = () => (
  <HashRouter>
    <Route path='/' component={home} exact={true} />
    <Route path='/blog' component={blog.ListPage} exact={true} />
    <Route path='/blog/:article' component={blog.PostPage} />
    <Route path='/company' component={company.AboutPage} exact={true} />
    <Route path='/company/about' component={company.AboutPage} exact={true} />
    <Route path='/company/jobs' component={company.JobsPage} exact={true} />
    <Route path='/company/press' component={company.PressPage} exact={true} />
    <Route path='/contact' component={contact.ContactPage} exact={true} />
    <Route path='/legal/ccpa' component={legal.CaliforniaPrivacyPage} exact={true} />
    <Route path='/legal/privacy' component={legal.PrivacyPage} exact={true} />
    <Route path='/legal/terms' component={legal.TermsPage} exact={true} />
    <Route path='/login' component={dashboard.LoginPage} exact={true} />
    <Route path='/science' component={science.SummaryPage} exact={true} />
    <Route path='/science/artificial-upwelling' component={science.ArtificialUpwelling} exact={true} />
    <Route path='/science/carbon-sequestration' component={science.CarbonSequestrationPage} exact={true} />
    <Route path='/science/climate-emergency' component={science.ClimateEmergencyPage} exact={true} />
    <Route path='/science/phytoplankton' component={science.PhytoplanktonPage} exact={true} />
    {/* <Route path='*' component={error.NotFound} /> */}
  </HashRouter>
);

export default Routes;
