const Shimmer = ({ mode }) => {
  const iterateNtimes = (N) => {
    const array = [];
    for (let i = 1; i <= N; i++) {
      array.push(<div className="shimmer-card" key={i}></div>);
    }
    return array;
  };
  switch (mode) {
    case "homepage": {
      return (
        <ul className="shimmer-root shimmer-cards">{iterateNtimes(15)}</ul>
      );
    }

    case "restaurantpage": {
      return (
        <aside className="shimmer-root restaurant-shimmer">
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
              <div className="shimmer-category">
                <h4></h4>
                <ul>{iterateNtimes(10)}</ul>
              </div>
              <div className="shimmer-category">
                <h4></h4>
                <ul>{iterateNtimes(10)}</ul>
              </div>
            </div>
          </div>
        </aside>
      );
    }
  }
};

export default Shimmer;
