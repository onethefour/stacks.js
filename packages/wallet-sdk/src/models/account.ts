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
