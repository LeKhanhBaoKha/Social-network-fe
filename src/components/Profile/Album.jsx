import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function ProfileAlbum() {
  const [Imagedata, setImageData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list");
        if (!response.ok) {
          throw new Error(`Error status" ${response.status}`);
        }
        const result = await response.json();
        setImageData(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (

    <div className="w-[560px] lg:w-[360px] min-h-[350px] border rounded-xl bg-white">

      <div className="m-4 flex gap-[10px] flex-col">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg p-2">Ảnh</h1>
          <NavLink>
            <button className="w-[150px] p-2 hover:bg-gray-200 rounded-lg text-lg transition-colors">
              Xem tất cả ảnh
            </button>
          </NavLink>
        </div>
        <div className="grid grid-cols-3 gap-4 rounded-xl">
          {Imagedata &&
            Imagedata.slice(0, 9).map((image) => (

              <NavLink className="hover:cursor-pointer">
                <div>
                  <img
                    key={image.id}
                    src={image.download_url}
                    alt={image.author}
                    className="w-[150px] h-[150px] lg:w-[100px] lg:h-[100px] rounded-xl object-cover hover:"
                  />
                </div>
              </NavLink>

            ))}
        </div>
      </div>
    </div>
  );
}
