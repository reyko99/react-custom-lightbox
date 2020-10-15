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

export const InstagramCard = ({
  children,
  data = {},
  showButtons = false,
  closeAction = () => {},
  nextAction = () => {},
  previousAction = () => {},
  ...props
}) => {
  const size = useGetSize();

  return (
    <Card {...props}>
      <CardImage image={data.image} altText={data.altText}>
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
        <div className="g-container">
          <div className="g-header">Header</div>
          <div className="g-date">Date</div>
          <div className="g-content">Content </div>
          <div className="g-footer">Footer </div>
        </div>
      </CardText>
      <CloseButton action={closeAction} />
    </Card>
  );
};
