import { YouTube as YoutubeIcon } from "@mui/icons-material";

const Icon = () => {
    return (
        <div className="iconWrapper"><YoutubeIcon className="thumbIcon"/></div>
    )
}

export const Youtube = () => {
  return (
    <div id="youtube" className="mediaWrapper">
      <article>
        <div className="image img1"><Icon /></div>
      </article>
      <article>
        <div className="image img2"><Icon /></div>
      </article>
      <article>
        <div className="image img3"><Icon /></div>
      </article>
    </div>
  );
};
