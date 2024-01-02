import Layout from "@/components/Layout";

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

export async function getStaticPaths() {
  const resData = await fetch("http://localhost:3001/api/resources");
  const data = await resData.json();
  const paths = data.map((resource) => {
    return {
      params: { id: resource.id },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ props }) {
  const res = await fetch(`http://localhost:3001/api/resources/${props.id}`);
  const data = await res.json();

  return {
    props: {
      resource: data,
    },
  };
}

// export async function getServerSideProps({ params, query }) {
//   const res = await fetch(`http://localhost:3001/api/resources/${query.id}`);
//   const data = await res.json();
//   return {
//     props: {
//       resourceId: query.id,
//       data,
//     },
//   };
// }

export default ResourceDetail;
