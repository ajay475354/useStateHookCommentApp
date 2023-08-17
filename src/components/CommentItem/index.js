import "./index.css";

const CommentItem = (props) => {
  const { each } = props;
  const { name, commentText } = each;
  return (
    <div className="comment_card">
      <div className="logo_details_container">
        <p className="logo">{name[0].toUpperCase()}</p>
        <h1 className="name_logo">{name}</h1>
      </div>
      <p className="comment_data">{commentText}</p>
    </div>
  );
};
export default CommentItem;
