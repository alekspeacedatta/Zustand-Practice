import { useProductStore } from "../stores/useProductStore"


const Product = () => {

    const products = useProductStore((state) => state.products);
    const { addProduct, deleteAllProduct, deleteProduct } = useProductStore()


    return (
        <>
            <div className="product">   
                    {/* {products && products.length > 0 ? (
                        <section>
                            <h1>Product Name: {products[0].name}</h1>
                            <p>Product Price: {products[0].price}</p>
                            <span>Product ID: {products[0].id}</span>
                        </section>
                    ) : (
                        <section>
                            <h1>Product Name: product is not exist</h1>
                            <p>Product Price: product is not exist</p>
                            <span>Product ID: product is not exist</span>
                        </section>
                    )} */}
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