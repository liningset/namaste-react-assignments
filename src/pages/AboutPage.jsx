import { Component } from "react";
import AboutTeamMember from "../components/AboutTeamMember";

class AboutPage extends Component {
  constructor() {
    super();
    this.state = {
      staffMembers: [],
    };
    this.timeout = () => {
      console.log("timeout ran");

      this.setState({
        staffMembers: [
          { name: "ali" },
          { name: "mehdi" },
          { name: "karim" },
          { name: "gholam" },
        ],
      });
    };
  }

  componentDidMount() {
    setTimeout(this.timeout, 2000);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <section className="aboutpage-section">
        <div className="aboutpage-wrapper">
          <h1>ما که هستیم؟</h1>
          <ul className="staff-members">
            {this.state.staffMembers.map((member, i) => (
              <AboutTeamMember key={i} name={member.name} />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default AboutPage;
