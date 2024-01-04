import axios from 'axios';
import { ads } from '../../api/index';
import MockAdapter from 'axios-mock-adapter';

export function createMockAds() {
  return [
    { id: 1, title: '광고맛집' },
    { id: 2, title: '광고맛집2' },
  ];
}
describe('Ads API', () => {
  it('check Ads', async () => {
    const mockAdList = new createMockAds();
    const mock = new MockAdapter(axios);

    mock.onGet('ads').reply(200, mockAdList);
  });
});
