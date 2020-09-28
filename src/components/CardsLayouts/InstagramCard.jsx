import React from "react";
import { Card, CardText, CardImage } from "../BaseCard";
import { useGetSize } from "../../hooks/getSizeHook";
import { useLightBoxContext } from "../BaseLightBox";

export const InstagramCard = ({ children, ...props }) => {
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
        {size.width <= 550 && (
          <div
            onClick={previousAction}
            className="buttonMobile buttonMobileLeft"
          >
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
            </svg>
          </div>
        )}

        {size.width <= 550 && (
          <div onClick={nextAction} className="buttonMobile buttonMobileRight">
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
          </div>
        )}
      </CardImage>
      <CardText>
        <div
          role="button"
          tabIndex="0"
          className="closeButton"
          onClick={closeAction}
        >
          x
        </div>
        {children}
        <p>{card.altText}</p>
      </CardText>
    </Card>
  );
};
