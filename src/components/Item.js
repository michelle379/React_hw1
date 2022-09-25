export default function Item( { work }) {
    return (
      <section className="col-md-6 col-lg-3 pt-4 p-md-2 p-lg-3">
        <div className="border border-secondary border-1 rounded overflow-hidden">
            <a href="/">
                <img className="w-100"
                    src={work.image}
                    alt={work.name} />
            </a>
            <div className="p-4">
                <h6 className="text-black opacity-2 mb-1">
                    {work.category}
                </h6>
                <h5 className="text-black mb-3">
                    {work.name}
                </h5>
                <p className="text-black opacity-3 mb-3">
                  {/* {work.description} */}
                </p>
                <div className="d-flex justify-content-between">
                    {/* <a href="/" className="text-decoration-none text-color-1">
                        See More
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a> */}
                    <span
                        className="text-black opacity-3">
                        DATE： {work.date}
                    </span>
                </div>
            </div>
        </div>
      </section>
    );
  }