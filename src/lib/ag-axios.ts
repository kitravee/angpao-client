import axios from 'axios';

import { NEXT_PUBLIC_AGAPI } from '@/const/env';

const AgApi = axios.create({
  baseURL: NEXT_PUBLIC_AGAPI,
  timeout: 60 * 1000, // 1 mins
});

export default AgApi;
