import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIconos } from "./styles/SocialIcons.styled";

export default function SocialIcons() {
  return (
    <StyledSocialIconos>
      <li>
        <a href="https://twitter.com/">
          <FaTwitter />
        </a>
        <li>
          <a href="https://facebook.com/">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/">
            <FaLinkedin />
          </a>
        </li>
      </li>
    </StyledSocialIconos>
  );
}
