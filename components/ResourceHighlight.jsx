import moment from "moment";
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
                      <h2 className="subtitle is-4">
                        {moment(resource.createdAt).format("LLL")}
                        <span
                          className={`tag is-large ml-4 resource-${resource.status}`}
                        >
                          {resource.status}
                        </span>
                      </h2>
                      <h1 className="title">{resource.title}</h1>

                      <p>{resource.description}</p>

                      <Link
                        href={"/resources/" + resource.id}
                        className="button is-text"
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
