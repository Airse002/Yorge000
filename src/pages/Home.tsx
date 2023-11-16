import { server } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const proxyUrl = 'https://dashboard.satnogs.org/d/nlWWQ424k/bdsat-2?orgId=1&refresh=30s&from=1699539634621&to=1700144434621&var-suid=55098&var-filter=version%7C!%3D%7C1.46.0&var-filter=version%7C!%3D%7C1.46.1&var-filter=version%7C!%3D%7C1.46.2';
    const fetchData = async () => {
      try {
        const response = await fetch(proxyUrl, {
          method: 'GET',
          headers: { 'Accept': 'text/html'/*, 'Referrer Policy':
        'strict-origin-when-cross-origin'*/},
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.text();

        setHtmlContent(data);
        console.log('HTML Content:', data);
      } catch (error) {
        console.error('Fetch Error:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetching Data from yorge.com</h1>
      {htmlContent ? (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
