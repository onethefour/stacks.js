import { Wallet } from './wallet';

export interface ConfigApp {
  origin: string;
  scopes: string[];
  lastLoginAt: number;
  appIcon: string;
  name: string;
}

interface ConfigAccount {
  username?: string;
  apps: {
    [origin: string]: ConfigApp;
  };
}

export interface Config {
  accounts: ConfigAccount[];
  meta?: {
    [key: string]: any;
  };
}

export const fetchConfig = async (wallet: Wallet) => {
  // fetchMock
  //   .once(
  //     JSON.stringify({
  //       read_url_prefix: 'https://gaia.blockstack.org/hub/',
  //       challenge_text: '["gaiahub","0","gaia-0","blockstack_storage_please_sign"]',
  //       latest_auth_version: 'v1',
  //     })
  //   )
  //   .once('', { status: 404 });
};
