const Product = (props) => {
    const {id , productName , productImage , price} = props.data
    return (
        <div className="col-3">
            <img src={props.data.productImage} className="w-100"/>
            <h5>{productName}</h5>
            <p>price: {price}$</p>
            <button className="btn btn-info">Add Cart</button>  
            <spcae className="mx-1">0</spcae>
            <button className="btn btn-info">-</button>  
        </div>
    )
}

export default Product