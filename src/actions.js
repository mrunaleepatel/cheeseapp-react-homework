import { redirect } from "react-router-dom";
import url from "./url";

// Create Action for Creating Todos
export const createAction = async({request}) => {
    const formData = await request.formData();

    const newCheese = {
        name: formData.get('name'),
        origin_country: formData.get('origin_country'),
        type: formData.get('type'),
    }

    await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCheese)
    })

    return redirect("/")

}

// Create Update Action for Updating Todos
export const updateAction = async({request, params}) => {
    const id = params.id
    const formData = await request.formData();
    const updatedCheese = {
        name: formData.get('name'),
        origin_country: formData.get('origin_country'),
        type: formData.get('type'),
    }

    await fetch(url, + id, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCheese)
    })

    return redirect(`/post/${id}`)

}

// Create Delete Action for deleting cheeses
export const deleteAction = async({params}) => {

    const id = params.id
    await fetch(url + id, {
        method: "delete"
    })

    return redirect("/")
}