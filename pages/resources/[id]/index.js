import Layout from "@/components/Layout";
import Link from "next/link";

const ResourceDetail = ({ data }) => {
  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{data.createdAt}</h2>
                    <h1 className="title">{data.title}</h1>
                    <p>{data.description}</p>
                    <Link
                      href={`/resources/${data.id}/edit`}
                      className="button is-warning"
                    >
                      Update
                    </Link>
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
