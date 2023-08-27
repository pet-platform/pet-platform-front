'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const ClientComponent: FC = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <span>this is only called Client cause using use client</span>
      </div>
      <button onClick={() => router.push('/')}>go to main using router</button>
      <Link href={'/'}>go to main using Link</Link>
    </div>
  );
};

export default ClientComponent;
