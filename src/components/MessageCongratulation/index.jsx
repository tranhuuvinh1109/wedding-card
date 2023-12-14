import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import MessageCard from '../MessageCard';
import { ref, push, onValue } from 'firebase/database';
import toast from 'react-hot-toast';

const MessageCongratulation = () => {
  const [data, setData] = useState({
    username: '',
    message: '',
  });
  const [messageArray, setMessageArray] = useState();
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.username && data.message) {
      try {
        const messagesRef = ref(db, `messages`);
        await push(messagesRef, {
          username: data.username,
          message: data.message,
          timestamp: new Date().toISOString(),
        });
        toast.success('Gửi lời chúc thành công !!!');
        setData({
          username: '',
          message: '',
        });
      } catch (error) {
        toast.error('Gửi lời chúc thất bại !!!');
        console.error('Error sending message:', error);
      }
    } else {
      toast.error('Vui lòng điền đầy đủ thông tin gồm tên và lời chúc !!!');
    }
  };

  useEffect(() => {
    const databaseRef = ref(db, `messages`);

    const unsubscribe = onValue(databaseRef, (snapshot) => {
      const newData = [];
      snapshot.forEach((childSnapshot) => {
        newData.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      newData.sort((a, b) => b.timestamp.localeCompare(a.timestamp));

      setMessageArray(newData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="rounded-lg bg-content-primary m-6">
      <div className="p-6">
        <form onSubmit={handleSubmit} method="post">
          <div>
            <input
              type="text"
              placeholder="Tên của bạn *"
              className="px-4 py-2 rounded-md w-full mb-4"
              value={data.username}
              name="username"
              onChange={handleChange}
            />
            <textarea
              rows={4}
              placeholder="Nhập lời chúc *"
              className="px-4 py-2 rounded-md w-full"
              value={data.message}
              name="message"
              onChange={handleChange}
            />
            <div className="flex justify-center items-center mt-6">
              <button
                type="submit"
                className="px-8 py-2 bg-content font-semibold text-white rounded-md hover:bg-content-supper"
              >
                Gửi lời chúc
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="px-6 max-h-[300px] overflow-y-auto mt-8">
        {messageArray?.map((message) => (
          <MessageCard username={message.username} message={message.message} key={message.id} />
        ))}
      </div>
    </div>
  );
};

export default MessageCongratulation;
