import '../setup';
import { fetchConfig } from '../../src/models/config';
import { mockWallet } from '../mocks';

describe(fetchConfig, () => {
  test('returns no config if not found', async () => {
    fetchMock
      .once(
        JSON.stringify({
          read_url_prefix: 'https://gaia.blockstack.org/hub/',
          challenge_text: '["gaiahub","0","gaia-0","blockstack_storage_please_sign"]',
          latest_auth_version: 'v1',
        })
      )
      .once('', { status: 404 });

    const config = await fetchConfig(mockWallet);
    expect(config).toEqual(null);
  });
});
