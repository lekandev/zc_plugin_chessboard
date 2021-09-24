import Logo from "../../../assets/modal/profile_img.svg";
import Close from "../../../assets/modal/close.svg";
// import "./Forfeit.css";
import { useHistory } from "react-router-dom";

//import style-components
import { ForfeitContainer, ForfeitModal, ForfeitModalClose, ForfeitHeader, ForfeitContent, ForfeitFooter, ForfeitGameBtn } from "./ForfeitStyle";

const Forfeit = ({ isModalOpen, setmodalIsOpen, handleClick }) => {

  const close = () => setmodalIsOpen();

  const history = useHistory();
  if (!isModalOpen) {
    return null;
  }

  return (
    <ForfeitContainer className="forfeit-container">
      <ForfeitModal className="forfeit-modal">
        <ForfeitModalClose className="btn-forfeit-modal-close" onClick={close}>
          <img className="" src={Close} alt="Close" />
        </ForfeitModalClose>
        <ForfeitHeader className="forfeit-header">
          <img className="profile" src={Logo} alt="profile" />
        </ForfeitHeader>

        <ForfeitContent className="forfeit-content">
          <h2 className="forfeit-content-text">
            Are you sure you want to forfeit the game?
          </h2>
        </ForfeitContent>
        <ForfeitFooter className="forfeit-footer">
          <ForfeitGameBtn className="btn-forfeit-game">
            <button
              className="btn-forfeit-modal btn-accept-forfeit"
              onClick={() => {
                history.push("/");
              }}
            >
              Accept
            </button>
          </ForfeitGameBtn>

          <ForfeitGameBtn className="btn-forfeit-game">
            <button
              className="btn-forfeit-modal btn-decline-forfeit"
              onClick={close}
            >
              Decline
            </button>
          </ForfeitGameBtn>
        </ForfeitFooter>
      </ForfeitModal>
    </ForfeitContainer>
  );
};

export default Forfeit;
