type Props={
  img:string;
}

function OfferGalleryImage({img}:Props):JSX.Element {
  return(
    <div className="offer__image-wrapper">
      <img className="offer__image" src={img} alt="Photo studio" />
    </div>
  );
}

export default OfferGalleryImage;
