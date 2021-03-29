import "./status.css";

const Status = ({ status }) => {
  console.log("in invoice component", status);
  return (
    <div className={`status status--${status}`}>
      <p>
        &#8226;
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </p>
    </div>
  );
};

export default Status;
