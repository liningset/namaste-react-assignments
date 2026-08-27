const Shimmer = () => {
  const iterate15times = () => {
    const array = [];
    for (let i = 1; i <= 15; i++) {
      array.push(<div className="shimmer-card" key={i}></div>);
    }
    return array;
  };
  return <ul className="shimmer-cards">{iterate15times()}</ul>;
};

export default Shimmer;
