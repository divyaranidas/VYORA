
import {
  ArrowUpRight,
  Play,
  Sparkles,
  Layers3,
  CheckCircle2
} from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-tag">
            <Sparkles size={14} />
            A NEW WAY TO WORK
          </div>

          <h1>
            Make space
            <br />
            for <span>better</span>
            <br />
            <span className="hero-outline">thinking.</span>
          </h1>

          <p>
            A thoughtful workspace for ambitious teams.
            Bring your projects, people and ideas together
            and turn everyday work into meaningful progress.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Explore VYORA <ArrowUpRight size={18} />
            </a>

            <a href="#solutions" className="secondary-btn">
              <Play size={15} /> See the workspace
            </a>
          </div>

          <div className="hero-trust">
            <span className="trust-line" />
            DESIGNED FOR TEAMS THAT THINK DIFFERENTLY
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="floating-label label-top">
            <span className="label-dot" />
            Your ideas, in motion
          </div>

          <div className="hero-art-card">
            <div className="art-card-header">
              <div className="art-logo">
                <Layers3 size={20} />
              </div>
              <span>VYORA / WORKSPACE</span>
              <span className="art-menu">•••</span>
            </div>

            <div className="art-card-body">
              <span className="art-overline">YOUR NEXT CHAPTER</span>
              <h3>Ideas become<br />beautiful things.</h3>

              <div className="art-progress-heading">
                <span>Project momentum</span>
                <strong>78%</strong>
              </div>

              <div className="art-progress">
                <div />
              </div>

              <div className="art-bottom">
                <div className="art-avatars">
                  <span>D</span>
                  <span>A</span>
                  <span>R</span>
                  <span>+</span>
                </div>
                <div className="art-status">
                  <CheckCircle2 size={14} />
                  Moving forward
                </div>
              </div>
            </div>
          </div>

          <div className="floating-label label-bottom">
            <span className="bottom-spark">✳</span>
            Less noise. More flow.
          </div>

          <div className="visual-decoration decoration-purple" />
          <div className="visual-decoration decoration-gold" />
        </div>
      </div>

      <div className="hero-bottom-line">
        <span>THINK CLEARLY.</span>
        <span>CREATE FEARLESSLY.</span>
        <span>MOVE TOGETHER.</span>
      </div>
    </section>
  );
}

export default Hero;
