const port=4000;
const express= require("express");
const app= express();
const nodemailer = require('nodemailer');
const mongoose= require("mongoose");
const jwt= require("jsonwebtoken");
const multer= require("multer");
const path= require("path");
const bodyParser = require('body-parser');
const cors= require("cors");
const { title } = require("process");
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of rounds for salt generation
const fs= require('fs');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());



//Database connection
mongoose.connect("mongodb://localhost:27017/Zen_Soul",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


//API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})


// Image storage engine

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/images');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload= multer({storage:storage});


//Creating upload endpoint for images
app.use('/images', express.static(path.join(__dirname, 'upload/images')));

app.post("/upload", upload.single('blog'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});


// schema for creating blogs

const Blogs =mongoose.model('Blogs',{
    id:{
        type: Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        default:"Uncategorized",
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

// Add Blogs

app.post('/addblogs', async(req,res)=>{
    let blog=await Blogs.find({});
    let id;
    if(blog.length>0)
        {
            let last_blogs_array=blog.slice(-1);
            let last_blogs= last_blogs_array[0]; 
            id=last_blogs.id+1;
        } 
        else
        {
            id=1;
        }
    const blogs= new Blogs({
        id:id,
        title:req.body.title,
        image:req.body.image,
        category:req.body.category,
        description:req.body.description,
    });
    console.log(blogs);
    await blogs.save();
    console.log("Saved");
    res.json({
        success:true,
        title:req.body.title,
    })
})

// Delete Blogs

app.post("/removeblogs", async (req,res)=>{
    await Blogs.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        title:req.body.title
    })
})

// API for getting all blogs

app.get('/allblogs',async(req,res)=>{
    let blog= await Blogs.find({});
    console.log("All Blogs Fetched");
    res.send(blog);
})


// API for fetching a single blog by ID
app.get('/blog/:id', async (req, res) => {
    const blog = await Blogs.findOne({ id: req.params.id });
    if (blog) {
        res.json(blog);
    } else {
        res.status(404).json({ error: "Blog not found" });
    }
});


// Edit Blog
app.post("/editblog", upload.single('image'), async (req, res) => {
    const { id, title, description, category } = req.body;
    const image = req.file ? `http://localhost:${port}/images/${req.file.filename}` : req.body.image;

    try {
        const updatedBlog = await Blogs.findOneAndUpdate(
            { id: id },
            { title, description, category, image },
            { new: true } // return the updated document
        );

        if (!updatedBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        res.json({
            success: true,
            blog: updatedBlog
        });
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});



// Podcast schema and model
const podcastSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['video'],
        required: true,
    },
    youtubeLink: {
        type: String,
        required:true,
    },
    duration: {
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Podcast = mongoose.model('Podcast', podcastSchema);

// Endpoint to add a podcast (YouTube link only)
app.post('/addpodcast', async (req, res) => {
    try {
        console.log("Received data:", req.body);
        
        let podcasts = await Podcast.find({});
        let id;
        if (podcasts.length > 0) {
            let lastPodcast = podcasts.slice(-1)[0];
            id = lastPodcast.id + 1;
        } else {
            id = 1;
        }

        const podcast = new Podcast({
            id: id,
            title: req.body.title,
            category: req.body.category,
            youtubeLink: req.body.youtubeLink,
            // Exclude these fields if not provided
        });

        await podcast.save();
        console.log("Podcast Saved");

        res.json({
            success: true,
            title: req.body.title,
        });
    } catch (error) {
        console.error("Error adding podcast:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});




// Endpoint to fetch all podcasts
app.get('/allpodcasts', async (req, res) => {
    try {
        let podcasts = await Podcast.find({});
        console.log("All Podcasts Fetched");
        res.send(podcasts);
    } catch (error) {
        console.error("Error fetching podcasts:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// Endpoint to remove a podcast
app.post("/removepodcast", async (req, res) => {
    try {
        const podcast = await Podcast.findOneAndDelete({ id: req.body.id });
        if (podcast) {
            console.log("Podcast removed");
            res.json({ success: true, title: podcast.title });
        } else {
            res.status(404).json({ success: false, message: "Podcast not found" });
        }
    } catch (error) {
        console.error("Error removing podcast:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// Endpoint to edit a podcast (YouTube link only)
app.post("/editpodcast", async (req, res) => {
    const { id, title, category, youtubeLink, description, duration, author } = req.body;

    const updateData = {
        title,
        category, // Only 'video' is allowed now
        youtubeLink,
        duration,
        author,
        description,
    };

    // Remove undefined fields from updateData
    Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);

    try {
        const updatedPodcast = await Podcast.findOneAndUpdate(
            { id: id },
            updateData,
            { new: true } // return the updated document
        );

        if (!updatedPodcast) {
            return res.status(404).json({ success: false, message: "Podcast not found" });
        }

        res.json({
            success: true,
            podcast: updatedPodcast
        });
    } catch (error) {
        console.error("Error updating podcast:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});





const meditationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Anxious', 'Stressed', 'Frustrated', 'Boredom', 'Mood Swings'], // Added "Relaxation"
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Meditation = mongoose.model('Meditation', meditationSchema);


app.post('/addMeditation', async (req, res) => {
    try {
        const { title, category, link } = req.body;

        // Validate input
        if (!title || !category || !link) {
            return res.status(400).json({ success: false, message: 'All fields are required.' });
        }

        // Get the last meditation entry to calculate the id
        let meditations = await Meditation.find({});
        let id = meditations.length > 0 ? meditations.slice(-1)[0].id + 1 : 1;

        // Check if category is valid
        const validCategories = ['Anxious', 'Stressed', 'Frustrated', 'Boredom', 'Mood Swings'];
        if (!validCategories.includes(category)) {
            return res.status(400).json({ success: false, message: 'Invalid category.' });
        }

        const newMeditation = new Meditation({ id, title, category, link });
        await newMeditation.save();

        return res.status(201).json({ success: true, message: 'Meditation added successfully' });
    } catch (error) {
        console.error('Error adding meditation:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


app.get('/allmeditations', async (req, res) => {
    try {
        const meditations = await Meditation.find({});
        res.send(meditations);
    } catch (error) {
        console.error("Error fetching meditations:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


app.post('/editmeditation', async (req, res) => {
    const { id, title, category, link } = req.body;

    const updateData = { title, category, link };

    try {
        const updatedMeditation = await Meditation.findOneAndUpdate(
            { id: id },
            updateData,
            { new: true }
        );

        if (!updatedMeditation) {
            return res.status(404).json({ success: false, message: "Meditation not found" });
        }

        res.json({ success: true, meditation: updatedMeditation });
    } catch (error) {
        console.error("Error updating meditation:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

app.post('/removemeditation', async (req, res) => {
    try {
        const meditation = await Meditation.findOneAndDelete({ id: req.body.id });
        if (meditation) {
            res.json({ success: true, title: meditation.title });
        } else {
            res.status(404).json({ success: false, message: "Meditation not found" });
        }
    } catch (error) {
        console.error("Error removing meditation:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});



//creating schema for user 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    userDataCollection: {
        type: String, // This will store the name of the user's specific collection
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

const Users = mongoose.model('Users', userSchema);

// Function to authenticate token
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, 'secret_ecom', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.get('/users/:userId', authenticateToken, async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId).select('username email'); // Adjust fields as needed

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// function authenticateToken(req, res, next) {
//     const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

//     if (!token) return res.sendStatus(401);

//     jwt.verify(token, 'secret_ecom', (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// }

// module.exports = authenticateToken;


// Define the complete schema for the user-specific collections
const userCollectionSchema = new mongoose.Schema({
    mood: String,
    affirmations: [String],
    gratitude:[String],
    date: {
        type: Date,
        required:true,
    },
    journalText: String,
    images: [String], // Array of image file paths
    audios: [String], // Array of audio file paths
    videos: [String], // Array of video file paths
});

// Set up storage for multimedia files
const multimediaStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to save files
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Serve static files from the 'uploads' directory for multimedia files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Initialize multer with storage settings
const uploads = multer({ storage: multimediaStorage });

// Create the uploads directory if it doesn't exist
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Function to dynamically create or get a user-specific model
const getUserModel = (collectionName) => {
    if (mongoose.models[collectionName]) {
        return mongoose.models[collectionName];
    }
    return mongoose.model(collectionName, userCollectionSchema);
};


// Express route for saving journal entry
app.post('/journal', uploads.fields([
    { name: 'images', maxCount: 10 },
    { name: 'audios', maxCount: 10 },
    { name: 'videos', maxCount: 10 }
]), async (req, res) => {
    console.log('Received journal entry:', req.body);
    console.log('Files received:', req.files);

    const { mood, affirmations, gratitude, journalText, userId } = req.body;
    const images = req.files['images'] || [];
    const audios = req.files['audios'] || [];
    const videos = req.files['videos'] || [];

    const imageUrls = images.map(file => `http://localhost:4000/uploads/${file.filename}`);
    const audioUrls = audios.map(file => `http://localhost:4000/uploads/${file.filename}`);
    const videoUrls = videos.map(file => `http://localhost:4000/uploads/${file.filename}`);

    try {
        // Find the user by their ID
        const user = await Users.findById(userId);
        console.log('User found:', user);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create a new journal entry
        const journalEntry = {
            mood,
            affirmations: JSON.parse(affirmations),
            gratitude: JSON.parse(gratitude),
            journalText,
            date: new Date(), // Or use req.body.date if you're passing it
            images: images.map(file => file.path),  // Saving paths of uploaded images
            audios: audios.map(file => file.path),  // Saving paths of uploaded audios
            videos: videos.map(file => file.path),  // Saving paths of uploaded videos
        };

        console.log('Journal entry to be saved:', journalEntry);


         // Get the user's specific data model
         const userDataModel = getUserModel(user.userDataCollection);
        
         // Save the journal entry using the user's specific model
         await userDataModel.create(journalEntry);
 

        
       // Send a single response after the journal entry is successfully saved
       res.status(201).json({
        message: 'Journal entry stored successfully.',
        imageUrls: imageUrls,
        audioUrls: audioUrls,
        videoUrls: videoUrls
    });
    } catch (error) {
        console.error('Error storing journal entry:', error);
        res.status(500).json({ error: 'An error occurred while storing the journal entry.' });
    }
});



// Endpoint to fetch all journal entries for a user
app.get('/journal/:userId', async (req, res) => {
    const userId = req.params.userId;

    // Find the user to get the collection name
    const user = await Users.findById(userId);
    if (!user) {
        return res.status(404).send('User not found');
    }

    const userDataModel = getUserModel(user.userDataCollection);

    try {
        const entries = await userDataModel.find({});
        res.json(entries);
    } catch (err) {
        res.status(500).send('Error fetching journal entries: ' + err);
    }
});




app.post('/signup', async (req, res) => {
    try {
        let check = await Users.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: 'User already exists' });
        }

        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        // Use the username directly as the collection name
        console.log('Username from request:', req.body.username);
        const userCollectionName = req.body.username;

        const user = new Users({
            name: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            cartData: cart,
            userDataCollection: userCollectionName
        });

        await user.save();

        // Dynamically create the user's specific collection model
        const userDataModel = getUserModel(userCollectionName);

        const initialData = new userDataModel({ data: 'Initial data for user' });
        await initialData.save();

        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, 'secret_ecom');
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, errors: 'Server error' });
    }
});


app.post('/login', async (req, res) => {
    try {
        let user = await Users.findOne({ email: req.body.email });
        if (user) {
            // Compare hashed password
            const passCompare = await bcrypt.compare(req.body.password, user.password);
            if (passCompare) {
                const data = {
                    user: {
                        id: user.id,
                        userDataCollection: user.userDataCollection // Include the collection name in the token
                    }
                };
                
                const token = jwt.sign(data, 'secret_ecom');
                res.json({ success: true, token });
            } else {
                res.json({ success: false, errors: 'Wrong Password' });
            }
        } else {
            res.json({ success: false, errors: 'Wrong Email Id' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, errors: 'Server error' });
    }
});


// Request Password Reset API
app.post('/forgot-password', async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ success: false, errors: 'No account with that email address exists.' });
        }

        // Generate a reset token
        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        await user.save();

        // Send email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'zensoul156@gmail.com',
                pass: 'ndbs lmzm xenk enyf'
            }
        });

        const mailOptions = {
            to: user.email,
            from: 'zensoul156@gmail.com',
            subject: 'Password Reset Request',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
            Please click on the following link, or paste this into your browser to complete the process:\n\n
            http://localhost:3000/PasswordReset/${token}\n\n
            If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };

        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: 'Password reset link sent to your email.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, errors: 'Server error' });
    }
});

// Reset Password API
app.post('/reset-password/:token', async (req, res) => {
    try {
        const user = await Users.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ success: false, errors: 'Password reset token is invalid or has expired.' });
        }

        // Update password and clear the reset token
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();

        // Send confirmation email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'zensoul156@gmail.com',
                pass: 'ndbs lmzm xenk enyf'
            }
        });

        const mailOptions = {
            to: user.email,
            from: 'zensoul156@gmail.com',
            subject: 'Your password has been changed',
            text: `Hello,\n\n
            This is a confirmation that the password for your account ${user.email} has just been changed.\n`
        };

        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: 'Password has been reset successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, errors: 'Server error' });
    }
});


// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use the email service you're using
    auth: {
      user: 'zensoul156@gmail.com', // Your email address
      pass: 'ndbs lmzm xenk enyf'   // Your email password (use environment variables in production)
    }
  });
  
  // Email route
app.post('/send-email', (req, res) => {
    const { username, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'zensoul156@gmail.com',
        subject: `Contact Form Submission: ${subject}`,
        text:  `You have a new message from: ${username} (${email})

        Subject: ${subject}

        Message: 
        ${message} ` 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        }
    });
});



app.listen(port,(error)=>{
    if(!error){
        console.log("Server running on port:" +port)
    }
    else{
        console.log("error:" +error)
    }
});
