import { memo } from 'react';

type Props={
  img:string;
}

function OfferGalleryImageRew({img}:Props):JSX.Element {
  return(
    <div className="offer__image-wrapper">
      <img className="offer__image" src={img} alt="Photo studio" />
    </div>
  );
}
const OfferGalleryImage = memo(OfferGalleryImageRew);
export default OfferGalleryImage;
