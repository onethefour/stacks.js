import { getPublicKeyFromPrivate, publicKeyToAddress } from '@stacks/encryption';
import { TransactionVersion, getAddressFromPrivateKey } from '@stacks/transactions';

const PERSON_TYPE = 'Person';
const CONTEXT = 'http://schema.org';
const IMAGE_TYPE = 'ImageObject';

export interface ProfileImage {
  '@type': typeof IMAGE_TYPE;
  name: string;
  contentUrl: string;
}

export interface Profile {
  '@type': typeof PERSON_TYPE;
  '@context': typeof CONTEXT;
  apps?: {
    [origin: string]: string;
  };
  appsMeta?: {
    [origin: string]: {
      publicKey: string;
      storage: string;
    };
  };
  name?: string;
  image?: ProfileImage[];
  [key: string]: any;
}

export interface Account {
  stxPrivateKey: string;
  dataPrivateKey: string;
  salt: string;
  username?: string;
  profile?: Profile;
  appsKey: string;
  index: number;
}

export const getStxAddress = ({
  account,
  transactionVersion = TransactionVersion.Testnet,
}: {
  account: Account;
  transactionVersion?: TransactionVersion;
}): string => {
  return getAddressFromPrivateKey(account.stxPrivateKey, transactionVersion);
};

/**
 * Get the display name of an account.
 *
 * If the account has a username, it will return the first part of the username, so `myname.id` => `myname`, and
 * `myname.blockstack.id` => `myname`.
 *
 * If the account has no username, it returns `Account ${acount.index}`
 *
 */
export const getAccountDisplayName = (account: Account) => {
  if (account.username) {
    return account.username.split('.')[0];
  }
  return `Account ${account.index}`;
};

export const getGaiaAddress = (account: Account) => {
  const publicKey = getPublicKeyFromPrivate(account.dataPrivateKey);
  const address = publicKeyToAddress(publicKey);
  return address;
};
