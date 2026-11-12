import './Features.css';
import {
  LayoutDashboard,
  Workflow,
  ChartNoAxesCombined,
  ArrowUpRight
} from 'lucide-react';

function Features() {
  const features = [
    {
      number: '01',
      icon: LayoutDashboard,
      title: 'One connected workspace',
      description:
        'Bring projects, tasks, files and conversations together in one organized space.',
      color: 'verdigris'
    },
    {
      number: '02',
      icon: Workflow,
      title: 'Effortless workflows',
      description:
        'Automate repetitive work, simplify processes and keep every project moving.',
      color: 'amethyst'
    },
    {
      number: '03',
      icon: ChartNoAxesCombined,
      title: 'Insights that matter',
      description:
        'Understand team performance with clear reports and real-time project insights.',
      color: 'gold'
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-heading">
        <span className="section-label">THE VYORA ADVANTAGE</span>
        <h2>
          Less chaos.
          <span> More meaningful work.</span>
        </h2>
        <p>
          Everything your team needs to stay focused,
          connected and ahead of the work.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article className="feature-card" key={feature.number}>
              <div className="feature-card-top">
                <span>{feature.number}</span>
                <ArrowUpRight size={20} />
              </div>

              <div className={`feature-icon ${feature.color}`}>
                <Icon size={27} strokeWidth={1.7} />
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Features;
