import React, { useEffect } from "react";
import SplitContainer from "../../components/SplitContainer";
import TextContainer from "../../components/TextContainer";
import { reusableHeaderStyles } from "../../helpers/ReusableStyles";
import FormikContainer from "./FormikContainer";

const Covid = () => {
  useEffect(() => {
    document.title = "Redberry - Covid";
  }, []);

  return (
    <SplitContainer>
      <h1 className={`${reusableHeaderStyles} left-[200px] top-[61px]`}>
        Covid Stuff
      </h1>
      <h1 className={`${reusableHeaderStyles} left-[1066px] top-[61px]`}>
        Redberry Covid Policies
      </h1>
      <TextContainer position={`left-[1066px] top-[251px]`}>
        As this infamous pandemic took over the world, we adjusted our working
        practices so that our employees can be as safe and comfortable as
        possible. We have a hybrid work environment, so you can either work from
        home or visit our lovely office on Sairme Street. If it was up to us, we
        would love you to see us in the office because we think face-to-face
        communications Zoom meetings. Both on the fun and productivity scales.
      </TextContainer>
      <FormikContainer />
    </SplitContainer>
  );
};

export default Covid;
