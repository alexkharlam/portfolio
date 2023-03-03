import { Linkedin } from "react-feather";

function LinkedInIcon({ size }) {
  return (
    <div className="rounded-sm p-1.5 transition-all duration-300 group-hover:bg-[#0a66c2]">
      <Linkedin
        size={size}
        strokeWidth={1}
        fill="currentColor"
        fillOpacity={1}
        stroke="currentColor"
        strokeOpacity={1}
        className=" text-gray-400 group-hover:text-gray-100 "
      />
    </div>
  );
}

export default LinkedInIcon;
