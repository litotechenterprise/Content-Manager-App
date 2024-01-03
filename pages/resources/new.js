import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";
import axios from "axios";
import ResourceForm from "@/components/ResourceForm";

const ResourceCreate = () => {
  const router = useRouter();
  const CreateResoure = (form) => {
    axios
      .post("/api/resources", form)
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        alert(e.response.data);
      });
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm onSubmit={CreateResoure} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
