import React from "react";
import { Link } from 'react-router-dom';
export default class About extends React.Component {
    state = {
        redbubbleImgLinks: ["../images/redbubble-1.jpg", "../images/redbubble-2.jpg", "../images/redbubble-3.jpg", "../images/redbubble-4.jpg", "../images/redbubble-5.jpg"],
        redbubbleImgAlt: ["A design of two cats sitting amongst several tropical house plants as a poster and as a laptop cover.", "A design of a volleyball player with orange hair jumping as if to spike over the net accompanied by Japanese text as seen from the popular anime series Haikyu!! as a poster and a throw pillow.", "A design of a volleyball player thrusting his fist into the air accompanied by Japanese text as seen from the popular anime series Haikyu!! as a poster and a t-shirt.", "A design of a cartoon-like shiba inu posing as a lucky cat as a poster and a bath mat.", "A design of a cartoon-like black dachshund sitting in a little red airplane as seen from the popular Youtube video Dog of Wisdom accompanied by English text as a poster and as a mug."],
        count: 0,
        prevButtonDisabled: true,
        nextButtonDisabled: false,
    }
    handlePrevButton = () => {
        const count = this.state.count;
        this.setState({ count: count - 1 });
        if (count <= 0) {
            this.setState({ count: 0 });
        } else if (count === 1) {
            this.setState({ prevButtonDisabled: true })
        } else {
            this.setState({ nextButtonDisabled: false })
        }
        // console.log(" fc: " + factCount + " nbd: " + this.state.nextButtonDisabled + ' pbd: ' + this.state.prevButtonDisabled);
    };
    handleNextButton = () => {
        const count = this.state.count;
        const maxCount = this.state.redbubbleImgLinks.length - 1;
        this.setState({ count: count + 1 });
        if (count >= maxCount) {
            this.setState({ count: maxCount })
        } else if (count === maxCount - 1) {
            this.setState({ nextButtonDisabled: true })
        } else {
            this.setState({ prevButtonDisabled: false })
        };
    };

    render() {
        return (
            <div>
                <h1 className="main-h1">ABOUT ME</h1>
                <section className="portfolio-section" >
                    <img id='portfolio-img' src="../images/portfolio-picture.png" alt="Kate Meng" />
                    <p className="portfolio-text">
                        I’m Kate and I'm a recently converted web development nerd.
                        I attended Thinkful's Flex Engineering Program, where I learned how to code through a fast-paced, self-taught curriculum with the occasional help from a few wonderful senior engineer mentors.
                        I chose to learn to code because I noticed how tech has integrated itself, refined, and paved the way for so many fields outside its own and I simply wanted to be a part of it.
                    </p>
                    <p className="portfolio-text">
                        My current skills include <span className="bold-text">HTML, CSS, Bootstrap, JavaScript, jQuery, and React</span>.
                        While I wish to refine what I already know, I am always open and willingly to learn more, as I wish to familiarize myself with the ins and outs of this field.
                        That being said, I would be incredibly grateful and excited to work on a team with great engineers!
                    </p>
                </section>
                <h1 className="main-h1">BEYOND CODING</h1>
                <section className="portfolio-section" >
                    <img id='portfolio-img-dogs' src="../images/portfolio-pic-dogs.png" alt="Kate Meng" />
                    <p className="portfolio-text">
                        Before teaching myself to code, I had an undergraduate degree in biology and worked as a registered behavioral technician for children with autism.
                        From lab partners to supervisors, there were a lot of people that taught me not only what it means to work well on a team, but also what qualities I value in my team members.
                        I have always gotten along with all team members, but the ones I have noticed I tend to connect with better are those whom I can learn from.
                    </p>
                    <p className="portfolio-text">
                        While coding is now without a doubt high up on the list of things I enjoy, I don’t think it could ever beat spending quality time with my dogs and loved ones,
                        watching nature documentaries narrated by David Attenborough, conquering my friends at board games, singing my heart out at karaoke, or suddenly finding inspiration to create new art.
                        You can probably catch me doing any of these activities in my free time, but when I'm drawing or designing a new art piece I'll probably block the rest of the world out until my eyesight gives out.
                        I usually make svg (scalable vector graphics) art that I've even included into some of my <Link className="nav-link" to="/projects">projects</Link>. Here are some pieces I'm pretty proud of:
                    </p>
                    <section id="about-rb">
                        <button id="about-prev-btn" onClick={this.handlePrevButton} disabled={this.state.prevButtonDisabled}>⟵</button>
                        <button id="about-next-btn" onClick={this.handleNextButton} disabled={this.state.nextButtonDisabled}>⟶</button>
                        <section id="about-rb-imgs">
                            <img className="rb-img" src={`${this.state.redbubbleImgLinks[this.state.count]}`} alt={`${this.state.redbubbleImgAlt[this.state.count]}`}/>
                        </section>
                    </section>
                </section>

            </div>

        );
    };
};
