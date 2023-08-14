
export const ImagePreview = ({ imageUrl }: {imageUrl: string}) => {
  return <div className={"productForm__image-preview"}>
    {
      imageUrl !== ""
        ? (
          <div>
            <img src={imageUrl} alt={"image preview"}/>
          </div>
        )
        : <span>Aucune image</span>
    }
  </div>;
}