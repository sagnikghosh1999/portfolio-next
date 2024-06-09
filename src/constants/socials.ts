import SocialLinkInterface from "@/interfaces/SocialLinkInterface";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

/**
 * List of social links that are displayed in the footer and home page.
 */
const socialLinks: SocialLinkInterface[] = [
  {
    name: "GitHub",
    link: "https://github.com/sagnikghosh1999",
    IconComponent: AiOutlineGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sagnikghosh99/",
    IconComponent: AiFillLinkedin,
  },
  {
    name: "Email",
    link: "mailto:sagnikghosh813@gmail.com",
    IconComponent: AiOutlineMail,
  },
];

export default socialLinks;
