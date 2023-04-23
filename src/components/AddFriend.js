import React from 'react';

const AddFriend = ()=> {
    return (
        <div>
            <h2>AdFriend</h2>
            <form>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input id="username"/>
                </div>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input id='email'/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;