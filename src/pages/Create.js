import { useState } from "react"
import { Link, Links, Router, useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"

const Create = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [idea, setIdea] = useState('')
  const [strategy, setstrategy] = useState('')
  const [camp, setCamp] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !method || !rating || !idea || !strategy || !camp) {
      setFormError('Please fill in all the fields correctly.')
      return
    }

    const { data, error } = await supabase
      .from('smoothies')
      .insert([{ title, idea, strategy, camp,  method, rating,  }])

    if (error) {
      console.log(error)
      setFormError('Please fill in all the fields correctly.')
    }
    if (data) {
      console.log(data)
      setFormError(null)
      navigate("/second")
    }
  }

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>

      <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
     
     <label htmlFor="idea">Idea:</label>
        <input 
          type="text" 
          id="idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea 
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />


        <label htmlFor="method">strategy:</label>
        <textarea 
          id="strategy"
          value={strategy}
          onChange={(e) => setstrategy(e.target.value)}
        />

        <label htmlFor="camp">Campaign Area:</label>
        <input 
          type="text" 
          id="camp"
          value={camp}
          onChange={(e) => setCamp(e.target.value)}
        />

        <label htmlFor="rating">Rate your Idea:</label>
        <input 
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
       
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Smoothie Recipe</button>
       
        {formError && <p className="error">{formError}</p>}
      </form>

<Link to="/">
      <div className="text-center">
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Click Here To Go Home Page!
</span>
</button>
</div>
</Link>
    </div>
  )
}

export default Create