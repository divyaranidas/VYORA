
import { useState } from 'react';
import {
  Check,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

import './Pricing.css';

function Pricing() {
  const [billing, setBilling] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      name: 'Essential',
      description: 'Everything you need to bring your work together.',
      monthly: 0,
      yearly: 0,
      features: [
        'Up to 3 active projects',
        'Unlimited tasks',
        'Basic workspace analytics',
        'Up to 5 team members',
        'Community support'
      ],
      featured: false
    },
    {
      name: 'Growth',
      description: 'More clarity, control and momentum for growing teams.',
      monthly: 19,
      yearly: 15,
      features: [
        'Unlimited active projects',
        'Advanced workflow automation',
        'Detailed project analytics',
        'Up to 25 team members',
        'Priority support'
      ],
      featured: true
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-heading">
        <span className="section-label">SIMPLE, THOUGHTFUL PRICING</span>

        <h2>
          Room to grow.
          <span>Plans that flow.</span>
        </h2>

        <p>
          Start with what you need today.
          Find more possibilities as your team grows.
        </p>

        <div className="billing-switch">
          <button
            className={billing === 'monthly' ? 'selected' : ''}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>

          <button
            className={billing === 'yearly' ? 'selected' : ''}
            onClick={() => setBilling('yearly')}
          >
            Yearly
            <span>Save 20%</span>
          </button>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <article
            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            key={plan.name}
          >
            {plan.featured && (
              <span className="pricing-popular">
                <Sparkles size={14} /> MOST POPULAR
              </span>
            )}

            <span className="pricing-plan-name">{plan.name}</span>

            <p className="pricing-description">{plan.description}</p>

            <div className="pricing-price">
              <strong>
                ${billing === 'monthly' ? plan.monthly : plan.yearly}
              </strong>
              <span>/ per user / month</span>
            </div>

            {billing === 'yearly' && plan.featured && (
              <p className="pricing-billing-note">
                Billed annually
              </p>
            )}

            <button
              className="pricing-button"
              onClick={() => setSelectedPlan(plan.name)}
            >
              {plan.name === 'Essential' ? 'Start for free' : 'Choose Growth'}
              <ArrowUpRight size={17} />
            </button>

            <div className="pricing-divider" />

            <span className="pricing-features-title">
              WHAT'S INCLUDED
            </span>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {selectedPlan && (
        <div
          className="pricing-message"
          role="status"
        >
          You've selected the {selectedPlan} plan.
          Contact our team to get started!
          <button onClick={() => setSelectedPlan('')}>Dismiss</button>
        </div>
      )}
    </section>
  );
}

export default Pricing;
