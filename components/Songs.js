import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

const Songs = () => {
  const paylist = useRecoilValue(playlistState);
  return (
    <div className="px-8 flex flex-col space-y-1 pb-28 text-white">
      {paylist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  );
};

export default Songs;
