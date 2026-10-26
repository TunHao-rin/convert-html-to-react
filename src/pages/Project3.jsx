import { useState } from "react";
import "../styles/project3.css";

export default function Project3() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page project3">
      <div className="page-inner">
        <div className="wrap">
                <div className="info">
                <div className="icon">
                    <img src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
                     alt="Manchester United Logo" />
                </div>
                    <h1>Order Ahead</h1>
                    <p>Get your favorite Manchester United merchandise delivered to your doorstep or ready for pickup at our store. Fill out the form to place your order and enjoy exclusive offers!</p>
                </div>
                <form className="form-panel" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" required />
                    </div>

                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="john.doe@example.com" required />
                    </div>
                    <div className="field">
                        <label htmlFor="method">Pickup or Delivery?</label>
                        <select id="method" name="method">
                            <option value="pickup">Pickup</option>
                            <option value="delivery">Delivery</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Favorite Merchandise</label>
                        <div className="radio-group">
                            <label><input type="radio" name="merchandise" value="jersey" defaultChecked /> Jersey</label>
                            <label><input type="radio" name="merchandise" value="scarf" /> Scarf</label>
                            <label><input type="radio" name="merchandise" value="hat" /> Hat</label>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="notes">Notes (optional)</label>
                        <textarea id="notes" name="notes" placeholder="Any special requests or instructions?"></textarea>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="newsletter" /> Sign me up for the weekly newsletter</label>
                    </div>
                    <button type="submit">Place Order</button>
        {sent && <p className="sent">Order placed! Thank you.</p>}
                </form>
            </div>
      </div>
    </div>
  );
}
