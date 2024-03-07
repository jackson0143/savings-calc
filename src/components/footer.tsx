export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1"
          ></a>
          <span className="mb-3 mb-md-0 text-light">&copy; Jackson Nguyen</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="https://github.com/jackson0143" className="pr-5">
              <img
                src="/githublogowhite.svg"
                alt="github"
                width={30}
                height={30}
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
