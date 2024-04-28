import React from 'react';
import Container from './../container/Container';
import axios from 'axios';
import Constants from '../Constants';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
 import Api from '../components/Api';
const Items = () => {



const navigate = useNavigate()
const http = Api();

//  const handleAddItems= (e) => {


//     e.preventDefault();

// const name =e.target.name.value;
// const description =e.target.description.value;
// const image =e.target.image.files[0];
// const qty =e.target.qty.value;

// // console.log(name); 
// // http.post('/items',{name:name}).then(res=>{
// //     console.log(res);
// // })

// const additem = {
//     name,
//     description,
//     image,
//     qty,
//     // price,
//     // seat,
//     // size,
//     // isFeatured,
//   };
//   console.log(additem);

// //   --------------
// // axios.post(`${Constants.BASE_URL}/items`,
// //   additem 
// //   )
// //                 .then(data=>{ 
// //                console.log(data);
// //                 if(data.insertedId){   
// //                     toast.success('New items Added successfully');      
// //                       }
                   
// //             }).
// //             catch(function (error) {
// //                 toast.error(error.message); 
// //                 console.log(error); 
// //          });
// // ----------------------
// fetch(`${Constants.BASE_URL}/items`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(additem),
// })
// .then(res => res.json())
// .then(data => {
//     console.log(data);
//     if (data.insertedId) {
//         toast.success('New items added successfully');
//     }
// })
// .catch(error => {
//     toast.error(error.message); 
// console.log(error);
//     // Handle error here, such as displaying an error message to the user
// }
// );
 


// // ================
// // const res =   axios.post(`${Constants.BASE_URL}/items`,name,{
// //     headers: {'Content-Type': "multipart/form-data"},
// // });
// // if(res){
// //     console.log(res);
// //     toast.success(res.message)
// //     setTimeout(() =>{navigate('/dashboard');
// // },1500);
// // }
//  }

const handleAddItems = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const imagelink = e.target.imagelink.value;
    const description = e.target.description.value;
    const image = e.target.image.files[0]; // Get the first file from the input
    const qty = e.target.qty.value;

    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('imagelink', imagelink);
    formData.append('image', image);
    formData.append('qty', qty);

    try {
        const response = await fetch(`${Constants.BASE_URL}/items`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            // Handle non-successful response
            throw new Error('Failed to add items');
        }

        const data = await response.json();
        console.log(data);
        if (data.data.id) {
            toast.success('New items added successfully');
        }
    } catch (error) {
        // Handle fetch error
        console.error(error);
        toast.error('Error adding items');
    }
};

    return (
        <div>

            <Container>
            <div className="card   relative   bg-base-100 shadow-xl">
  <div className="card-body relative ">
    <h2 className="card-title"> Add Items </h2>
    <p> </p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
          

            <div className='w-[40rem] h-[20rem]'>
            <form onSubmit={handleAddItems} className="card-body">
                <div className="grid grid-cols-2 gap-2">

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input type="name" name='name' placeholder="Enter Items name"
           className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="name" name='description' placeholder="Enter Item Description"
           className="input input-bordered" required />
        </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
    <div className="form-control">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input type="text" name='imagelink' placeholder="Enter Items Image Links"
           className="input input-bordered"    />
        </div>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="file" name='image' placeholder="Enter Items Image"
           className="input input-bordered"    />
        </div>

                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="form-control">
          <label className="label">
            <span className="label-text">Which Inventory</span>
          </label>
          <input type="name" name='qty'placeholder="Enter Quantity" className="input input-bordered" required />
           
        </div>   
                    <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="name" name='qty'placeholder="Enter Quantity" className="input input-bordered" required />
           
        </div>   
                </div>
     
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Items</button>
        </div>
      </form>
            </div>
            </Container>
        </div>
    );
};

export default Items;