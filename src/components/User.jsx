import PropTypes from "prop-types";

const User = (props) => {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} className="img" alt="user" />
      <h3>{props.username}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="btns">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
User.propTypes = {
  username: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  profile: PropTypes.string,
  online: PropTypes.bool,
};
export default User;
