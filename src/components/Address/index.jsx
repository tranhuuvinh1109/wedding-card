const Address = () => {
  return (
    <div className="mt-10">
      <h1 className="font-semibold text-3xl text-center font-playpen text-white mb-6">Sự Kiện Cưới</h1>
      <div className="p-2">
        <div className="flex bg-white p-4 rounded-md mb-4">
          <img
            src="https://drive.google.com/uc?id=1Kmvr7V9iPPeanwe1ousQBkPeTSf2W8-2"
            alt="male"
            className="w-[250px] h-[250px] object-cover rounded-md"
          />
          <div className="font-semibold font-playpen text-center px-4 flex items-center flex-col justify-center">
            <h4 className="text-xl mb-4">TIỆC CƯỚI NHÀ NAM</h4>
            <h6>11:30 AM 24/12/2023</h6>
            <h6>504 Nguyễn Tất Thành, Thủy Phương, Hương Thủy, TT Huế</h6>
          </div>
        </div>
        <div className="flex bg-white p-4 rounded-md">
          <img
            src="https://drive.google.com/uc?id=1ILnQ2fbCAcT91zcwGBVEyvjrdiwsbiUm"
            alt="male"
            className="w-[250px] h-[250px] object-cover rounded-md"
          />
          <div className="font-semibold font-playpen text-center px-4 flex items-center flex-col justify-center">
            <h4 className="text-xl mb-4">TIỆC CƯỚI NHÀ NỮ</h4>
            <h6>11:30 AM 24/12/2023</h6>
            <h6>504 Nguyễn Tất Thành, Thủy Phương, Hương Thủy, TT Huế</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
