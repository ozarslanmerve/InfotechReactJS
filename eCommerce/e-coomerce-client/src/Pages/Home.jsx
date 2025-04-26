function  Home(){
    return(
        <>
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {/* {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={`/placeholder-images/${product.image}`} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                // <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              {/* </div>
            ))} */}
          </div>
        </section>
        </>
    )
}
export default Home;