import { useProductUser } from "../stores/useProductUser";

const Product = () => {

    const products = useProductUser((state) => state.products);
    const { addProduct, deleteAllProduct, deleteProduct } = useProductUser()

    return (
        <>
            <div className="product">   
                    <section>   
                        <h1>Product Name: {products[0] ? products[0].name : 'product is not exsist'}</h1>
                        <p>Product Price: {products[0] ? products[0].price : 'product is not exsist'}</p>
                        <span>Product ID: {products[0] ? products[0].id : 'product is not exsist'}</span>
                    </section>
                <div className="product-action">
                    <button onClick={addProduct}>Add Product</button>
                    <button onClick={deleteAllProduct}>Delete Product</button>
                </div>
            </div>
            <div className="products">
                {products?.map(product => (
                    <div key={product.id}>
                        <section>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.id}</p>
                        </section>
                        <button onClick={() => { deleteProduct(product.id) }} >delete Product</button>
                    </div>
                ))}
            </div>
        </>


    )
}
export default Product