'use client';

import ClientComponent from '@/src/clientComponent/ClientComponent';
import ServerComponent from '@/src/serverComponent/ServerComponent';

export default function Page() {
  return (
    <div>
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}
