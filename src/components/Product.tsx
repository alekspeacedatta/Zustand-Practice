import { useProductUser } from "../stores/useProductUser";

const Product = () => {

    const products = useProductUser((state) => state.products);
    const productsQuantity = useProductUser((state) => state.products.length)
    const { addProduct, deleteAllProduct, deleteProduct } = useProductUser()

    return (
        <>
            <div className="product-info">   
                    <section>   
                        <h1>Product Name: {products[0] ? products[0].name : 'product is not exsist'}</h1>
                        <p>Product Price: {products[0] ? products[0].price : 'product is not exsist'}</p>
                        <span>Product ID: {products[0] ? products[0].id : 'product is not exsist'}</span>
                    </section>
                <div className="product-action">
                    <button onClick={addProduct}>Add Product</button>
                    <button onClick={deleteAllProduct}>Delete Product</button>
                </div>
                <p>Products Quantity: {productsQuantity}</p>
                <div className="products-container">
                    {products?.map(product => (
                        <div key={product.id} className="product">
                            <section>
                                <p>Product Name: {product.name}</p>
                                <p>Product Price: ${product.price}</p>
                                <p>Product ID: {product.id}</p>
                            </section>
                            <button onClick={() => { deleteProduct(product.id) }} >delete Product</button>
                        </div>
                    ))}
                </div>
            </div>
        </>


    )
}
export default Product