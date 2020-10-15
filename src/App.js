import React, { useState } from "react";
import {
  LightBox,
  ContentBox,
  NextButton,
  PreviousButton
} from "./components/BaseLightBox";
import { InstagramCard } from "./components/Card";
import { useGetSize } from "./hooks/getSizeHook";

import cardData from "./data.json";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const size = useGetSize();
  return (
    <div className="App">
      <h1>Example of Light Box</h1>
      <button onClick={() => setIsOpen(true)}>Show LightBox</button>

      {isOpen ? (
        <LightBox toggle={setIsOpen} items={cardData}>
          {size.width > 550 && (
            <PreviousButton>
              {({ action }) => (
                <div onClick={action}>
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
                  </svg>
                </div>
              )}
            </PreviousButton>
          )}
          <ContentBox>
            <InstagramCard>
              <div className="grid-con">
                <div className="g-header">Header</div>
                <div className="g-date">Date</div>
                <div className="g-content">Content </div>
                <div className="g-footer">Footer </div>
              </div>
            </InstagramCard>
          </ContentBox>
          {size.width > 550 && (
            <NextButton>
              {({ action }) => (
                <div onClick={action}>
                  {" "}
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                  </svg>
                </div>
              )}
            </NextButton>
          )}
        </LightBox>
      ) : (
        <p>The LightBox is hidden, press on button to show</p>
      )}
    </div>
  );
}
