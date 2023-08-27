import ServerComponent from '@/src/serverComponent/ServerComponent';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      This is Root Page
      <Link href={'/child1'}>Go To Child1</Link>
      <br />
      <ServerComponent />
    </div>
  );
}
