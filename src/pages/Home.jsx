import "../css/Home.css";

export const Home = () => {
  return (
    <>
      <div className="homePage">
        <img
          className="homeImage"
          src="/src/assets/images/senning-luk-DWYuEkjnSgs-unsplash.jpg"
          alt="guy in black walking in an all white scene"
        />
        {/* Photo by <a href="https://unsplash.com/@senning?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Senning Luk</a> on <a href="https://unsplash.com/photos/a-tall-tower-with-a-crane-on-top-of-it-DWYuEkjnSgs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
         */}
        <div className="messageSide">
          <h1 className="homeMessage">
            Introducing you to the fakest items from the FakeStoreAPI
          </h1>

          <button
            className="homeButton"
           
            type="button"
          >
            <img
              className="icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
            justincbal
          </button>
          <button className="homeButton">FakeStoreAPI</button>
        </div>
      </div>
    </>
  );
};
