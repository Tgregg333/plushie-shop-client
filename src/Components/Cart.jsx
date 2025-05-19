function Cart() {
  return (
    <main>
      <div className="container-div">
        <div className="product-section">
          <img
            src="./public/images/plush-lion-toy-sitting-on-a-transparent-background-png.webp"
            alt="lion plushie"
            className="main-product-img"
          />

          <div className="brand-name">Banana Brand</div>
          <div className="product-title">Bubble Boy</div>
          <div className="price">$10.99</div>

          <div className="quantity-controls">
            <button>-</button>
            <div className="quantity-number">1</div>
            <button>+</button>
          </div>

          <div className="description">
            This bubbly blue boy will be your best buddy! He is super soft and
            always down to hang. Bring him home today!
          </div>

          <button className="add-to-cart">Add to Cart</button>

          <div className="similar-title">Similar Items</div>
          <div className="similar-items">
            <img
              src="./public/images/plush-lion-toy-sitting-on-a-transparent-background-png.webp"
              alt="Similar item 1"
            />
            <img
              src="./public/images/plush-lion-toy-sitting-on-a-transparent-background-png.webp"
              alt="Similar item 2"
            />
            <img
              src="./public/images/plush-lion-toy-sitting-on-a-transparent-background-png.webp"
              alt="Similar item 3"
            />
          </div>
        </div>

        <div className="main-body-container">
          <h1>Featured Items</h1>
          <div className="items">
            <div className="container">
              <img
                src="./public/images/ai-generated-small-monkey-stuffed-animal-and-its-ears-on-transparent-background-png.webp"
                alt="monkey plush"
              />
              <p> MonkeyS Plushie</p>
              <p> $12.00</p>
            </div>

            <div className="container">
              <img
                src="./public/images/ai-generated-small-monkey-stuffed-animal-and-its-ears-on-transparent-background-png.webp"
                alt="monkey plush"
              />
              <p> MonkeyS Plushie</p>
              <p> $12.00</p>
            </div>

            <div className="container">
              <img
                src="./public/images/ai-generated-small-monkey-stuffed-animal-and-its-ears-on-transparent-background-png.webp"
                alt="monkey plush"
              />
              <p> MonkeyS Plushie</p>
              <p> $12.00</p>
            </div>

            <div className="container">
              <img
                src="./public/images/ai-generated-small-monkey-stuffed-animal-and-its-ears-on-transparent-background-png.webp"
                alt="monkey plush"
              />
              <p> MonkeyS Plushie</p>
              <p> $12.00</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
