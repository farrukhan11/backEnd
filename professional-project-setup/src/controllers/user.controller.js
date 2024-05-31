  import User from '../models/user.model.js'
  import uploadOnCLoudinary from '../utils/cloudinary.js'
  const registerUser = async (req, res, next) => {
    try {
      // Asynchronous operations (if any) would go here
      // get user details from front end
      const { fullName, username, email, password, role } = req.body
      console.log('email' + email)

      // validation of user details
      if (!fullName || !username || !email || !password || !role) {
        return res.status(400).json({
          message: 'Please provide all the details',
        })
      }
      //or
      // if ([fullName, username, email, password, role].some(value => value?.trim() === '')) {
      //   return res.status(400).json({
      //     message: 'Please provide all the details',
      //   });
      // }

      // check if user already exists in database - check with username and email

      const existedUser = await User.findOne(
        {
          $or: [{ username }, { email }]
        }
      )

      if (existedUser) {
        return res.status(400).json({
          message: 'User with email or username already exists',
        })
      }

      // check for profile image
      const profileImgPath = req.files?.profileImage[0]?.path
      const coverImgPath = req.files?.coverImage[0]?.path

      if (!profileImgPath) {
        return res.status(400).json({
          message: 'Please provide profile image',
        })
      }

      //uploading to cloudinary server
      const profileImg = await uploadOnCLoudinary(profileImgPath)
      const coverImg = await uploadOnCLoudinary(coverImgPath)

      if (!profileImg || !coverImg) {
        return res.status(400).json({
          message: 'Please provide valid profile image',
        })
      }

      // create a new user in database
      const user = await User.create({
        fullName,
        username: username.toLowerCase(),
        email,
        password,
        role,
        profileImage: profileImg.url,
        coverImage: coverImg?.url || '',
      })

      //remove password and refresh token from the response
      // check if user is created
      const userCreated = await User.findById(user._id).select('-password -refreshToken')
      if (!userCreated) {
        return res.status(400).json({
          message: 'User not created',
        })
      }

      //return response
      return res.status(201).json({
        message: 'User created successfully',
        user: userCreated,
      })

    } catch (error) {
      // If an error occurs during the execution of asynchronous operations
      // Handle the error and send an appropriate reesponse
      console.error(error) // Log the error for debugging purposes
      res.status(500).json({
        message: 'An error occurred while registering user',
      })
    }
  }

  export default registerUser
