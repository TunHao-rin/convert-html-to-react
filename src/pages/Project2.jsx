import "../styles/project2.css";

export default function Project2() {
  return (
    <div className="page project2">
      <div className="page-inner">
        <header>
            <div className="logo">
                <img src="/blt2bc53adff89a0291.webp" alt="Manchester United Logo" />
                Manchester United Shop
            </div>
            <a href="https://www.manutd.com/en/shop" target="_blank">Visit Official Store</a>
            <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." target="_blank">Learn More</a>
            <a href="https://www.manutd.com/en" target="_blank">Official Website</a>
        </header>
        <nav className="jersey">
            <h1>Jerseys</h1>
            <p>Discover our latest collection of Manchester United jerseys, available in various sizes and styles.</p>
            <div className="product-grid">
                <div className="product-card">
                    <img src="/mat-truoc-ao-bong-da-manchester-united-san-nha-26-27-player-ka6868_8385f1998b084eff858db0a2764e4504_1024x1024.jpg.webp" alt="Home Jersey 1" />
                    <h3>Home Jersey 1</h3>
                    <p>$89.99</p>
                </div>
                <div className="product-card">
                    <img src="/89_8c9a86f6bf47425fae13d9a0593a6317_large.jpg.webp" alt="Away Jersey 2" />
                    <h3>Away Jersey 2</h3>
                    <p>$79.99</p>
                </div>
                {/* Add more product cards as needed */}
            </div>
        </nav>
        <section className="Trainingwear">
            <h2>Trainingwear</h2>
            <p>Explore our range of trainingwear, including jerseys, shorts, and more.</p>
            <div className="product-grid">
                <div className="product-card">
                    <img src="/37454708_l.jpg.avif" alt="Training Jersey 1" />
                    <h3>Training Jersey 1</h3>
                    <p>$49.99</p>
                </div>
                <div className="product-card">
                    <img src="/37965708_xxl.jpg.avif" alt="Training Jersey 2" />
                    <h3>Training Jersey 2</h3>
                    <p>$59.99</p>
                </div>
                {/* Add more product cards as needed */}
            </div>
        </section>
        <footer>
            <p>&copy; 2024 Manchester United. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
