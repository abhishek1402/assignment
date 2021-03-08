import { useEffect, useState } from "react"
import { dateFormatter } from "../../../util/dateConverter";
import { useHistory } from "react-router-dom";
import { get } from "../../../config/fetchConfig";

const dataFields = [
    "title", "bookingDate", "address", "customer"
]
const tableHeader = [
    "Title", "Booking Date", "Address", "Customer"
]
export const OrderView = () => {
    const [orders, setOrders] = useState({})
    const history = useHistory();

    useEffect(async () => {
        let order = await get('orders')
        setOrders(order);
    }, [])

    const getFieldValue = (field, element) => {
        switch (field) {
            case ("address"): return orders[element][field]?.street;
            case ("customer"): return orders[element][field]?.name;
            case ("bookingDate"): return dateFormatter(orders[element][field]);
            default: return orders[element][field]
        }
    }
    return (
        <>
            <h2>Order List</h2>
            <div className="justify-content-center">

                <table class="table table-striped table-bordered">
                    {tableHeader.map(ele => <th>{ele}</th>)}
                    <tbody>
                        {
                            Object.keys(orders).map(ele => {
                                if (orders[ele].title) {
                                    return (
                                        <tr >
                                            {dataFields.map(field => {
                                                return (
                                                    <td onClick={(e) => {
                                                        history.push(`order/${ele}`);
                                                    }}>
                                                        {getFieldValue(field, ele)}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                }
                            })

                        }
                    </tbody>

                </table>

            </div>
        </>
    )
}