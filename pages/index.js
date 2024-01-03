import Layout from "@/components/Layout";
import NewsLetter from "@/components/Newsletter";
import ResourceHighlight from "@/components/ResourceHighlight";
import ResourceList from "@/components/ResourceList";

function Home({ resources }) {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <NewsLetter />
      <ResourceList resources={resources.slice(2)} />
    </Layout>
  );
}

// is called every time you visit the page
// this function is exec on the server
// data is always fresh
export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/resources`);
  const data = await res.json();
  return {
    props: {
      resources: data,
    },
  };
}

export default Home;
