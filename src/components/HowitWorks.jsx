
import {
  Lightbulb,
  Layers3,
  Rocket,
  ArrowRight
} from 'lucide-react';

import './HowitWorks.css';

function HowitWorks() {
  const steps = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Bring your ideas',
      description:
        'Start with your vision. Create a workspace and bring your team together around a shared goal.',
      color: 'verdigris'
    },
    {
      number: '02',
      icon: Layers3,
      title: 'Organize your work',
      description:
        'Turn ideas into projects, assign tasks and build workflows that keep everyone aligned.',
      color: 'amethyst'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Make progress',
      description:
        'Track milestones, understand performance and move every project closer to completion.',
      color: 'blossom'
    }
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="how-heading">
        <span className="section-label">A SIMPLER WAY TO WORK</span>
        <h2>
          From scattered ideas
          <span>to meaningful impact.</span>
        </h2>
        <p>
          Everything comes together in three simple steps.
          Less complexity, more progress.
        </p>
      </div>

      <div className="how-steps">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article className={`how-card ${step.color}`} key={step.number}>
              <div className="how-card-top">
                <span>{step.number}</span>
                <Icon size={25} strokeWidth={1.7} />
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>

              <div className="how-card-bottom">
                <span>STEP {step.number}</span>
                <ArrowRight size={19} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default HowitWorks;
