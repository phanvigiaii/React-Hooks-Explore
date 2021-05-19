import { useEffect, useRef, useState } from "react";
import "./App.css";
import BoxColor from "./components/BoxColor";
import Pagination from "./components/Pagination";
import ProductList from "./components/ProductList";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import SearchForm from "./components/SearchForm";
import queryString from "query-string";

const faker = require("faker");

function App() {
    // State of Box Color
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem("color") || "deeppink";
        return initColor;
    });

    // State of ToDoList
    const [todos, setTodos] = useState(() => {
        return [
            {
                id: faker.datatype.uuid(),
                title: "Learn ReactJS Hooks",
            },
            {
                id: faker.datatype.uuid(),
                title: "Learn Advance Javascript",
            },
        ];
    });

    // State of ProductList
    const [productList, setProductList] = useState([]);

    // State of Pagination
    const [pagination, setPagination] = useState({});

    // State of filters
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
    });
    // Event of productList
    useEffect(() => {
        async function getProductList() {
            const queryParams = queryString.stringify(filters);
            const productURL = `http://js-mock-api.herokuapp.com/api/products?${queryParams}`;
            const productRaw = await fetch(productURL);
            const productJSON = await productRaw.json();
            const { data, pagination } = productJSON;
            setProductList(data);
            setPagination(pagination);
        }
        getProductList();
    }, [filters]);

    // Event of Box Color
    function handleBoxClick() {
        const colors = ["deeppink", "red", "blue", "yellow", "black"];
        const index = Math.trunc(Math.random() * 5);
        const color = colors[index];
        localStorage.setItem("color", color);
        setColor(color);
    }

    // Event of ToDoList
    function handleToDoClick(todo) {
        const index = todos.findIndex((x) => x.id === todo.id);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    // Event of ToDoForm
    function handleToDoFormSubmit(value) {
        const newTodo = [
            ...todos,
            {
                id: faker.datatype.uuid(),
                title: value,
            },
        ];
        setTodos(newTodo);
    }

    // Event of ProductList
    function handlePageChange(newPage) {
        console.log(newPage);
        setFilters({
            ...filters,
            _page: newPage,
        });
    }

    // Event of SearchForm
    function handleSearchChange({ searchString }) {
        setFilters({
            ...filters,
            _page: 1,
            name_like: searchString,
        });
    }

    return (
        <div className="App" style={{ textAlign: "center" }}>
            <h1>Hello ReactJS</h1>
            <BoxColor color={color} onBoxClick={handleBoxClick} />
            <ToDoForm onSubmit={handleToDoFormSubmit} />
            <ToDoList todos={todos} onToDoClick={handleToDoClick} />
            <SearchForm onSearchChange={handleSearchChange} />
            <ProductList productList={productList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default App;
