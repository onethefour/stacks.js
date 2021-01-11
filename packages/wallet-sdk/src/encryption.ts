import { encryptMnemonic, decryptMnemonic } from '@stacks/encryption';
import { decrypt as triplesecDecrypt } from 'triplesec';

/**
 * Decrypt an encrypted mnemonic phrase with a password.
 * Legacy triplesec encrypted payloads are also supported.
 * @param data - Buffer or hex-encoded string of the encrypted mnemonic
 * @param password - Password for data
 * @return the raw mnemonic phrase
 */
export async function decrypt(dataBuffer: Buffer | string, password: string): Promise<string> {
  const result = await decryptMnemonic(dataBuffer, password, triplesecDecrypt);
  return result;
}

/**
 * Encrypt a raw mnemonic phrase to be password protected
 * @param phrase - Raw mnemonic phrase
 * @param password - Password to encrypt mnemonic with
 * @return The encrypted phrase
 * */
export async function encrypt(phrase: string, password: string): Promise<Buffer> {
  const result = await encryptMnemonic(phrase, password);
  return result;
}
