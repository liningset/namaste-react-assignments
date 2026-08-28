const Shimmer = ({ mode }) => {
  switch (mode) {
    case "homepage": {
      const iterate15times = () => {
        const array = [];
        for (let i = 1; i <= 15; i++) {
          array.push(<div className="shimmer-card" key={i}></div>);
        }
        return array;
      };
      return <ul className="shimmer-cards">{iterate15times()}</ul>;
    }

    case "restaurantpage": {
      return (
        <aside className="shimmer-root">
          <div className="shimmer-wrapper">
            <div className="shimmer-header">
              <div className="avatar"></div>
              <div>
                <h2></h2>
                <div className="sub-sub-heading">
                  <h4></h4>
                  <h4></h4>
                  <h4></h4>
                </div>
              </div>
            </div>
            <div className="shimmer-main">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </aside>
      );
    }
  }
};

export default Shimmer;
