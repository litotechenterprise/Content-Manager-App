import Link from "next/link";

const ResourceHighlight = ({ resources }) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources.map((resource) => {
            return (
              <section key={resource.id} className="section">
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <div className="content is-medium">
                      <h2 className="subtitle is-4">{resource.createdAt}</h2>
                      <h1 className="title">{resource.title}</h1>
                      <p>{resource.description}</p>

                      <Link
                        href={"/resources/" + resource.id}
                        className="button is-link"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
          <div className="is-divider"></div>
        </div>
      </div>
    </section>
  );
};

export default ResourceHighlight;
