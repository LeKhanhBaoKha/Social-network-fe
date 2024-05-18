import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function AlbumTab() {
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
    <div className="w-[900px] flex flex-col border rounded-xl p-2">
      <div>
        <h1 className="text-lg font-semibold py-2 ml-[31px]">Ảnh</h1>
      </div>
      <div className="grid grid-cols-5 gap-y-[15px]">
        {Imagedata &&
          Imagedata.map((image) => (
            <NavLink className="hover:cursor-pointer">
              <div>
                <img
                  key={image.id}
                  src={image.download_url}
                  alt={image.author}
                  className="w-[160px] h-[160px] rounded-xl object-cover hover:"
                />
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
}
