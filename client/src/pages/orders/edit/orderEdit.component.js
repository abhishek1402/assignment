import { useEffect, useState } from "react"
import { dateFormatter } from "../../../util/dateConverter";
import {

    useParams
} from "react-router-dom";
import { Button, Input } from "../../../component";
import { editForm } from "./editForm";
import { get, put } from "../../../config/fetchConfig";
import { flattenObject, convertToNestedObj } from "../../../util/objUtil";
export const OrderEdit = () => {
    const [orderDetail, setOrderDetail] = useState({})
    const [isEditMode, setIsEditMode] = useState(false)
    const [editFormState, setEditFormState] = useState({ ...editForm })


    let { orderId } = useParams();

    useEffect(async () => {
        let order = await get(`orders/${orderId}`)
        setOrderDetail(flattenObject(order));
    }, [])

    useEffect(async () => {
        if (orderDetail && Object.keys(orderDetail).length) {
            let form = { ...editFormState };
            Object.keys(editForm).map(ele => {
                if (ele == "bookingDate") {
                    form[ele].placeholder = dateFormatter(orderDetail[ele]);
                    form[ele].value = dateFormatter(orderDetail[ele]);
                }
                else {
                    form[ele].placeholder = orderDetail[ele];
                    form[ele].value = orderDetail[ele];
                }
            })
            setEditFormState({ ...form })
        }
    }, [orderDetail])

    const onInputChange = (ele, val) => {
        if (val) {
            setEditFormState({ ...editFormState, [ele]: { ...editFormState[ele], value: val } });
        }
    }

    const onUpdate = async () => {
        let obj = convertToNestedObj(editFormState)
        const updated = await put(`orders/${orderId}`, obj)
        if (updated) {
            alert("updated succefully")
        }
    }
    return (
        <>
            <h2>Order Detail</h2>
            <div className={"text-right"}>

                <Button text={"Edit"} click={() => { setIsEditMode(true) }} classes={"btn-success "}></Button>
            </div>

            <div className={"text-left"}>

                {Object.keys(editFormState).map(ele => {
                    let field = editFormState[ele]
                    return <Input placeholder={field.placeholder} change={(val) => onInputChange(ele, val)} label={field.label} disabled={!isEditMode}></Input>
                })}

                {isEditMode ?
                    <Button text={"Submit"} click={() => { onUpdate() }} classes={"btn-success btn-block"} ></Button> : ""
                }

            </div>
        </>
    )
}