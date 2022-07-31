import axios from 'axios';

import { AGAPI } from '@/const/env';

const AgApi = axios.create({
  baseURL: AGAPI,
  timeout: 60 * 1000, // 1 mins
});

export * from 'axios';

export default AgApi;
