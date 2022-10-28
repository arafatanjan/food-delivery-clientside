import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';




const Dashboard = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const p = user?.email
    // console.log(p)
    const [singleorder, setSingleorder] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        if (user?.email) {
            // fetch(`http://localhost:5000/orders/${user?.email}`)
            fetch(`https://cryptic-tor-20048.herokuapp.com/orders/${user?.email}`)
                .then(res => res.json())
                .then(data => setSingleorder(data))
        }

    }, [user?.email])
    // console.log(singleorder)

    // delete an user
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://cryptic-tor-20048.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
                headers: { "content-type": "application/json" },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        setIsDeleted(true);
                        const remainingUsers = singleorder.filter(pd => pd._id !== id)
                        setSingleorder(remainingUsers);
                    } else {
                        setIsDeleted(false);
                    }
                });
        }

    }
    // const handleAddToCart = (index, id) => {
    //     const data = singleorder[index];
    //     // data.status = 'updated';
    //     console.log(singleorder[index])
    //     const url = `http://localhost:5000/orders/${id}`
    //     console.log(url)
    //     // useEffect(() => {
    //     fetch(`http://localhost:5000/orders/update/${id}`, {
    //         //  method: "POST",
    //         //  headers: { 'content-type': 'application/json' },
    //         // body: JSON.stringify(data),
    //         method: "PUT",
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(data),
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         })
    //     // }, [id])
    // }
    return (
        <div>
            <h1>Your Order: {singleorder?.length}</h1>
            <ul>
                {
                    singleorder.map((pd, index) => <li key={pd._id}>{pd.a}::{pd.b}
                        {/* <Link to={`/users/update/${user._id}`}> <button>update</button></Link> */}
                        <br />
                        <button>{singleorder[index]?.status}</button>

                        {<button onClick={() => handleDelete(pd._id)}>X</button>}

                    </li>)
                }
            </ul>
        </div>
    );
};

export default Dashboard;