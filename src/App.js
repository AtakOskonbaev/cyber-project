import "./App.css";

function App() {
  return (
    <div className="App">
      <button>Включить\выключить</button>
      <div class="w3-card w3-margin">
        <div class="w3-container w3-padding">
          <h4>Tags</h4>
        </div>
        <div class="w3-container w3-white">
          <p>
            <span class="w3-tag w3-black w3-margin-bottom">Travel</span>{" "}
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              New York
            </span>{" "}
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              London
            </span>
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              IKEA
            </span>{" "}
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              NORWAY
            </span>{" "}
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              DIY
            </span>
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              Ideas
            </span>{" "}
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              Baby
            </span>{" "}
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              Family
            </span>
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              News
            </span>{" "}
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              Clothing
            </span>{" "}
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              Shopping
            </span>
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              Sports
            </span>{" "}
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">
              Games
            </span>
          </p>
        </div>
      </div>
      <footer class="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
        <button class="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
          Previous
        </button>
        <button class="w3-button w3-black w3-padding-large w3-margin-bottom">
          Next »
        </button>
        <p>
          Powered by{" "}
          <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
            w3.css
          </a>
        </p>
      </footer>
      {/* axolotl{i_thought_you_wouldnt_find_me} */}
    </div>
  );
}

export default App;
