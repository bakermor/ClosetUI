import { ChangeEvent, useState } from "react";
import { uploadClothes } from "../api/ClothesApi";
import noImage from "../assets/noImage.jpg";

const AddClothes = () => {
  const [image, setImage] = useState(noImage);
  const [file, setFile] = useState<File | null>(null);

  const previewImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        let url = URL.createObjectURL(file);
        setImage(url);
        setFile(file);

        return () => URL.revokeObjectURL(url);
      }
    }
  };

  const handleUpload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (file) {
      uploadClothes(file)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="h-full flex">
      <form className="flex-1 bg-gray-500 m-20 flex flex-col p-8">
        <div className="h-4/5 bg-gray-300 flex justify-center">
          <img className="object-contain" src={image} />
        </div>
        <div className="flex justify-end">
          <label
            htmlFor="image-upload"
            className="h-10 w-30 mt-3 mx-2 flex items-center justify-center bg-gray-100"
          >
            Choose File
          </label>
          <input
            id="image-upload"
            type="file"
            className="hidden"
            onChange={previewImage}
          />
        </div>
        <div className="flex justify-center">
          <div className="h-20 bg-gray-300 w-55 mt-5 p-3 flex justify-center align-middle">
            <button className="flex-1" onClick={handleUpload}>
              Upload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddClothes;
