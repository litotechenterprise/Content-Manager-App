import Layout from "@/components/Layout";
import axios from "axios";
import moment from "moment";
import Link from "next/link";

const ResourceDetail = ({ data }) => {
  const activeResource = () => {
    axios
      .patch("/api/resources/", { ...data, status: "active" })
      .then((_) => location.reload())
      .catch((_) => alert("Cannot active the resource"));
  };
  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(data.createdAt).format("LLL")}
                      <span
                        className={`tag is-large ml-4 resource-${data.status}`}
                      >
                        {data.status}
                      </span>
                    </h2>
                    <h1 className="title">{data.title}</h1>

                    <p>{data.description}</p>
                    <Link
                      href={`/resources/${data.id}/edit`}
                      className="button is-warning"
                    >
                      Update
                    </Link>
                    <button
                      className="button is-success ml-1"
                      onClick={activeResource}
                    >
                      Active
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <div className="is-divider"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ params, query }) {
  const res = await fetch(`http://localhost:3001/api/resources/${query.id}`);
  const data = await res.json();
  return {
    props: {
      resourceId: query.id,
      data,
    },
  };
}

export default ResourceDetail;
