import "../Styles/Style1.css";
let CurrentTime = () => {
  let time = new Date();

  return (
    <div className="paragraph">
      <p>
        This is the CurrentTime is:- {time.toLocaleTimeString()} and Date is:- {""}
        {time.toLocaleDateString()}
      </p>
    </div>
  );
};

export default CurrentTime;
