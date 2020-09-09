import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategory } from '../services/Api'
export default function Menu() {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const result = await getCategory();
      setCategory(result.data.data)
    }

    fetchCategories();
  }, []);
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <nav>
          <div id="menu" className="collapse navbar-collapse">
            <ul>
              {categories.map(el => (
                <li key={el._id} className="menu-item"><Link to={`/category/${el._id}`}>{el.name}</Link></li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
