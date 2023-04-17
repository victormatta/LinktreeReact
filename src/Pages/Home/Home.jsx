import "./Home.css";
import Logo from "../../assets/profile.jpg";
import { FaShare } from "react-icons/fa";

export function Home() {
  return (
    <div className="homeStyle">
      <div className="boxButton">
        <button type="submit">
          <FaShare />
        </button>
      </div>
      <header>
        <img src={Logo} alt="Profile Image" />
        <h1>@victormatta</h1>
        <p>
          Hello world, I'm a Software Developer, I invite you to know more about
          me
        </p>
      </header>

      <section>
        <p>Social Media/Certificate</p>
        <div className="card">
          <a
            href="https://www.linkedin.com/in/victor-da-matta-2aa0b1245/"
            target="_blank"
          >
            LinkedIn
            <button>
              <FaShare />
            </button>
          </a>
        </div>
        <div className="card">
          <a href="https://github.com/victormatta" target="_blank">
            GitHub
            <button>
              <FaShare />
            </button>
          </a>
        </div>
        <div className="card">
          <a
            href="https://www.instagram.com/victormatta_/?hl=pt-br"
            target="_blank"
          >
            Instagram
            <button>
              <FaShare />
            </button>
          </a>
        </div>
        <div className="card">
          <a
            href="https://drive.google.com/file/d/1p6yN707fx1vFgU2BGgu4YCUQSYEIJXfl/view"
            target="_blank"
          >
            Software Development (Rockseat-Certificate)
            <button>
              <FaShare />
            </button>
          </a>
        </div>
        <div className="card">
          <a
            href="https://balta.io/certificados/2719feb2-0dd2-4db5-90cf-3b0102908af7"
            target="_blank"
          >
            C# .NET (balta.io-certificate)
            <button>
              <FaShare />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
