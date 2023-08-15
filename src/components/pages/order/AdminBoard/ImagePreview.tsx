import styled from "styled-components";
import {theme} from "../../../../theme";

const ImagePreviewStyled = styled.div`
  display: grid;
  place-items: center;
  width: 22rem;
  height: 15rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.greyLight};
  
  > div {
    height: 100%;
    max-height: 14rem;

    > img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  > span {
    font-family: "Open Sans", sans-serif;
    line-height: 2.4;
    color: ${theme.colors.greyBlue};
  }
`
export const ImagePreview = ({ imageUrl }: {imageUrl: string}) => {
  return <ImagePreviewStyled>
    {
      imageUrl !== ""
        ? (
          <div>
            <img src={imageUrl} alt={"image preview"}/>
          </div>
        )
        : <span>Aucune image</span>
    }
  </ImagePreviewStyled>;
}