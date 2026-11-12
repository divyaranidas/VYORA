
import { useState } from 'react';
import {
  LayoutDashboard,
  CheckCircle2,
  Clock3,
  Users,
  MoreHorizontal,
  Plus,
  X,
  ArrowUpRight
} from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState('');

  const [tasks, setTasks] = useState([
    { name: 'Website redesign', team: 'Design team', progress: 85, color: 'green' },
    { name: 'Product launch', team: 'Marketing team', progress: 65, color: 'purple' },
    { name: 'Mobile experience', team: 'Development team', progress: 42, color: 'gold' }
  ]);

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'My Tasks', icon: CheckCircle2 },
    { name: 'Team Space', icon: Users },
    { name: 'Timeline', icon: Clock3 }
  ];

  function addProject(event) {
    event.preventDefault();

    if (!projectName.trim()) return;

    setTasks([
      ...tasks,
      {
        name: projectName.trim(),
        team: 'New project team',
        progress: 0,
        color: 'blue'
      }
    ]);

    setProjectName('');
    setShowModal(false);
    setActiveTab('Overview');
  }

  return (
    <section className="dashboard-section" id="solutions">
      <div className="dashboard-intro">
        <span className="section-label">YOUR WORKSPACE, REIMAGINED</span>
        <h2>See your entire world of work.</h2>
        <p>One clear view of your projects, people and progress.</p>
      </div>

      <div className="dashboard-window">

        <aside className="dashboard-sidebar">
          <div className="dashboard-brand">VYORA.</div>

          <nav className="dashboard-navigation">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className={`dashboard-menu ${activeTab === item.name ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.name)}
                >
                  <Icon size={19} />
                  {item.name}
                </button>
              );
            })}
          </nav>

          <div className="sidebar-bottom">YOUR WORK. IN FLOW.</div>
        </aside>

        <div className="dashboard-main">
          <div className="dashboard-topbar">
            <div>
              <span className="dashboard-eyebrow">MONDAY, YOUR WAY</span>
              <h3>Good morning, Alex </h3>
              <p className="dashboard-tab-label">{activeTab} workspace</p>
            </div>

            <button
              className="dashboard-add"
              onClick={() => setShowModal(true)}
            >
              <Plus size={17} />
              New project
            </button>
          </div>

          {activeTab !== 'Overview' && (
  <div className="tab-message">
    {activeTab === 'My Tasks' && (
      <>
        <h3>Your tasks, your priorities.</h3>
        <p>Keep track of the work assigned to you and your progress.</p>
      </>
    )}

    {activeTab === 'Team Space' && (
      <>
        <h3>Better work, together.</h3>
        <p>Your team is collaborating across {tasks.length} projects.</p>
      </>
    )}

    {activeTab === 'Timeline' && (
      <>
        <h3>Your project timeline.</h3>
        <p>Track progress across all your active projects.</p>
      </>
    )}
  </div>
)}

          <div className="dashboard-stats">
            <div className="stat-card">
              <span>Active projects</span>
              <strong>{tasks.length + 9}</strong>
              <small>Across your workspace</small>
            </div>

            <div className="stat-card">
              <span>Tasks completed</span>
              <strong>84%</strong>
              <small>+12% this month</small>
            </div>

            <div className="stat-card">
              <span>Team members</span>
              <strong>24</strong>
              <small>Working together</small>
            </div>
          </div>

          <div className="project-panel">
            <div className="project-panel-heading">
              <div>
                <span className="dashboard-eyebrow">WORKSPACE OVERVIEW</span>
                <h3>{activeTab === 'Overview' ? 'Active projects' : activeTab}</h3>
              </div>
              <MoreHorizontal size={22} />
            </div>

            {tasks.map((task) => (
              <div className="project-row" key={task.name}>
                <div className="project-info">
                  <div>
                    <strong>{task.name}</strong>
                    <span>{task.team}</span>
                  </div>
                  <strong>{task.progress}%</strong>
                </div>

                <div className="progress-track">
                  <div
                    className={`progress-fill ${task.color}`}
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="project-modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <span className="dashboard-eyebrow">NEW WORKSPACE PROJECT</span>
            <h3>Create something meaningful.</h3>
            <p>Give your next big idea a name.</p>

            <form onSubmit={addProject}>
              <input
                type="text"
                value={projectName}
                onChange={(event) => setProjectName(event.target.value)}
                placeholder="Enter project name"
                autoFocus
                required
              />

              <button type="submit">
                Create project <ArrowUpRight size={17} />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dashboard;
