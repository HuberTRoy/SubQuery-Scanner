// SPDX-License-Identifier: Apache-2.0

import 'vite/client';

declare global {
  interface Window {
    ethereum?: any;
    Buffer?: any;
    debugInfo?: any;
  }
}
