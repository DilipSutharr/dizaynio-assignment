import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

import { Button } from "../components";

const NotesListing = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
  });

  const notes = useSelector((state) => state.root.notes);

  return (
    <div className="p-4 md:py-10 md:px-40 lg:py-14 lg:px-48 h-screen bg-[#f2f4f7]">
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-semibold text-lg md:text-2xl">Notes</h1>
        {!isMobile && (
          <Button
            label="NEW"
            bgColor="#579bc3"
            labelColor="white"
            icon={<IoIosAdd size="25px" />}
            onClick={() => navigate("/create")}
          />
        )}
      </div>

      <div className="my-4 md:my-8">
        {notes?.length > 0 &&
          notes?.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-md my-4 cursor-pointer"
              onClick={() => navigate(`/note/${item.id}`)}
            >
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="font-light">{item.createdDate}</p>
            </div>
          ))}
      </div>

      {isMobile && (
        <div className="flex flex-col items-end">
          <Button
            label="NEW"
            bgColor="#579bc3"
            labelColor="white"
            icon={<IoIosAdd size="25px" />}
            onClick={() => navigate("/create")}
          />
        </div>
      )}
    </div>
  );
};

export default NotesListing;
