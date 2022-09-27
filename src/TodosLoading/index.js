import React from "react"
import image from '../images/loading.png'
import './TodosLoading.css'

function TodosLoading() {
    return (
        <div className="TodoLoading">
            <img src={image} alt="loading" />
        </div>
    )
}

export { TodosLoading }