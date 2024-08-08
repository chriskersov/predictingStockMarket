import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>home</h1>
      <h1>option pricing web app - chris kersov</h1>
      <nav>
        <ul>
          <li><Link href="/option-pricing">option pricing</Link></li>
          <li><Link href="/historical-data">historical data visualisation</Link></li>
          <li><Link href="/model-comparison">model comparison</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;