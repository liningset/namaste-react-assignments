import React from "react";

class AboutTeamMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;

    return <h2>team member {name}</h2>;
  }
}

export default AboutTeamMember;
