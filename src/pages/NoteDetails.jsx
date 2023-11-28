import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CiImageOn } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { GoDeviceCameraVideo } from "react-icons/go";
import { v4 as uuidv4 } from "uuid";

import { Audio, Button, Image, Video } from "../components";
import { updateNote } from "../store/rootSlice";

const NoteDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notes = useSelector((state) => state.root.notes);

  const imageFileInputRef = useRef(null);
  const videoFileInputRef = useRef(null);
  const audioFileInputRef = useRef(null);

  const [data, setData] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    const currentData = notes.find((item) => item.id === id);
    setData(currentData);
  }, []);

  const handleImageButtonClick = () => {
    imageFileInputRef.current.click();
  };

  const handleVideoButtonClick = () => {
    videoFileInputRef.current.click();
  };

  const handleAudioButtonClick = () => {
    audioFileInputRef.current.click();
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const fileData = {
        id: uuidv4(),
        type,
        content: file,
      };
      if (text) {
        const textData = {
          id: uuidv4(),
          type: "text",
          content: text,
        };
        setData((prev) => {
          return {
            ...prev,
            data: [...prev.data, textData, fileData],
          };
        });
      } else {
        setData((prev) => {
          return {
            ...prev,
            data: [...prev.data, fileData],
          };
        });
      }
      setText("");
    }
  };

  const handleTextKeyPress = (event) => {
    if (event.key === "Enter") {
      const textData = {
        id: uuidv4(),
        type: "text",
        content: text,
      };
      setData((prev) => {
        return {
          ...prev,
          data: [...prev.data, textData],
        };
      });
      setText("");
    }
  };

  const handleSave = () => {
    dispatch(updateNote(data));
    navigate("/");
  };

  const handleDelete = (id) => {
    const filteredData = data?.data?.filter((item) => item.id !== id);
    setData((prev) => {
      return {
        ...prev,
        data: filteredData,
      };
    });
  };

  return (
    <div className="p-4 md:py-10 md:px-40 lg:py-14 lg:px-48">
      <div className="flex flex-row items-center justify-between pb-5">
        <IoMdArrowBack size="25px" onClick={() => navigate("/")} />
        <Button
          label="Save"
          bgColor="#d3e2ed"
          labelColor="#77adce"
          onClick={handleSave}
        />
      </div>

      <p className="text-lg font-semibold">{data?.title}</p>

      <div className="flex flex-col items-center">
        {data?.data?.length > 0 &&
          data?.data?.map((item) => {
            if (item.type === "text") {
              return <p key={item.id}>{item.content}</p>;
            } else if (item.type === "image") {
              return (
                <Image
                  key={item.id}
                  src={URL.createObjectURL(item.content)}
                  alt={`Image ${item.id}`}
                  onClick={() => handleDelete(item.id)}
                />
              );
            } else if (item.type === "video") {
              return (
                <Video
                  key={item.id}
                  src={URL.createObjectURL(item.content)}
                  onClick={() => handleDelete(item.id)}
                />
              );
            } else if (item.type === "audio") {
              return (
                <Audio key={item.id} src={URL.createObjectURL(item.content)} />
              );
            }
          })}
      </div>

      <div>
        <div className="py-5 flex flex-col items-center">
          <input
            className="flex w-full md:w-2/3"
            type="text"
            placeholder="Start typing..."
            value={text}
            onKeyUp={handleTextKeyPress}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex flex-row items-center justify-center gap-5 md:gap-10">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFileChange(e, "image")}
          ref={imageFileInputRef}
        />
        <Button
          icon={<CiImageOn color="#77adce" size="20px" />}
          bgColor="#e9f1f6"
          onClick={handleImageButtonClick}
        />
        <input
          type="file"
          accept="video/*"
          className="hidden"
          onChange={(e) => handleFileChange(e, "video")}
          ref={videoFileInputRef}
        />
        <Button
          icon={<GoDeviceCameraVideo color="#77adce" size="20px" />}
          bgColor="#e9f1f6"
          onClick={handleVideoButtonClick}
        />
        <input
          type="file"
          accept="audio/*"
          className="hidden"
          onChange={(e) => handleFileChange(e, "audio")}
          ref={audioFileInputRef}
        />
        <Button
          icon={<MdOutlineKeyboardVoice color="#77adce" size="20px" />}
          bgColor="#e9f1f6"
          onClick={handleAudioButtonClick}
        />
      </div>
    </div>
  );
};

export default NoteDetails;
