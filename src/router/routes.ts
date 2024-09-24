// SPDX-License-Identifier: Apache-2.0

import React, { FC, LazyExoticComponent } from 'react';

/**
 * The routes should be grouped based on tabs
 * Each routes group should come with ROOT ROUTE & SUB ROUTES
 */

// NOTE: Indexer tab
const INDEXER = {
  INDEXER: 'indexer',
  MY_STAKING: 'my-staking',
  MY_PROJECTS: 'my-projects',
  MY_DELEGATORS: 'my-delegators',
  MY_PLANS: 'my-plans',
  OFFER_MARKETPLACE: 'offers',
  SERVICE_AGREEMENTS: 'service-agreements',
  ONGOING_PLANS: 'ongoing',
} as const;

// NOTE: Consumer tab
const CONSUMER = {
  CONSUMER: 'consumer',
  FLEX_PLANS: 'flex-plans',
  SERVICE_AGREEMENTS: 'service-agreements',
  PLAYGROUND: 'playground',
  ONGOING_PLANS: 'ongoing',
  EXPIRED_PLANS: 'closed',
  API_KEY: 'api-key',
  MY_OFFERS: 'my-offers',
  OPEN_OFFERS: 'open',
  CLOSE_OFFERS: 'close',
  EXPIRED_OFFERS: 'expired',
  CREATE_OFFER: 'create',
  OFFER_MARKETPLACE: 'offers',
} as const;

const DELEGATOR = {
  DELEGATOR: 'delegator',
  DELEGATING: 'my-delegation',
  DELEGATOR_INDEXERS: 'node-operators',
  ALL_INDEXERS: 'all',
  TOP_INDEXERS: 'top',
} as const;

const MY_PROFILE = {
  MY_PROFILE: 'profile',
  REWARDS: 'rewards',
  WITHDRAWN: 'withdrawn',
} as const;

// TODO: Remove or ReOrg the “old” paths once renovation done
const PATHS = {
  ...INDEXER,
  ...DELEGATOR,
  ...CONSUMER,
  ...MY_PROFILE,
  // ROOT PATHS
  DASHBOARD: '/dashboard',
  EXPLORER: '/explorer',
  STUDIO: '/projects',
  SWAP: '/swap',
  STAKING: '/staking', //todo: improve
  PLANS: '/plans',

  // RELATIVE PATHS
  OVERVIEW: 'overview',
  INDEXERS: 'indexers',
  INDEXING: 'indexing',
  DELEGATE: 'delegate',
  MY_PLANS: 'my-plans',
  DEFAULT_PLANS: 'default',
  SPECIFIC_PLANS: 'specific',
  PLAYGROUND: 'playground',
  SERVICE_AGREEMENTS: 'service-agreements',
  REWARDS: 'rewards',
  LOCKED: 'locked',
  DETAILS: 'details',
  DEPLOYMENTS: 'deployments',
  SELL: 'sell',
  BUY: 'buy',
} as const;

