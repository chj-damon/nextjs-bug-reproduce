import React from 'react';
import Link from 'next/link';

export default () => (
  <div>
    <p>this is homepage.</p>
    <div>
      <Link href="/about">
        <a>go to about page</a>
      </Link>
    </div>
    <div>
      <Link href="/comment">
        <a>go to comment page</a>
      </Link>
    </div>
    <div>
      <Link href="/profile">
        <a>go to profile page</a>
      </Link>
    </div>
  </div>
);
