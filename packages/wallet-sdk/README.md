# @stacks/keychain

`@stacks/keychain` is a library for building wallets for the Stacks blockchain.

## Features

- Generate a wallet from scratch
- Encrypt a wallet with a password
- Restore a wallet and associated accounts
- Generate new accounts in a wallet
- Sign transactions for the Stacks blockchain
- Register usernames on BNS, the naming service built into the Stacks Blockchain

## Key Concepts

### Secret Key

A Secret Key is a 12 or 24 word mnemonic phrase, which can be used to deterministically generate a wallet and any number of addresses. When the same Secret Key is used, the exact same addresses will be generated. The Secret Key acts as an easily rememberable and highly secure mechanism for backing up a wallet.

Secret Keys conform to the [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) standard.

### Wallet

A "wallet" is a set of private keys for an individual user. A wallet will contain any number of accounts.

### Account

Accounts act as a way for users to separate assets and data within their own account. You could think of accounts like different Google accounts while logged into Gmail. You can easily switch between different accounts, but they all have different data and information.

- Each account is associated with an individual Stacks address.
- Each account has its own balance and state on the blockchain. 
- Accounts can have usernames.
- When a user logs in through a wallet, they choose an individual account from their wallet. 
- Application data is completely segregated from different accounts.

## Usage

### Installation

With NPM:

```bash
npm install @stacks/keychain --save
```

With Yarn:

```bash
yarn add @stacks/blockchain
```

### Generate a Secret Key

By default, a random 24-word Secret Key is generated, using 256 bits of entropy. You can generate a random 12-word key by passing `128` as the `entropy` argument.

```ts
import { generateSecretKey } from '@stacks/keychain';

generateSecretKey();
// aunt birth lounge misery utility blind holiday walnut fuel make gift parent gap picnic exact various express sphere family nerve oil drill engage youth

generateSecretKey(128);
// winter crash infant long upset beauty cram tank short remove decade ladder
```

### Generate a wallet and secret key

Create a random Secret Key and a `wallet` instance

```ts
import { generateWallet, generateSecretKey } from '@stacks/keychain';

const password = 'password';

const wallet = await generateWallet();
```