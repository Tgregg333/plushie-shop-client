import { useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "Monkey Plushie",
    price: "$12.00",
    image:
      "/images/ai-generated-small-monkey-stuffed-animal-and-its-ears-on-transparent-background-png.webp",
  },
  {
    id: 2,
    name: "Tiger Plushie",
    price: "$14.00",
    image:
      "/images/plush-lion-toy-sitting-on-a-transparent-background-png.webp",
  },
];

function Cart() {
  const [items, setItems] = useState(initialCart);

  const [newItem, setNewItem] = useState({});
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!newItem.name || !newItem.price || !newItem.image) return;

    const newPlushie = {
      ...newItem,
      id: Date.now(),
    };

    setItems([...items, newPlushie]);
    setNewItem({});
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setNewItem({
      name: item.name,
      price: item.price,
      image: item.image,
    });
  };

  const handleSave = () => {
    setItems(
      items.map((item) => (item.id === editId ? { ...item, ...newItem } : item))
    );
    setEditId(null);
    setNewItem({ name: "", price: "", image: "" });
  };

  return (
    <main>
      <section className="product-section">
        <img
          src="/images/plush-lion-toy-sitting-on-a-transparent-background-png.webp"
          alt="lion plushie"
          className="main-product-img"
        />
        <section className="brand-name">Banana Brand</section>
        <section className="product-title">Bubble Boy</section>
        <section className="price">$10.99</section>

        <section className="quantity-controls">
          <button>-</button>
          <div className="quantity-number">1</div>
          <button>+</button>
        </section>

        <section className="description">
          This bubbly blue boy will be your best buddy! He is super soft and
          always down to hang. Bring him home today!
        </section>

        <button className="add-to-cart">Add to Cart</button>

        {/* <h2>Related Items</h2>
        <section className="similar-items">
          <img
            src="/images/plush-lion-toy-sitting-on-a-transparent-background-png.webp"
            alt="Similar item 1"
          />
          <img
            src="/images/plush-lion-toy-sitting-on-a-transparent-background-png.webp"
            alt="Similar item 2"
          />
          <img
            src="/images/plush-lion-toy-sitting-on-a-transparent-background-png.webp"
            alt="Similar item 3"
          />
        </section> */}
      </section>

      <section className="main-body-container">
        <h1>Featured Items</h1>
        <section className="items">
          {items.map((item) => (
            <div className="container" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
        </section>

        {/* Add/Edit Form */}
        <div className="form-section">
          <h3>{editId ? "Edit Plushie" : "Add New Plushie"}</h3>
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newItem.image}
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
          />
          <button onClick={editId ? handleSave : handleAdd}>
            {editId ? "Save" : "Add"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default Cart;
