import MessageItem from "./MessagesItem";
import Filter from "./Filter";
import SendMessage from "./SendMessage";

const Messages = () => {
  return (
    <>
      <Filter />
      <MessageItem />
      <SendMessage />
    </>
  );
};

export default Messages;
