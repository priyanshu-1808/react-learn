


function User({user}) {
    
    return(
        <div>
            <hr />
         <h1>Name: {user.name}</h1>
         <h2>Age: {user.age}</h2>
         <h2>Email: {user.email}</h2>
        </div>
    )
}

export default User