const registerUser = async (req, res, next) => {
  try {
    // Your asynchronous operations (if any) would go here
    res.status(200).json({
      message: 'success',
    })
    console.log('User registered successfully')
  } catch (error) {
    // If an error occurs during the execution of asynchronous operations
    // Handle the error and send an appropriate response
    console.error(error) // Log the error for debugging purposes
    res.status(500).json({
      message: 'An error occurred while registering user',
    })
  }
}

export default registerUser
