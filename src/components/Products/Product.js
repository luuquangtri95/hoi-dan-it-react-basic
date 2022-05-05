import { useState } from "react";
import "./styles.scss";
import sneaker1 from "../../assets/images/sneaker1.jpg";
import sneaker2 from "../../assets/images/sneaker2.jpg";
import sneaker3 from "../../assets/images/sneaker3.jpg";
import sneaker4 from "../../assets/images/sneaker4.jpg";
import Lightbox from "react-image-lightbox";

const images = [sneaker1, sneaker2, sneaker3, sneaker4];

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(sneaker1);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClickReview = () => {
    const index = images.findIndex((image) => image === currentImage);
    console.log("index", index);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="product-container">
      <div className="content-left">
        <div className="img-up">
          <img src={currentImage} alt="" onClick={handleClickReview} />
        </div>
        <div className="img-dw">
          <div className="img-item">
            <img
              className={currentImage === sneaker1 ? "active" : ""}
              src={sneaker1}
              alt=""
              onClick={() => setCurrentImage(sneaker1)}
            />
          </div>
          <div className="img-item">
            <img
              className={currentImage === sneaker2 ? "active" : ""}
              src={sneaker2}
              alt=""
              onClick={() => setCurrentImage(sneaker2)}
            />
          </div>
          <div className="img-item">
            <img
              className={currentImage === sneaker3 ? "active" : ""}
              src={sneaker3}
              alt=""
              onClick={() => setCurrentImage(sneaker3)}
            />
          </div>
          <div className="img-item">
            <img
              className={currentImage === sneaker4 ? "active" : ""}
              src={sneaker4}
              alt=""
              onClick={() => setCurrentImage(sneaker4)}
            />
          </div>
        </div>
      </div>

      <div className="content-right">
        <div className="title">GIÀY NAM SNAKER THỜI TRANG MẪU MỚI TIZINIS</div>
        <div className="price">54.000 ₫</div>
        <div className="size">size: 30</div>
        <div className="action">
          <label htmlFor="" className="quantity">
            Số lượng
          </label>
          <input
            className="quantity"
            min={1}
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className="buy">Chọn mua</button>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Product;
