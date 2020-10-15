import React from "react";
import { Card, CardText, CardImage } from "./Atoms";
import { useGetSize } from "../../hooks/getSizeHook";
import { useLightBoxContext } from "../BaseLightBox";
import { ButtonMobile } from "../Card/Atoms/ButtonMobile";
import { CloseButton } from "../Card/Atoms/CloseButton";
import "./styles.css";

const MOBILE_BREAKPOINT = 550;

const ButtonsLayout = ({ size, nextAction, previousAction }) => {
  return (
    size.width <= MOBILE_BREAKPOINT && (
      <>
        <ButtonMobile direction={"left"} action={previousAction} />
        <ButtonMobile direction={"right"} action={nextAction} />
      </>
    )
  );
};

export const InstagramCard = ({ children, showButtons = false, ...props }) => {
  const size = useGetSize();
  const {
    state: { card },
    closeAction,
    nextAction,
    previousAction
  } = useLightBoxContext();

  return (
    <Card {...props}>
      <CardImage image={card.image} altText={card.altText}>
        {showButtons && (
          <ButtonsLayout
            nextAction={nextAction}
            previousAction={previousAction}
            size={size}
          />
        )}
      </CardImage>
      <CardText
        style={{
          "max-width": `${
            size.width <= MOBILE_BREAKPOINT ? "100%" : "300px"
          }!important`
        }}
      >
        {children}
      </CardText>
      <CloseButton action={closeAction} />
    </Card>
  );
};
