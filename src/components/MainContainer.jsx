import LeftCard from "./LeftCard";

import RightCard from "./RightCard";

const MainContainer = () => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <LeftCard />
      <RightCard />
    </div>
  );
};

export default MainContainer;
