import { Link } from "react-router-dom";
import Chat from "./chat/Chat";

const Footer = () => {
  return (
    <footer
    id="contact"
      className="bg-gray-900 relative h-[600px] sm:h-[500px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0  w-full">
        <div>
          {/* Contact section */}
          <div>
            <Chat />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
