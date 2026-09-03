import { Component } from "react";
import AboutTeamMember from "../components/AboutTeamMember";

class AboutPage extends Component {
  constructor() {
    super();
    this.state = {
      staffMembers: [],
    };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      this.setState({
        staffMembers: [
          {
            id: 1,
            name: "علی قلیزاده",
            cover:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4S_WSz7FM9B_XMWTn4MoxEHcwTs3jlc6E7Yjf7cdRxDIw3DJeR9_AKM8&s=10",
          },
          {
            id: 2,
            name: "مهسا خدایار",
            cover:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SUJf1dTNXq5OzsqylWW_O3tL2uCTKOyOKOH9w4pCrVSAuy8Rz9g3F3E&s=10",
          },
          {
            id: 3,
            name: "موسی آقایی",
            cover:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5oOLCUkWWUyMtoQxOhOBIT-_tffkloGbwAw-FRwJCL_8TekBCyPf41qc&s=10",
          },
          {
            id: 4,
            name: "رحیم رحمتی",
            cover:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD9Uztwcgv1nbcEgAwbz3Ha3CjGxKh-c_cZV6JhGLdN1Xrt1oqdJ1s090&s=10",
          },
        ],
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    return (
      <section className="aboutpage-section">
        <div className="aboutpage-wrapper">
          <h1>ما که هستیم؟</h1>
          <ul className="staff-members">
            {this.state.staffMembers.map((member) => (
              <AboutTeamMember key={member.id} data={member} />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default AboutPage;
