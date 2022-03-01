import React from "react";
export default class Home extends React.Component {
  state = {
    greeting: ["HELLO", "HOLA", "你好", "KAMUSTA", "XIN CHÀO", "안녕", "ԲԱՐԵՒ ՁԵԶ", "سلام", "नमस्ते", "ہائے"],
    count: 0,
    prevButtonDisabled: true,
    nextButtonDisabled: false,
    factCount: 0,
    facts: [
      "In Northern California, ticks are significantly less likely to carry Lyme disease. This is because these ticks tend to parasitize the western fence lizard. Researchers from UC Berkeley determined that a factor in western fence lizard blood worked to kill the bacteria, Borrelia burgdorferi, that causes Lyme disease and lives inside ticks.",
      "The sun in our solar system is immensely loud. The surface generates thousands to tens of thousands of watts of sound power for every square meter. That's something like 10x to 100x the power flux through the speakers at a rock concert, or out the front of a police siren. We don't hear it simply because the sound doesn't travel through the vacuum of space.",
      "The prevalence of autism in children in the U.S. has steadily increased from 1 in every 150 children (2000) to 1 in every 44 (2018). People with ASD may communicate, interact, behave, and learn in ways that are different from most other people. Those with autism are unique individuals who differ as much from one another as do all people.",
      "The color pink exists despite the fact that it is not represented by any numerical wavelength values in the visible light spectrum. While it is true that colors we perceive in objects are related to the wavelengths of their reflected light, color itself is neither a property of light nor of the objects that reflect it. Color is a sensation that arises within the brain. It exists because we see it.",
      "Pigs were first used in biomedical research in ancient Greece and over the past few decades have quickly grown as important biomedical research tools. Pigs have genetic and physiological traits similar to humans, which make them one of the most useful and versatile animal models. Pig skin and hearts can even be used in medicine due to their compatibility with the human body.",
      "Eggs existed long before chickens came along. While there are different types of eggs, an egg is simply a membrane-bound vessel inside which an embyro can grow and develop until it can surive on its own. Chickens specifically lay amniotic eggs, which appeared around 340 million years ago, whereas chickens evolved around 58 thousand years ago.",
    ],
    sources: [
      "https://www.jstor.org/stable/3284524?mag=theres-something-about-lizard-blood&seq=1#metadata_info_tab_contents",
      "https://www.discovermagazine.com/the-sciences/what-would-the-sun-sound-like-if-we-could-hear-it-on-earth",
      "https://www.cdc.gov/ncbddd/autism/data.html",
      "http://bejerano.stanford.edu/readings/corbo/Goldsmith_what_birds_see.pdf",
      "https://pubmed.ncbi.nlm.nih.gov/25689318/",
      "https://www.science.org.au/curious/earth-environment/which-came-first-chicken-or-egg#:~:text=Eggs%20certainly%20came%20before%20chickens,we're%20on%20Team%20Egg."
    ]
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({ count: 0 });
    }
  }

  handlePrevButton = () => {
    const factCount = this.state.factCount;
    this.setState({ factCount: factCount - 1 });
    if (factCount <= 0) {
      this.setState({ factCount: 0 });
    } else if (factCount === 1) {
      this.setState({ prevButtonDisabled: true })
    } else {
      this.setState({ nextButtonDisabled: false })
    }
    // console.log(" fc: " + factCount + " nbd: " + this.state.nextButtonDisabled + ' pbd: ' + this.state.prevButtonDisabled);
  };
  handleNextButton = () => {
    const factCount = this.state.factCount;
    const maxfactCount = this.state.facts.length - 1;
    this.setState({ factCount: factCount + 1 });
    if (factCount >= maxfactCount) {
      this.setState({ factCount: maxfactCount })
    } else if (factCount === maxfactCount - 1) {
      this.setState({ nextButtonDisabled: true })
    } else {
      this.setState({ prevButtonDisabled: false })
    }
    // console.log('max fc: ' + maxfactCount + " fc: " + factCount + " nbd: " + this.state.nextButtonDisabled + ' pbd: ' + this.state.prevButtonDisabled);
  };

  render() {
    const factCount = this.state.factCount;

    if (this.state.count >= 10) {
      clearInterval(this.interval);
    }

    return (
      <section className="home-section">

        <h1 id="home-h1" className="main-h1">
          {/* <img id='home-avatar-img' src="../images/avatar.png" alt="A cartoon avatar of myself" /> */}
          {this.state.greeting[this.state.count]}
        </h1>

        <section className="main-section" id="home-mini-bio">
          <p>
            <span className="bold-text">I am an aspiring software engineer with a focus in web development</span>,
            who enjoys both making web pages come to life and learning cool facts.
          </p>
          <p>
            Did you know that over 200 languages are spoken in the state of California? Programming languages not included.
            Here are more cool facts below. If you have a favorite or one of your own, it'd be cool if you shared it with me at
            <a id="home-email-a" className="main-a" href="mailto:katemeng08@gmail.com?">katemeng08@gmail.com</a>
          </p>

          <section id="home-facts">
            <button id="home-prev-btn" onClick={this.handlePrevButton} disabled={this.state.prevButtonDisabled}>⟵</button>
            <button id="home-next-btn" onClick={this.handleNextButton} disabled={this.state.nextButtonDisabled}>⟶</button>
            <section id="home-facts-source">
              <p className="home-fact-p">{this.state.facts[factCount]}</p>
              <a className="main-a home-source-a" href={this.state.sources[factCount]} rel="noreferrer" target="_blank">Source</a>
            </section>
          </section>
        </section>
        {/* <section id="home-facts">
          <button id="home-prev-btn" onClick={this.handlePrevButton} disabled={this.state.prevButtonDisabled}>⟵</button>
          <section id="home-facts-source">
            <p>{this.state.facts[factCount]}</p>
            <a className="main-a" href={this.state.sources[factCount]} rel="noreferrer" target="_blank">Source</a>
          </section>
          <button  id="home-next-btn" onClick={this.handleNextButton} disabled={this.state.nextButtonDisabled}>⟶</button>
        </section> */}

      </section>
    );

  }
}