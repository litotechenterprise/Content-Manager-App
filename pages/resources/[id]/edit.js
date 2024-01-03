import ResourceForm from "@/components/ResourceForm";
import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/navigation";

const ResourceEdit = ({ data }) => {
  const router = useRouter();
  const updateResource = (formData) => {
    axios
      .patch("/api/resources/", formData)
      .then(() => router.push("/resources/" + formData.id))
      .catch((e) => {
        alert(e.response.data);
      });
  };
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm onSubmit={updateResource} update data={data} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export async function getServerSideProps({ params, query }) {
  const res = await fetch(`http://localhost:3001/api/resources/${params.id}`);
  const data = await res.json();
  return {
    props: {
      resourceId: query.id,
      data,
    },
  };
}
export default ResourceEdit;
