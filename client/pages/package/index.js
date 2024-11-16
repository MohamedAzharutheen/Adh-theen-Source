import Layout from '@/component/layout'
import Cards from '@/component/packages/cards'
import { useRouter } from 'next/router';
import React from 'react'
export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.url}/api/package/get-package`);
    const data = await res.json();

    console.log('Fetched banner data:', data); // Log the fetched data

    if (!data || data.length === 0) {
      return {
        props:{
          packageData: null,
      }
    }
    }

    return {
      props: {
        packageData: data // Pass the first banner object as props
      },
    };
  } catch (error) {
    console.error('Error fetching banner data:', error); // Log any errors
    return {
      props: {
        packageData: null, // Return null on error
      },
    };
  }
}
export default function Index({packageData}) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }
  return (
    <>
    <Layout>
        <Cards packageData={packageData}/>
    </Layout>
    </>
  )
}
