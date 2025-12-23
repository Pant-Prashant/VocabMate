export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <header>
        <h1 className="text-gradient">VocabMate</h1>
      </header>
      <main>{children}</main>
      <footer>
        <small>Created by</small>
        <a target="_blank" href="https://github.com/Pant-Prashant/VocabMate">
          <img
            alt="pfp"
            src="https://avatars.githubusercontent.com/u/221407775?v=4"
          />
          <p>@Pant-Prashant</p>
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </>
  );
}
