import { Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}: StoreItemProps) {
    const quantity = 0
    return <Card className="h-100">
        <Card.Img variant="top" src={imgUrl} height="400rem" style={{objectFit: "cover"}}/>
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex 
            justify-content-between 
            align-items-baseline 
            mb-3">
                <span className="fs-2">{name}</span>
                <span className="ms-2">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto d-flex flex-column">
                {quantity === 0 ? 
                    (<Button className="btn-primary">Add to Cart</Button>) 
                    : (<div className="d-flex justify-content-center">
                            <Button>-</Button>
                            <span>{quantity}</span>
                            <Button>+</Button>
                    </div>
                    <Button className="">Remove</Button>)}
            </div>
        </Card.Body>
    </Card>
}