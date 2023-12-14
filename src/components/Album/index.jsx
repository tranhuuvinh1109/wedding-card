import { imageArray } from '../../constant';

const Album = () => {
  return (
    <div className="flex flex-wrap justify-around items-center">
      {imageArray.map((image, index) => {
        return (
          <div key={index} className="overflow-hidden w-[45%] md:w-[30%] mb-4">
            <img
              src={image.src.replace('file/d/', 'uc?id=').split('/view')[0]}
              alt={image.alt}
              className="w-full rounded-md"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Album;
