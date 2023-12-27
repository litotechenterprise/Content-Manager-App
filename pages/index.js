import Layout from "@/components/Layout";
import NewsLetter from "@/components/Newsletter";
import ResourceHighlight from "@/components/ResourceHighlight";
import ResourceList from "@/components/ResourceList";

export default function Home() {
  return (
    <Layout>
      <ResourceHighlight />
      <NewsLetter />
      <ResourceList />
    </Layout>
  );
}
