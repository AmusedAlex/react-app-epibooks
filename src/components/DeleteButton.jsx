import { Button } from "react-bootstrap";

const DeleteButton = (props) => {
  let onDeleteHandler = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmODZkMWQ4MzkzNTAwMTVlOGM1M2MiLCJpYXQiOjE2NjkzMDE5NjksImV4cCI6MTY3MDUxMTU2OX0.YaQdMFZU3MeqxnCSHlo-NBTQ5kRZipYzklw5N2EkFdA",
          },
        }
      );
      if (response.ok) {
        props.fetchComments();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      variant="danger"
      key={props.commentId}
      onClick={() => onDeleteHandler()}
    >
      Delete Comment
    </Button>
  );
};

export default DeleteButton;
