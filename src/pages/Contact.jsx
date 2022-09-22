import React from 'react'

const Contact = () => {
  return (
    <div>
        <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" />

            <input type="submit" value="submit" />

        </form>
    </div>
  )
}

export default Contact