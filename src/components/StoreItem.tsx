import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}: StoreItemProps) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
    return <Card className="h-100">
        <Card.Img variant="top" src={imgUrl} height="500rem" style={{objectFit: "cover"}}/>
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex 
            justify-content-between 
            align-items-baseline 
            mb-3">
                <span className="fs-2">{name}</span>
                <span className="ms-2">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto d-flex flex-column">
                {quantity === 0 
                    ? (<Button className="btn-primary" onClick={() => increaseCartQuantity(id)}>+ Add to Cart</Button>) 
                    : (<div className="d-flex justify-content-center flex-column align-items-center" style={{gap: ".5rem"}}>
                            <div className="d-flex justify-content-center align-item-center" 
                            style={{gap: ".5rem"}}>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className="fs-2">
                                        {quantity}
                                    </span>
                                    in Cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button className="btn-danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                        </div>)
                }
            </div>
        </Card.Body>
    </Card>
}