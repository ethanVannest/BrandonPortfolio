import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='contactHeaderDiv'>
                <div className='left'></div>
                    <h1 className='connectHeader'>Connect
                    </h1>
                <div className='right'></div>
            </div>
        <div className='contactDiv'>
            <form>
            
            <input placeholder='Name' type="text" name="user_name" />
            
            <input placeholder='Email' type="email" name="user_email" />

            <textarea name="message" placeholder='Please reach out with any ambitious projects, questions, ideas, or concerns!' />
            <input type="submit" value="Send" />
            </form>
          </div>
    </div>
  )
}

export default Contact