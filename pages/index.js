import Layout from "@/components/Layout";
import NewsLetter from "@/components/Newsletter";
import ResourceHighlight from "@/components/ResourceHighlight";
import ResourceList from "@/components/ResourceList";
import { resources } from "@/api/data";

function Home({ myData1, myData2 }) {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <NewsLetter />
      <ResourceList resources={resources.slice(2)} />
    </Layout>
  );
}

export function getStaticProps() {
  return {
    props: {
      myData1: [1, 2, 3],
      myData2: ["a", "b", "c"],
    },
  };
}

export default Home;
