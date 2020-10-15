import React, {
  useRef,
  createContext,
  useCallback,
  useState,
  useEffect
} from "react";
import "./style.css";

const LightBoxContext = createContext();

export function useLightBoxContext() {
  const context = React.useContext(LightBoxContext);

  if (!context) {
    throw new Error(
      `LightBox compound components cannot be rendered outside the LightBox component`
    );
  }

  return context;
}
export const LightBox = ({
  toggle,
  closeOnBackgroundClick = false,
  items = [],
  selectedIndex = 0,
  children
}) => {
  const backdropRef = useRef(null);
  const [state, setState] = useState({
    currentIndex: selectedIndex,
    card:
      items.length > 0 && selectedIndex < items.length
        ? items[selectedIndex]
        : { image: "", altText: "" }
  });
  const nextAction = useCallback(() => {
    if (state.currentIndex < items.length - 1) {
      setState((prevState) => ({
        ...prevState,
        currentIndex: prevState.currentIndex + 1,
        card: items[prevState.currentIndex + 1]
      }));
    }
  }, [state.currentIndex, items]);

  const previousAction = useCallback(() => {
    if (state.currentIndex > 0) {
      setState((prevState) => ({
        ...prevState,
        currentIndex: prevState.currentIndex - 1,
        card: items[prevState.currentIndex - 1]
      }));
    }
  }, [state.currentIndex, items]);

  const closeAction = useCallback(
    (event) => {
      event.stopPropagation();
      console.log("test", toggle);

      toggle(false);
    },
    [toggle]
  );
  useEffect(() => {
    if (backdropRef && backdropRef.current) {
      backdropRef.current.focus();
    }
  }, []);
  const handleBackDropClick = useCallback(() => {
    if (closeOnBackgroundClick) {
      toggle(false);
    }
  }, [closeOnBackgroundClick, toggle]);
  //handling keyboard keys
  const handleKeyDown = (evt) => {
    if (evt.key === "ArrowLeft") {
      previousAction();
    }
    if (evt.key === "ArrowRight") {
      nextAction();
    }
    if (evt.key === "Escape") {
      toggle(false);
    }
  };
  return (
    <LightBoxContext.Provider
      value={{ nextAction, previousAction, closeAction, state }}
    >
      <div
        ref={backdropRef}
        className={"backdrop"}
        onClick={handleBackDropClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {children}
      </div>
    </LightBoxContext.Provider>
  );
};

export const NextButton = ({ children }) => {
  const { nextAction, state } = useLightBoxContext();
  return children({ action: nextAction, state });
};

export const PreviousButton = ({ children }) => {
  const { previousAction, state } = useLightBoxContext();
  return children({ action: previousAction, state });
};

export const ContentBox = ({ children }) => {
  const { state } = useLightBoxContext();
  return (
    <div className="contentBox">
      {children instanceof Function ? children({ state }) : children}
    </div>
  );
};
