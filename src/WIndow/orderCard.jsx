const OrderCard = props => {
    const {title, imageUrl, price} = props

    return(
        <div>
            <div>
                <figure>
                    <img src={imageUrl} alt={title} />
                </figure>
                <div>
                <h1>{title}</h1>
                <h2>{price}</h2>
                </div>
            </div>
        </div>
    )
}

export { OrderCard }