const NAV_LINKS = {
  // NAVIGATION LINKS
  // TODO: Remove or ReOrg the “old” paths once renovation done
  OPEN_OFFERS_NAV: '/plans/my-offers/open',
  EXPIRED_OFFERS_NAV: '/plans/my-offers/expired',
  OFFER_MARKETPLACE_NAV: '/plans/offers',
  SA_NAV: '/plans/service-agreements',
  SA_PLAYGROUND_NAV: '/plans/service-agreements/playground',
  SA_ONGOING_NAV: '/plans/service-agreements/ongoing',
  DELEGATE_NAV: '/staking/indexers/delegate',
  PROJECT_NAV: '/explorer/project',
  STUDIO_PROJECT_NAV: '/projects/project',
  STUDIO_CREATE_NAV: '/projects/create',

  TOP_INDEXER_NAV: `/${DELEGATOR.DELEGATOR}/${DELEGATOR.DELEGATOR_INDEXERS}/all`,

  PLAYGROUND_NAV: `/${CONSUMER.CONSUMER}/${CONSUMER.FLEX_PLANS}/${CONSUMER.PLAYGROUND}`,
  CLOSED_PLANS_NAV: `/${CONSUMER.CONSUMER}/${CONSUMER.FLEX_PLANS}/${CONSUMER.EXPIRED_PLANS}`,
  ONGOING_PLANS_NAV: `/${CONSUMER.CONSUMER}/${CONSUMER.FLEX_PLANS}/${CONSUMER.ONGOING_PLANS}`,
  CONSUMER_OFFERS_NAV: `/${CONSUMER.CONSUMER}/${CONSUMER.MY_OFFERS}`,
  CONSUMER_OPEN_OFFERS_NAV: `/${CONSUMER.CONSUMER}/${CONSUMER.MY_OFFERS}/${CONSUMER.OPEN_OFFERS}`,
  CONSUMER_EXPIRED_OFFERS_NAV: `/${CONSUMER.CONSUMER}/${CONSUMER.MY_OFFERS}/${CONSUMER.EXPIRED_OFFERS}`,
  CONSUMER_OFFER_MARKETPLACE_NAV: `/${CONSUMER.CONSUMER}/${CONSUMER.OFFER_MARKETPLACE}`,

  CONSUMER_SA_NAV: `/${CONSUMER.CONSUMER}/${CONSUMER.SERVICE_AGREEMENTS}`,
  CONSUMER_SA_ONGOING_NAV: `/${CONSUMER.CONSUMER}/${CONSUMER.SERVICE_AGREEMENTS}/${CONSUMER.ONGOING_PLANS}`,
  CONSUMER_SA_PLAYGROUND_NAV: `/${CONSUMER.CONSUMER}/${CONSUMER.SERVICE_AGREEMENTS}/${CONSUMER.PLAYGROUND}`,

  INDEXER_SA_NAV: `/${INDEXER.INDEXER}/${INDEXER.SERVICE_AGREEMENTS}`,
  INDEXER_SA_ONGOING_NAV: `/${INDEXER.INDEXER}/${INDEXER.SERVICE_AGREEMENTS}/${INDEXER.ONGOING_PLANS}`,
  INDEXER_OFFER_MARKETPLACE_NAV: `/${INDEXER.INDEXER}/${INDEXER.OFFER_MARKETPLACE}`,

  MY_PROFILE_NAV: `/${MY_PROFILE.MY_PROFILE}`,
  MY_PROFILE_REWARDS_NAV: `/${MY_PROFILE.MY_PROFILE}/${MY_PROFILE.REWARDS}`,
  MY_PROFILE_WITHDRAWN_NAV: `/${MY_PROFILE.MY_PROFILE}/${MY_PROFILE.WITHDRAWN}`,
} as const;

export const ROUTES = {
  ...PATHS,
  ...NAV_LINKS,
};

export const URLS = {
  HOW_TO_INDEX_PROJECTS: 'https://academy.subquery.network/subquery_network/kepler/indexers/index-project.html',
  INDEXER: 'https://academy.subquery.network/subquery_network/kepler/indexers/become-an-indexer.html',
  PLANS_OFFERS: 'https://academy.subquery.network/subquery_network/kepler/welcome.html#plans-offers',
  DELEGATOR: 'https://academy.subquery.network/subquery_network/delegators/introduction.html',
  OFFER_MARKETPLACE: 'https://academy.subquery.network/subquery_network/kepler/welcome.html#offer-marketplace',
};

export type BasicRouteType = {
  path: string;
  component?: LazyExoticComponent<FC>;
  redirect?: string;
  children?: BasicRouteType[];
};

export const scannerRouters: BasicRouteType[] = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: React.lazy(() => import('../pages/scanner/dashboard/index')) },
  {
    path: '/project-deployment-rewards',
    component: React.lazy(() => import('../pages/scanner/projectDeploymentRewards/index')),
  },
  {
    path: '/project-deployment-rewards/:id',
    component: React.lazy(() => import('../pages/scanner/projectDetail/index')),
  },
  {
    path: '/node-operators',
    component: React.lazy(() => import('../pages/scanner/nodeOperators/index')),
  },
  {
    path: '/node-operator/:id',
    component: React.lazy(() => import('../pages/scanner/nodeOperatorDetail/index')),
  },
];
