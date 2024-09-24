// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

export const DATE_FORMAT = 'DD/MM/YYYY';
export const DATE_WITH_TIME_FORMAT = 'DD/MM/YYYY hh:mm:ss A';

export enum LOCK_STATUS {
  LOCK = 'lock',
  UNLOCK = 'UNLOCK',
}

export const TOKEN = 'SQT';

export const categoriesOptions = [
  {
    label: 'Dictionary',
    value: 'Dictionary',
  },
  {
    label: 'DeFi',
    value: 'DeFi',
  },
  {
    label: 'Oracle',
    value: 'Oracle',
  },
  {
    label: 'Wallet',
    value: 'Wallet',
  },
  {
    label: 'NFT',
    value: 'NFT',
  },
  {
    label: 'Gaming',
    value: 'Gaming',
  },
  {
    label: 'Governance',
    value: 'Governance',
  },
  {
    label: 'Analytic',
    value: 'Analytic',
  },
  {
    label: 'Privacy',
    value: 'Privacy',
  },
];

export const rpcCategoriesOptions = [
  {
    label: 'Light Node',
    value: 'Light Node',
  },
  {
    label: 'Full Node',
    value: 'Full Node',
  },
  {
    label: 'Archive Node',
    value: 'Archive Node',
  },
  {
    label: 'EVM',
    value: 'EVM',
  },
  {
    label: 'Polkadot',
    value: 'Polkadot',
  },
  {
    label: 'Cosmos',
    value: 'Cosmos',
  },
];
