import "../css/Home.css";

export const Home = () => {
  return (
    <>
      <div className="homePage">
        <h1 className="bigHeading">FAKE STORE</h1>
        <h2 className="subHeading">
          Introducing you to the fakest products from the{" "}
          <span className="link">
            <a href="https://fakestoreapi.com/" target="_blank">
              FakeStoreAPI
            </a>
          </span>
        </h2>

        <h4 className="credits">
          Photo by{" "}
          <a href="https://unsplash.com/@matthewhenry?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Matthew Henry
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/person-standing-in-the-middle-of-wheat-field-kq3MXXDGeOM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </h4>
      </div>
    </>
  );
};
