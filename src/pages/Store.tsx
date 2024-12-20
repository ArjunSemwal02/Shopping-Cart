import { Row, Col } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"

export function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row xs={3} ms={2} ls={1} className="g-3">
                { storeItems.map( item => (<Col key={item.id}><StoreItem {...item}/></Col>) ) }
            </Row>
        </>
    )
}