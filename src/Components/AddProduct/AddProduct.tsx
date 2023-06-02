// // import React, { useState } from 'react';
// import axios from 'axios'
// import { useState } from 'react'

// const ProductForm = () => {
//   const [category, setCategory] = useState('')
//   const [subcategory, setSubcategory] = useState('')
//   const [name, setName] = useState('')
//   const [slugname, setSlugname] = useState('')
//   const [price, setPrice] = useState(0)
//   const [quantity, setQuantity] = useState(0)
//   const [brand, setBrand] = useState('')
//   const [description, setDescription] = useState('')
//   const [thumbnail, setThumbnail] = useState<File | null>(null)
//   const [images, setImages] = useState<FileList | null>(null)

//   const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files
//     if (files?.length) {
//       setImages(files)
//     }
//   }

//   const handleSubmit = async (event: FormEvent) => {
//     event.preventDefault()

//     const formData = new FormData()
//     formData.append('category', category)
//     formData.append('subcategory', subcategory)
//     formData.append('name', name)
//     formData.append('slugname', slugname)
//     formData.append('price', price.toString())
//     formData.append('quantity', quantity.toString())
//     formData.append('brand', brand)
//     formData.append('description', description)
//     if (thumbnail) {
//       formData.append('thumbnail', thumbnail)
//     }
//     if (images?.length) {
//       Array.from(images).forEach(file => {
//         formData.append('images', file)
//       })
//     }

//     try {
//       const response = await axios.post('/api/products', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//       console.log(response.data)
//       // Product is successfully posted
//       // You can perform any additional actions or show a success message here
//     } catch (error) {
//       // Handle error response
//       console.log('Failed to create product:', error.response.data.error)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Category:</label>
//         <input
//           type="text"
//           value={category}
//           onChange={e => setCategory(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Subcategory:</label>
//         <input
//           type="text"
//           value={subcategory}
//           onChange={e => setSubcategory(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={e => setName(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Slugname:</label>
//         <input
//           type="text"
//           value={slugname}
//           onChange={e => setSlugname(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Price:</label>
//         <input
//           type="number"
//           value={price}
//           onChange={e => setPrice(Number(e.target.value))}
//         />
//       </div>
//       <div>
//         <label>Quantity:</label>
//         <input
//           type="number"
//           value={quantity}
//           onChange={e => setQuantity(Number(e.target.value))}
//         />
//       </div>
//       <div>
//         <label>Brand:</label>
//         <input
//           type="text"
//           value={brand}
//           onChange={e => setBrand(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Description:</label>
//         <textarea
//           value={description}
//           onChange={e => setDescription(e.target.value)}></textarea>
//       </div>
//       <div>
//         <label>Thumbnail:</label>
//         <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
//       </div>
//       <div>
//         <label>Images:</label>
//         <input type="file" multiple onChange={handleImageChange} />
//       </div>
//       <input type="submit" />
//     </form>
//   )
// }
// export default ProductForm
