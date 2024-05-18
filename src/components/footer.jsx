import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-evenly border-t border-neutral-800 mt-20">
      <div className="flex flex-col gap-6 p-10">
        {resourcesLinks.map((item) => (
          <a href="#">{item.text}</a>
        ))}
      </div>
      <div className="flex flex-col gap-6 p-10">
        {platformLinks.map((item) => (
          <a href="#">{item.text}</a>
        ))}
      </div>
      <div className="flex flex-col gap-6 p-10">
        {communityLinks.map((item) => (
          <a href="#">{item.text}</a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
