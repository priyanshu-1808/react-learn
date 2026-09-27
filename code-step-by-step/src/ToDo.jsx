function ToDo() {
    function callFun() {
        alert("Function Called")
    }
    return (

        <div>


            <h1>Anil Sidhu Todos</h1>
            <img
                src="https://www.thoughtco.com/thmb/rip9NU8E4ERKbO7hBjwPc98UtfM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lion-805084_1920-c62a558….jpg"
                alt="Anil Sidhu"
                class="photo"
            />
            <ul>
                <li>invent new traffic light</li>
                <li>rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={callFun}> Click ME</button>

        </div>
    )
}

export default ToDo