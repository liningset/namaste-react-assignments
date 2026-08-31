import React from "react";

class AboutTeamMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, cover } = this.props.data;

    return (
      <li className="member">
        <div className="cover">
          <img src={cover} alt="photo" />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
      </li>
    );
  }
}

export default AboutTeamMember;
