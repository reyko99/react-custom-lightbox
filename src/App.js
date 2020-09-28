import React, { useState } from "react";
import {
  LightBox,
  ContentBox,
  NextButton,
  PreviousButton
} from "./components/BaseLightBox";
import { InstagramCard } from "./components/CardsLayouts";
import { useGetSize } from "./hooks/getSizeHook";
import "./styles.css";

const cardData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dakp804eh/image/upload/c_fit,w_838/v1589816025/widgets/hotels/architecture-blue-water-buildings-business-261102.jpg",
    altText: "Hello Miami"
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dakp804eh/image/upload/c_fit,w_838/v1589815998/widgets/hotels/beach-blue-clouds-coconut-trees-594077.jpg",
    altText: "Hello Hawai"
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dakp804eh/image/upload/c_fit,w_838/v1589815969/widgets/hotels/body-of-water-near-buildings-1134176.jpg",
    altText: "Hello Fiji"
  }
];
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
            <InstagramCard />
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
