import "./button.css";

// takes in settings, which control the variant of the button
const Button = (props) => {
  let buttonVariant = "btn";

  switch (props.variant) {
    case "secondary-light":
      buttonVariant += " btn-secondary--light";
      break;
    case "secondary-dark":
      buttonVariant += " btn-secondary--dark";
      break;
    case "third-light":
      buttonVariant += " btn-third--light";
      break;
    case "third-dark":
      buttonVariant += " btn-third--dark";
      break;
    case "fourth":
      buttonVariant += " btn-fourth";
      break;
    case "danger":
      buttonVariant += " btn--danger";
      break;
    default:
  }

  return (
    <button onClick={props.onClick} className={buttonVariant}>
      {props.children}
    </button>
  );
};

export default Button;
