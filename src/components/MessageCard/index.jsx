// eslint-disable-next-line react/prop-types
const MessageCard = ({ username, message }) => {
  return (
    <div className="bg-white p-4 border rounded-lg mb-4">
      <h3 className="text-xl font-semibold mb-2 p-2 border-b">🎉 {username}</h3>
      <p className="font-playpen">{message}</p>
    </div>
  );
};
export default MessageCard;
